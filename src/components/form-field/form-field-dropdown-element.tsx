import { cn } from '@/utils/functions'

interface Props {
  className?: string
  children: React.ReactNode
  handleClick?: () => void
  // color: keyof typeof COLORS
}

export const COLORS = {
  yellow: 'text-yellow-300 border-yellow-300 fill-yellow-500',
  blue: 'text-blue-300 border-blue-300 fill-blue-500',
  green: 'text-green-300 border-green-300 fill-green-500'
}

export default function FormFieldDropdownElement({ className, children, handleClick }: Props) {
  return (
    <li
      onClick={handleClick}
      className={cn(
        'py-2 pl-2 pr-4 border rounded-lg hover:scale-95 transition-transform duration-300 ease-in-out cursor-pointer flex items-center justify-between',
        className
      )}
    >
      {children}
    </li>
  )
}
