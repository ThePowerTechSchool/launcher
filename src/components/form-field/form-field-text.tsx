'use client'

import FormFieldLabel from './form-field-label'
import FormFieldWraper from './form-field-wraper'
import ErrorMessage from '../error-message'

export interface Props {
  label: string
  id: string
  placeholder: string
  type?: 'text' | 'email' | 'password'
  maxLength?: number
  children?: React.ReactNode
  errorMessage?: string
  defaultValue?: string
}

export default function FormFieldText({
  label,
  id,
  placeholder,
  type = 'text',
  maxLength = 32,
  children,
  errorMessage,
  defaultValue
}: Props) {
  return (
    <FormFieldWraper>
      <FormFieldLabel htmlFor='project-name'>{label}</FormFieldLabel>
      <input
        className='bg-transparent border-b border-white w-full text-[20px] max-w line-clamp-[28px] font-sans outline-none'
        maxLength={maxLength}
        autoComplete='off'
        tabIndex={0}
        placeholder={placeholder}
        type={type}
        id={id}
        name={id}
        defaultValue={defaultValue}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {children}
    </FormFieldWraper>
  )
}
