import { cn } from '@/utils/functions'
import type { IconProps } from './types'

export default function CrossIcon({ className }: IconProps) {
  return (
    <svg className={cn('w-4 h-4', className)}>
      <path d='M8 6.586l6-6L15.414 2l-6 6 6 6L14 15.414l-6-6-6 6L.586 14l6-6-6-6L2 .586l6 6z'></path>
    </svg>
  )
}
