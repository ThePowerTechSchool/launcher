import Link from 'next/link'
import ChevronDownIcon from './icons/chevron-down-icon'

interface ButtonProps {
  handleClick: () => void
  disabled: boolean
}

export interface Props {
  arrowUpButton?: ButtonProps
  arrowDownButton?: ButtonProps
  link: Pick<HTMLAnchorElement, 'target' | 'href' | 'rel'>
  children: React.ReactNode
}

export default function ConfigFormNav({ arrowUpButton, arrowDownButton, link, children }: Props) {
  return (
    <nav className='flex items-center w-full md:w-fit justify-around md:justify-center gap-2  absolute bottom-10 md:right-24'>
      {arrowDownButton && arrowUpButton && (
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
      )}

      <Link
        href={link.href}
        target={link.target}
        rel={link.rel}
        className='text-xs md:text-sm rounded p-2 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 hover:bg-gradient-to-br hover:from-zinc-300 hover:via-zinc-200 hover:to-zinc-100  shadow-lg shadow-zinc-500/50 ring-1 font-medium transition-colors  shadow-[rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;] text-black font-sans'
      >
        {children}
      </Link>
    </nav>
  )
}
