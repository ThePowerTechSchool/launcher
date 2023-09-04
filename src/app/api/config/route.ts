// /* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//   projectNameSchema,
//   stylingVariantSchema,
//   technologySchema,
//   useCasesSchema,
//   variantSchema
// } from '@/app/config/schema'
// import { NextResponse } from 'next/server'
// import { parse } from 'valibot'
// import {
//   fetchPrivateFile,
//   fetchPublicFile,
//   getListGithubDirContentPropsFrom,
//   listGithubDirContent
// } from '@/utils/functions'
// import { githubApiService } from '@/services/github-api'
// import pMap from 'p-map'
// import type { FailedAttemptError } from 'p-retry'
// import pRetry from 'p-retry'
// import saveFile from 'save-file'
// import { urlParseRegex } from '@/utils/regex'
// import JSZip from 'jszip'

// function escapeFilepath(path: string) {
//   return path.replaceAll('#', '%23')
// }

// async function cloneTemplate(items: string[], projectName) {
//   const zip = new JSZip()
//   const baseUrl = 'https://github.com/ThePowerTechSchool/launcher-templates/tree/main'
//   const fullUrl = `${baseUrl}/${items.join('/').toLowerCase()}/template`
//   let user: string = ''
//   let repository: string = ''
//   let ref: string = ''
//   let dir: string = ''

//   try {
//     const parsedUrl = new URL(fullUrl)

//     ;[, user, repository, ref, dir] = urlParseRegex.exec(parsedUrl.pathname) as RegExpExecArray
//   } catch (err) {
//     console.log('ERROR', err)
//   }

//   const { private: repoIsPrivate } = await githubApiService.fetchRepoInfo({
//     repo: `${user}/${repository}`
//   })

//   const repoListingConfig = {
//     user: user as string,
//     repository: repository as string,
//     ref,
//     directory: decodeURIComponent(dir as string)
//   }

//   const files = await listGithubDirContent(repoListingConfig)

//   if (files.length === 0) {
//     throw new Error('No files to download')
//   }

//   const controller = new AbortController()

//   const fetchPublicFile = async (file: any) => {
//     const response = await fetch(
//       `https://raw.githubusercontent.com/${user}/${repository}/${ref}/${escapeFilepath(file.path)}`,
//       {
//         signal: controller.signal
//       }
//     )

//     if (!response.ok) {
//       throw new Error(`HTTP ${response.statusText} for ${file.path}`)
//     }

//     return response.blob()
//   }

//   const fetchPrivateFile = async (file: any) => {
//     const response = await fetch(file.url, {
//       headers: {
//         Authorization: `Bearer ${localStorage.token}`
//       },
//       signal: controller.signal
//     })

//     if (!response.ok) {
//       throw new Error(`HTTP ${response.statusText} for ${file.path}`)
//     }

//     const { content } = await response.json()
//     const decoder = await fetch(`data:application/octet-stream;base64,${content}`)
//     return decoder.blob()
//   }

//   let downloaded = 0

//   const downloadFile = async (file: any) => {
//     const localDownload = () => (repoIsPrivate ? fetchPrivateFile(file) : fetchPublicFile(file))
//     const onFailedAttempt = (error: FailedAttemptError) => {
//       console.error(
//         `Error downloading ${file.url}. Attempt ${error.attemptNumber}. ${error.retriesLeft} retries left.`
//       )
//     }

//     console.log({ localDownload })

//     const blob = await pRetry(localDownload, { onFailedAttempt })

//     console.log({ blob })

//     downloaded++
//     console.log(file.path)

//     zip.file(file.path.replace(dir + '/', ''), blob, {
//       binary: true
//     })
//   }

//   await pMap(files, downloadFile, { concurrency: 20 }).catch((error) => {
//     controller.abort()

//     if (!navigator.onLine) {
//       console.log('⚠ Could not download all files, network connection lost.')
//     } else if (error.message.startsWith('HTTP ')) {
//       console.log('⚠ Could not download all files.')
//     } else {
//       console.log(
//         '⚠ Some files were blocked from downloading, try to disable any ad blockers and refresh the page.'
//       )
//     }

//     throw error
//   })

//   console.log(`Zipping ${downloaded} files`)

//   const zipBlob = await zip.generateAsync({
//     type: 'blob'
//   })

//   await saveFile(zipBlob, `${user} ${repository} ${ref} ${dir}.zip`.replace(/\//, '-'))
// }

// export async function GET(request: Request) {
//   // READ PARAMS FROM URL
//   const url = new URL(request.url)
//   const params = url.searchParams

//   const projectName = params.get('projectName')
//   const technology = params.get('technology')
//   const variant = params.get('variant')
//   const stylingTool = params.get('stylingTool')
//   const useCase = params.get('useCase')
//   const testing = params.get('testing')

//   const files = await cloneTemplate(['React', 'JavaScript', 'Tailwind'], 'myProject')
//   return NextResponse.json(files, { status: 200 })

//   // try {
//   //   parse(projectNameSchema, projectName ?? '')
//   //   parse(technologySchema, technology ?? '')
//   //   parse(variantSchema, variant ?? '')

//   //   if (technology === 'React' || technology === 'JavaScript') {
//   //     parse(stylingVariantSchema, stylingTool ?? '')
//   //   } else {
//   //     parse(useCasesSchema, useCase ?? '')
//   //   }
//   // } catch (err) {
//   //   return NextResponse.json({ error: (err as Error).message }, { status: 400 })
//   // }

//   // return NextResponse.json('hello')
// }
