import { cn } from '@/utils/functions'
import type LandingTextProps from './utils/types'

export default function LandingParragraph({ children, className }: LandingTextProps) {
  return (
    <p className={cn(' p-2 max-w-[800] leading-6 text-lg md:text-xl text-center', className)}>
      {children}
    </p>
  )
}
