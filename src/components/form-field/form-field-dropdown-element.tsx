import { cn } from '@/utils/functions'

interface Props {
  color: string
  children: React.ReactNode
}

export default function FormFieldDropdownElement({ color, children }: Props) {
  const borderColor = `border-${color}`
  const textColor = `text-${color}`
  return (
    <li
      className={cn(
        'py-2 px-2  border rounded-lg hover:scale-95 transition-transform duration-300 ease-in-out cursor-pointer',
        borderColor,
        textColor
      )}
    >
      {children}
    </li>
  )
}
