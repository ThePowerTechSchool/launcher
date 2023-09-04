import { MONTSERRAT } from '@/utils/fonts'
import { cn } from '@/utils/functions'
import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  link: {
    href: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
  }
}

export default function HeaderWithIcon({ title, link: { href, icon: Icon } }: Props) {
  return (
    <header className='flex flex-col gap-6 md:flex-row items-center w-full mt-10 mb-6'>
      <h2
        className={cn(
          'text-center md:text-start  text-3xl md:text-4xl font-medium flex-1',
          MONTSERRAT.className
        )}
      >
        {title}
      </h2>
      <Link className='rounded w-7 h-7 ' href={href}>
        <Icon className='w-full h-full' />
      </Link>
    </header>
  )
}
