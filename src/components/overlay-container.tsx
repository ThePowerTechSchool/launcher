import { cn } from '@/utils/functions'

interface Props {
  handleClick: () => void
  className?: string
}

export default function OverlayContainer({ handleClick, className }: Props) {
  return (
    <div onClick={handleClick} className={cn('absolute w-screen h-screen z-10', className)}></div>
  )
}
