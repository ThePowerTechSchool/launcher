import { cn } from '@/utils/functions'
import type LandingTextProps from './utils/types'
import { MONTSERRAT } from '@/utils/fonts'

export default function LandingTitle({ children, className }: LandingTextProps) {
  return (
    <h3 className={cn('text-2xl text-center mt-10', className, MONTSERRAT.className)}>
      {children}
    </h3>
  )
}
