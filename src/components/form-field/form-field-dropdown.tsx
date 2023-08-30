'use client'
import ChevronDownIcon from '../icons/chevron-down-icon'
import FormFieldLabel from './form-field-label'
import FormFieldWraper from './form-field-wraper'
import { cn } from '@/utils/functions'
import CrossIcon from '../icons/cross-icon'
import type { StringSchema } from 'valibot'
import { useFormFieldDropdown } from '@/hooks/use-form-field-dropdown'
import type { DropdownElement, ErrorMessage as ErrorMessageType } from './types'
import FormFieldDropdownElementsList from './form-field-dropdown-elements-list'
import OverlayContainer from '../overlay-container'
import ErrorMessage from '../error-message'

export interface Props {
  dropdownElements: DropdownElement[]
  label: string
  placeholder: string
  id: string
  schema: StringSchema<string>
  children?: React.ReactNode
  errorMessage?: ErrorMessageType
  defaultValue?: string
}

export default function FormFieldDropdown({
  dropdownElements: elements,
  id,
  label,
  placeholder,
  children,
  errorMessage,
  defaultValue
}: Props) {
  const {
    crossIcon,
    dropdownElements,
    handleChange,
    handleChevronButtonClick,
    handleCrossIconClick,
    handleDropdownElementClick,
    handleFocus,
    isOpen,
    selectedElement,
    showChildren,
    value,
    handleOverlayClick,
    showOverlayContainer
  } = useFormFieldDropdown({ elements, errorMessage, defaultValue, id })

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
        {errorMessage?.message && <ErrorMessage> {errorMessage.message} </ErrorMessage>}

        {isOpen && (
          <FormFieldDropdownElementsList
            dropdownElements={dropdownElements}
            handleDropdownElementClick={handleDropdownElementClick}
            selectedElement={selectedElement}
            value={value}
          />
        )}
        {showChildren && children}
      </FormFieldWraper>
      {showOverlayContainer && <OverlayContainer handleClick={handleOverlayClick} />}
    </>
  )
}
