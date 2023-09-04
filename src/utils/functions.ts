/* eslint-disable @typescript-eslint/no-explicit-any */
import { githubApiService } from '@/services/github-api'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { urlParseRegex } from './regex'
import type { FailedAttemptError } from 'p-retry'
import JSZip from 'jszip'
import saveFile from 'save-file'
import pRetry from 'p-retry'
import pMap from 'p-map'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}

interface ListGithubDirContentParams {
  user: string
  repository: string
  ref?: string
  directory: string
  getFullData?: boolean
}

export async function listGithubDirContent({
  user,
  repository,
  ref = 'HEAD',
  directory,
  getFullData = true
}: ListGithubDirContentParams) {
  if (!directory.endsWith('/')) {
    directory += '/'
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const files: any = []

  try {
    const contents = await githubApiService.fetchRepoInfo({
      repo: `${user}/${repository}/git/trees/${ref}?recursive=1`
    })

    for (const item of contents.tree) {
      if (item.type === 'blob' && item.path.startsWith(directory)) {
        files.push(getFullData ? item : item.path)
      }
    }

    files.truncated = contents.truncated
    return files
  } catch (err) {
    throw err
  }
}

function escapeFilepath(path: string) {
  return path.replaceAll('#', '%23')
}

export async function cloneTemplate(items: string[], projectName: string) {
  const zip = new JSZip()
  const baseUrl = 'https://github.com/ThePowerTechSchool/launcher-templates/tree/main'
  const fullUrl = `${baseUrl}/${items.join('/').toLowerCase()}/template`
  let user: string = ''
  let repository: string = ''
  let ref: string = ''
  let dir: string = ''

  try {
    const parsedUrl = new URL(fullUrl)

    ;[, user, repository, ref, dir] = urlParseRegex.exec(parsedUrl.pathname) as RegExpExecArray
  } catch (err) {
    console.log('ERROR', err)
  }

  const { private: repoIsPrivate } = await githubApiService.fetchRepoInfo({
    repo: `${user}/${repository}`
  })

  const repoListingConfig = {
    user: user as string,
    repository: repository as string,
    ref,
    directory: decodeURIComponent(dir as string)
  }

  const files = await listGithubDirContent(repoListingConfig)

  if (files.length === 0) {
    throw new Error('No files to download')
  }

  const controller = new AbortController()

  const fetchPublicFile = async (file: any) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/${user}/${repository}/${ref}/${escapeFilepath(file.path)}`,
      {
        signal: controller.signal
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP ${response.statusText} for ${file.path}`)
    }

    return response.blob()
  }

  const fetchPrivateFile = async (file: any) => {
    const response = await fetch(file.url, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      },
      signal: controller.signal
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.statusText} for ${file.path}`)
    }

    const { content } = await response.json()
    const decoder = await fetch(`data:application/octet-stream;base64,${content}`)
    return decoder.blob()
  }

  const downloadFile = async (file: any) => {
    const localDownload = () => (repoIsPrivate ? fetchPrivateFile(file) : fetchPublicFile(file))
    const onFailedAttempt = (error: FailedAttemptError) => {
      console.error(
        `Error downloading ${file.url}. Attempt ${error.attemptNumber}. ${error.retriesLeft} retries left.`
      )
    }

    const blob = await pRetry(localDownload, { onFailedAttempt })

    zip.file(file.path.replace(dir + '/', ''), blob, {
      binary: true
    })
  }

  await pMap(files, downloadFile, { concurrency: 20 }).catch((error) => {
    controller.abort()

    if (!navigator.onLine) {
      console.log('⚠ Could not download all files, network connection lost.')
    } else if (error.message.startsWith('HTTP ')) {
      console.log('⚠ Could not download all files.')
    } else {
      console.log(
        '⚠ Some files were blocked from downloading, try to disable any ad blockers and refresh the page.'
      )
    }

    throw error
  })

  const zipBlob = await zip.generateAsync({
    type: 'blob'
  })

  await saveFile(zipBlob, `${projectName}.zip`.replace(/\//, '-'))
}
