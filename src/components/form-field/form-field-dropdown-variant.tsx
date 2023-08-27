'use client'
// !! Crear pantalla que absorva click fuera del dropdown

import { useState } from 'react'
import ChevronDownIcon from '../icons/chevron-down-icon'
import FormFieldLabel from './form-field-label'
import FormFieldWraper from './form-field-wraper'
import FormFieldDropdownElement from './form-field-dropdown-element'
import { cn } from '@/utils/functions'

const TECHNOLOGIES = [
  {
    name: 'React',
    color: 'blue-300'
  },
  {
    name: 'JavaScript',
    color: 'yellow-300'
  },
  {
    name: 'Node.js',
    color: 'green-300'
  }
]

export default function FormFieldDropdownVariant() {
  const [isOpen, setIsOpen] = useState(false)

  const handleChevronButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <FormFieldWraper>
      <FormFieldLabel htmlFor='dropdown'>
        Elige qué tecnología quieres usar para tu proyecto
      </FormFieldLabel>
      <div className='flex justify-between items-center w-full bg-transparent border-b border-white '>
        <input
          className='text-[20px] font-sans outline-none bg-transparent w-full'
          type='text'
          id='dropdown'
          autoComplete='off'
          aria-autocomplete='list'
          placeholder='Type or select an option'
        />

        <button
          onClick={handleChevronButtonClick}
          type='button'
          tabIndex={0}
          aria-label='Show options'
          aria-expanded={'false'}
        >
          <ChevronDownIcon
            className={cn('fill-white transition-transform', isOpen && 'rotate-180 mb-3')}
          />
        </button>
      </div>
      {isOpen && (
        <>
          <ul className='w-full bg-transparent flex flex-col gap-2'>
            {TECHNOLOGIES.map((technology) => {
              return (
                <FormFieldDropdownElement key={technology.name} color={technology.color}>
                  {technology.name}
                </FormFieldDropdownElement>
              )
            })}
          </ul>
          <div className='absolute w-screen h-full'></div>
        </>
      )}
    </FormFieldWraper>
  )
}
