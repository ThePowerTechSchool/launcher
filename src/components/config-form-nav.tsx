import Link from 'next/link'
import ChevronDownIcon from './icons/chevron-down-icon'

interface ButtonProps {
  handleClick: () => void
  disabled: boolean
}

export interface Props {
  arrowUpButton: ButtonProps
  arrowDownButton: ButtonProps
  link: Pick<HTMLAnchorElement, 'target' | 'href' | 'rel'>
  children: React.ReactNode
}

export default function ConfigFormNav({ arrowUpButton, arrowDownButton, link, children }: Props) {
  return (
    <nav className='flex items-center w-full md:w-fit justify-around md:justify-center gap-2  absolute bottom-10 md:right-24'>
      <section className='flex items-center rounded bg-blue-500 '>
        <button
          disabled={arrowUpButton.disabled}
          type='button'
          className=' flex items-center justify-center p-2 rounded hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={arrowUpButton.handleClick}
        >
          <ChevronDownIcon className='stroke-2 rotate-180 md:h-5 md:w-5' />
        </button>
        <button
          disabled={arrowDownButton.disabled}
          type='button'
          onClick={arrowDownButton.handleClick}
          className='flex items-center justify-center p-2 rounded hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <ChevronDownIcon className='stroke-2 md:h-5 md:w-5' />
        </button>
      </section>

      <Link
        href={link.href}
        target={link.target}
        rel={link.rel}
        className='font-medium text-xs md:text-sm bg-blue-500 rounded p-2 hover:bg-blue-400 transition-colors'
      >
        {children}
      </Link>
    </nav>
  )
}
