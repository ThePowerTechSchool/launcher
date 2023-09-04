import type { ButtonType } from '@/utils/types'
import CheckIcon from './icons/check-icon'

interface Props {
  disabled?: boolean
  onClick?: () => void
  type?: ButtonType
}

export default function SubmitButton({ disabled = false, onClick, type = 'submit' }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className=' self-start items-center  px-[12px] py-[4px] md:px-[14px] mdpy-[6px]
      bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 hover:bg-gradient-to-br hover:from-zinc-300 hover:via-zinc-200 hover:to-zinc-100  shadow-lg shadow-zinc-500/50  rounded-lg  ring-1   font-medium text-lg md:text-xl transition-colors  shadow-[rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;] disabled:opacity-50 disabled:cursor-not-allowe text-black'
    >
      <CheckIcon className='stroke-[1.9px] w-5 h-5 md:w-6 md:h-6' />
    </button>
  )
}
