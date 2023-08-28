'use client'
import type { FormEvent } from 'react'
import React, { useEffect, useState } from 'react'
import SubmitButton from '../submit-button'
import type { FormFieldDropdownPropsExtended, FormFieldTextPropsExtended } from './types'
import { CONFIG_FORM_FIELD_VARIANTS } from './constants'
import ConfigFormNav from '../config-form-nav'

export interface Props {
  formFields: Array<FormFieldDropdownPropsExtended | FormFieldTextPropsExtended>
}

export default function ConfigForm({ formFields }: Props) {
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<{ [key: string]: string }>(() => {
    const keys = formFields.map(({ id }) => id)

    return keys.reduce((acc, key) => {
      return Object.assign(acc, { [key]: '' })
    }, {})
  })

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const formField = formFields[step]

  const FormField = CONFIG_FORM_FIELD_VARIANTS[formField.variant]

  const handleArrowUpClick = () => {
    setStep(step + 1)
  }

  const handleArrowDownClick = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (step === formFields.length - 1) {
      console.log('submit')
    } else {
      setStep(step + 1)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    setValues((prev) => {
      return { ...prev, [id]: value }
    })
  }

  useEffect(() => {
    const _value = values[formField.id]

    if (_value) {
      setIsSubmitButtonDisabled(false)
    } else {
      setIsSubmitButtonDisabled(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, step])

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center md:justify-center w-full h-full'
    >
      <FormField {...formField} handleChange={handleChange}>
        <SubmitButton disabled={isSubmitButtonDisabled} />
      </FormField>
      <ConfigFormNav
        arrowDownButton={{
          disabled: step === 0,
          handleClick: handleArrowDownClick
        }}
        arrowUpButton={{
          disabled: step === formFields.length - 1,
          handleClick: handleArrowUpClick
        }}
        link={{
          href: 'https://thepowermba.com/',
          target: '_blank',
          rel: 'noopener noreferrer'
        }}
      >
        Powered by <span className='text-black font-bold'>The Power MBA</span>
      </ConfigFormNav>
    </form>
  )
}
