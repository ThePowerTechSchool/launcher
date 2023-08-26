import { cn } from '@/utils/functions'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Launcher App',
  description: 'App that allows you to instantly lauch a pre-established web app configuration'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body
        className={cn(
          'mx-auto h-screen w-screen bg-zinc-900 max-w-5xl flex flex-col items-center  text-white gap-10 relative py-28 md:py-20',
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
