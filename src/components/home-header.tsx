export interface Props {
  title: string
}

export default function HomeHeader({ title }: Props) {
  return (
    <header>
      <h1 className='text-5xl  lg:text-6xl 2xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400 font-bold '>
        {title}
      </h1>
    </header>
  )
}
