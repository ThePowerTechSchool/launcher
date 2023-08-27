import Link from 'next/link'

export interface Props {
  title: string
  link: {
    href: string
    text: string
  }
}

export default function HomeHeader({ title, link: { href, text } }: Props) {
  return (
    <header>
      <h1 className='text-5xl  lg:text-6xl 2xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400 font-bold '>
        {title}
      </h1>
      <Link
        href={href}
        className='text-black bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 hover:bg-gradient-to-br hover:from-zinc-300 hover:via-zinc-200 hover:to-zinc-100   shadow-lg shadow-zinc-500/50  rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 ring-1 animate-bounce  font-medium absolute top-10 md:top-8 right-0'
      >
        {text}
      </Link>
    </header>
  )
}
