'use client'

import { cloneTemplate } from '@/utils/functions'

export default function ButtonClient({
  templateProps,
  projectName
}: {
  templateProps: string[]
  projectName: string
}) {
  const handleClick = async () => {
    await cloneTemplate(templateProps, projectName)
  }

  return (
    <button
      onClick={handleClick}
      className='rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white hover:brightness-125 transition py-2 px-4 font-medium text-xl'
    >
      Descargar Proyecto
    </button>
  )
}
