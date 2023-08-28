'use client'

import { parse, type StringSchema } from 'valibot'
import FormFieldLabel from './form-field-label'
import FormFieldWraper from './form-field-wraper'
import { useState, type ChangeEvent } from 'react'
import ConfigFormError from '../config-form-error'

export interface Props {
  label: string
  id: string
  placeholder: string
  type?: 'text' | 'email' | 'password'
  maxLength?: number
  children?: React.ReactNode
  schema: StringSchema<string>
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function FormFieldText({
  label,
  id,
  placeholder,
  type = 'text',
  maxLength = 32,
  children,
  schema,
  handleChange
}: Props) {
  const [errorMessage, setErrorMessage] = useState('')

  const _handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      parse(schema, e.target.value)
      setErrorMessage('')
      handleChange && handleChange(e)
    } catch (err) {
      const _err = err as Error
      setErrorMessage(_err.message)
    }
  }

  return (
    <FormFieldWraper>
      <FormFieldLabel htmlFor='project-name'>{label}</FormFieldLabel>
      <input
        onChange={_handleChange}
        className='bg-transparent border-b border-white w-full text-[20px] max-w line-clamp-[28px] font-sans outline-none'
        maxLength={maxLength}
        autoComplete='off'
        tabIndex={0}
        placeholder={placeholder}
        type={type}
        id={id}
        name={id}
      />
      {errorMessage ? <ConfigFormError>{errorMessage}</ConfigFormError> : children}
    </FormFieldWraper>
  )
}
