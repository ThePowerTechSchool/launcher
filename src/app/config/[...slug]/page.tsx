import HomeIcon from '@/components/icons/home-icon'
import Link from 'next/link'
import { VIDEOS } from './constants'
import ButtonClient from './button-client'
import HeaderWithIcon from '@/components/header-with-icon'

export interface Props {
  params: {
    slug: string[]
  }
  searchParams: { project_name: string | undefined }
}

export default function ReviewPageClient({ params, searchParams }: Props) {
  const { slug } = params

  let video = VIDEOS?.[slug[0] as keyof typeof VIDEOS]

  for (let i = 1; i < slug.length; i++) {
    video = video?.[slug[i]]
  }

  if (video == null || typeof video !== 'string' || searchParams['project_name'] == null) {
    return (
      <div>
        <h1>Error - Not found. Missing slug or project-name param</h1>
      </div>
    )
  }

  return (
    <section className='flex flex-col relative px-4 w-full'>
      <div className='flex items-center justify-center flex-col w-full'>
        <HeaderWithIcon title='Demo' link={{ href: '/', icon: HomeIcon }} />
        <video
          className='max-w-[1000px] w-full rounded mb-12'
          src='https://www.youtube.com/watch?v=Pv5RVMdxXXc'
          controls
        ></video>
        <ButtonClient templateProps={slug} projectName={searchParams['project_name']} />
      </div>
    </section>
  )
}
