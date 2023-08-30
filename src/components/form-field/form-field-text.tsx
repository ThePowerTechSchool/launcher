'use client'

import FormFieldLabel from './form-field-label'
import FormFieldWraper from './form-field-wraper'
import ErrorMessage from '../error-message'
import { parse, type StringSchema } from 'valibot'
import SubmitButton from '../submit-button'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import type { ButtonType } from '@/utils/types'

export interface Props {
  label: string
  id: string
  placeholder: string
  type?: 'text' | 'email' | 'password'
  maxLength?: number
  defaultValue?: string
  schema: StringSchema<string>
  onSuccess: (value: string, id: string) => void
  buttonType?: ButtonType
}

export default function FormFieldText({
  label,
  id,
  placeholder,
  type = 'text',
  maxLength = 32,
  defaultValue,
  schema,
  onSuccess,
  buttonType
}: Props) {
  const [errorMessage, setErrorMessage] = useState('')
  const [value, setValue] = useState(defaultValue ?? '')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }
  const handleClick = () => {
    try {
      parse(schema, value)
      setErrorMessage('')
      onSuccess(value, id)
    } catch (err) {
      setErrorMessage((err as Error).message)
    }
  }

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
        onChange={handleChange}
        name={id}
        defaultValue={defaultValue}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <SubmitButton type={buttonType} onClick={handleClick} />
    </FormFieldWraper>
  )
}
