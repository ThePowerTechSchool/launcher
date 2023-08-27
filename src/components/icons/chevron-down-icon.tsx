import { cn } from '@/utils/functions'
import type { IconProps } from './types'

export default function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg className={cn('w-4 h-4', className)}>
      <path d='M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z'></path>
    </svg>
  )
}
