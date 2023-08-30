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
      className=' self-start flex gap-2 rounded-[4px] items-center px-[14px] py-[6px]
    bg-blue-500 hover:bg-blue-400 transition-colors font-bold shadow-[rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;] text-sm font-sans disabled:opacity-50 disabled:cursor-not-allowed'
    >
      OK <CheckIcon className='fill-white' />
    </button>
  )
}
