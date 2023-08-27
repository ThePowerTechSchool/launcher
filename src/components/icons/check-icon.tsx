import { cn } from '@/utils/functions'
import type { IconProps } from './types'

export default function CheckIcon({ className }: IconProps) {
  return (
    <svg className={cn('w-4 h-4', className)}>
      <path d='M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z'></path>
    </svg>
  )
}
