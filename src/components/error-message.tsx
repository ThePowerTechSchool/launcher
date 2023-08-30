import { cn } from '@/utils/functions'
import ExclamationTriangle from './icons/exclamation-triangle'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function ErrorMessage({ children, className }: Props) {
  return (
    <div
      role='alert'
      className={cn(
        'bg-red-200 py-2 px-2 text-md flex  items-center text-red-500 rounded-sm',
        className
      )}
    >
      <ExclamationTriangle className='w-6 h-6 fill-red-500' />
      {children}
    </div>
  )
}
