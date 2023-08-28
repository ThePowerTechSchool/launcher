'use client'

import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import ChevronDownIcon from '../icons/chevron-down-icon'
import FormFieldLabel from './form-field-label'
import FormFieldWraper from './form-field-wraper'
import FormFieldDropdownElement from './form-field-dropdown-element'
import { cn } from '@/utils/functions'
import CheckIcon from '../icons/check-icon'
import CrossIcon from '../icons/cross-icon'
import ConfigFormError from '../config-form-error'
import type { AnySchema } from 'valibot'

export interface DropdownElement {
  name: string
  className: string
  higilightedColor: keyof typeof HIGHLIGHTED_COLORS
  iconColor: string
}
export interface Props {
  dropdownElements: DropdownElement[]
  label: string
  placeholder: string
  id: string
  noResultsText: string
  schema: AnySchema
  children?: React.ReactNode
}

const HIGHLIGHTED_COLORS = {
  yellow: 'text-yellow-500',
  blue: 'text-blue-500',
  green: 'text-green-500'
}

export default function FormFieldDropdown({
  dropdownElements: elements,
  id,
  label,
  placeholder,
  noResultsText,
  children
}: Props) {
  const [value, setValue] = useState('')
  const [selectedElement, setSelectedElement] = useState('')
  const [dropdownElements, setDropdownElements] = useState(elements)
  const [isOpen, setIsOpen] = useState(false)
  const [crossIcon, setCrossIcon] = useState(false)
  const [showNoResults, setShowNoResults] = useState(false)

  const showChildren = !isOpen && !showNoResults

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setCrossIcon(true)
    setSelectedElement('')
  }

  const handleChevronButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOutsideDropdownClick = () => {
    setIsOpen(false)
    const names = elements.map((element) => element.name)

    if (!names.includes(value) && value.length > 0) {
      setShowNoResults(true)
    }
  }

  const handleDropdownElementClick = (value: string) => {
    setValue(value)
    setSelectedElement(value)
    setCrossIcon(true)
    setIsOpen(false)
  }

  const handleCrossIconClick = () => {
    setValue('')
    setSelectedElement('')
    setIsOpen(false)
    setCrossIcon(false)
  }

  useEffect(() => {
    const valueLength = value.length
    const filteredDropdownElements = elements.filter((technology) => {
      const slicedTechnologyName = technology.name.slice(0, valueLength)
      return slicedTechnologyName === value
    })
    setDropdownElements(filteredDropdownElements)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  useEffect(() => {
    if (dropdownElements.length === 0) {
      setShowNoResults(true)
    } else {
      setShowNoResults(false)
    }
  }, [dropdownElements])

  useEffect(() => {
    if (isOpen) {
      setShowNoResults(false)
    }
  }, [isOpen])

  return (
    <>
      <FormFieldWraper>
        <FormFieldLabel htmlFor={id}>{label}</FormFieldLabel>
        <div className='flex justify-between items-center w-full bg-transparent border-b border-white '>
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            value={value}
            className='text-[20px] font-sans outline-none bg-transparent w-full max-w-[720px] z-20'
            type='text'
            id={id}
            name={id}
            autoComplete='off'
            aria-autocomplete='list'
            placeholder={placeholder}
          />

          {crossIcon ? (
            <button
              className='z-20'
              onClick={handleCrossIconClick}
              type='button'
              tabIndex={0}
              aria-label={'Clear Selection'}
            >
              <CrossIcon className='fill-white transition-transform' />
            </button>
          ) : (
            <button
              className='z-20'
              onClick={handleChevronButtonClick}
              type='button'
              tabIndex={0}
              aria-label={isOpen ? 'Close Dropdown' : 'Open Dropdown'}
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <ChevronDownIcon
                className={cn('transition-transform', isOpen && 'rotate-180 mb-3')}
              />
            </button>
          )}
        </div>
        {showNoResults && <ConfigFormError> {noResultsText} </ConfigFormError>}

        {isOpen && (
          <ul className='w-full bg-transparent flex flex-col gap-2'>
            {dropdownElements.map((dropdownElement) => {
              const higlightedLetters = dropdownElement.name.slice(0, value.length)
              const restOfLetters = dropdownElement.name.slice(value.length)
              const isSelected = selectedElement === dropdownElement.name

              return (
                <FormFieldDropdownElement
                  key={dropdownElement.name}
                  handleClick={() => handleDropdownElementClick(dropdownElement.name)}
                  className={dropdownElement.className}
                >
                  <div>
                    <span className={HIGHLIGHTED_COLORS[dropdownElement.higilightedColor]}>
                      {higlightedLetters}
                    </span>
                    {restOfLetters}
                  </div>

                  {isSelected && <CheckIcon className={dropdownElement.iconColor} />}
                </FormFieldDropdownElement>
              )
            })}
          </ul>
        )}
        {showChildren && children}
      </FormFieldWraper>
      {isOpen && !showNoResults && (
        <div onClick={handleOutsideDropdownClick} className='absolute w-screen h-screen z-10'></div>
      )}
    </>
  )
}
