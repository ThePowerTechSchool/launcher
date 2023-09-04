import Image from 'next/image'

export interface Props {
  img: {
    src: string
    alt: string
  }
  title: string
  description: string
  href: string
}

export default function Card({ img: { src, alt }, title, description, href }: Props) {
  return (
    <article className='max-w-sm border rounded-lg shadow bg-zinc-800 border-zinc-700'>
      <header className='w-full h-full'>
        <a href={href}>
          <Image
            className='rounded-t-lg object-cover w-full h-[200px]'
            width={300}
            height={200}
            src={src}
            alt={alt}
          />
        </a>
      </header>
      <footer className='p-5'>
        <a href={href}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
      </footer>
    </article>
  )
}
