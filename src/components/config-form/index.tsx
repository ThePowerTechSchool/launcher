'use client'
import type { FormFieldDropdownPropsExtended, FormFieldTextPropsExtended } from './types'
import { useEffect, useState } from 'react'
import { CONFIG_FORM_FIELD_VARIANTS } from './constants'
import type FormFieldText from '@/components/form-field/form-field-text'
import { type Props as FormFieldTextProps } from '@/components/form-field/form-field-text'
import type FormFieldDropdown from '../form-field/form-field-dropdown'
import { type Props as FormFieldDropdownProps } from '../form-field/form-field-dropdown'
import ConfigFormNav from '../config-form-nav'

export interface Props {
  formFields: Array<FormFieldDropdownPropsExtended | FormFieldTextPropsExtended>
  onSubmit: (values: { [key: string]: string }) => void
}

const INITIAL_STEP = 0

export default function ConfigForm({ formFields, onSubmit }: Props) {
  const [steps, setSteps] = useState<number[]>([INITIAL_STEP])
  const [values, setValues] = useState<{ [key: string]: string }>(() => {
    const keys = formFields.map(({ id }) => id)

    return keys.reduce((acc, key) => {
      return Object.assign(acc, { [key]: '' })
    }, {})
  })
  const [sendForm, setSendForm] = useState(false)

  const [formField, setFormField] = useState<
    FormFieldDropdownPropsExtended | FormFieldTextPropsExtended
  >(formFields[INITIAL_STEP])

  const { variant, formFields: nestedFormFields, ...restOfFormFieldProps } = formField

  let FormField
  let _restOfFormFieldProps

  switch (variant) {
    case 'dropdown': {
      FormField = CONFIG_FORM_FIELD_VARIANTS[variant] as typeof FormFieldDropdown
      _restOfFormFieldProps = restOfFormFieldProps as FormFieldDropdownProps
    }
    case 'text': {
      FormField = CONFIG_FORM_FIELD_VARIANTS[variant] as typeof FormFieldText
      _restOfFormFieldProps = restOfFormFieldProps as FormFieldTextProps
    }
  }

  const onSuccess = (value: string, id: string) => {
    const newValues = { ...values, [id]: value }
    setValues(newValues)

    if (Array.isArray(nestedFormFields)) {
      const { length } = nestedFormFields
      if (length === 1) {
        const newSteps = [...steps, 0]
        const newFormField = nestedFormFields[0]
        setSteps(newSteps)
        setFormField(newFormField)

        return
      }

      const nextFormFieldIdx = nestedFormFields.findIndex((formField) => {
        return (
          formField.if &&
          Object.entries(formField.if).every(([key, value]) => {
            return value.includes(newValues[key])
          })
        )
      })

      const newFormField = nestedFormFields[nextFormFieldIdx]

      setSteps([...steps, nextFormFieldIdx])
      setFormField(newFormField)

      return
    }
    // !! test if steps.length is bigger than 1
    const newSteps = [...steps]
    newSteps[newSteps.length - 1] = newSteps[newSteps.length - 1] + 1
    setSteps(newSteps)

    if (newSteps.length === 1) {
      setFormField(formFields[newSteps[0]])
      return
    }

    let buffer = formFields[steps[0]]

    for (let i = 1; i < newSteps.length; i++) {
      buffer = buffer?.formFields?.[steps[i]] as
        | FormFieldDropdownPropsExtended
        | FormFieldTextPropsExtended
    }

    setFormField(buffer)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(values)
  }

  useEffect(() => {
    let buffer = formFields[steps[0]]
    const newSteps = [...steps]
    newSteps[newSteps.length - 1] = newSteps[newSteps.length - 1] + 1

    for (let i = 1; i < newSteps.length; i++) {
      buffer = buffer?.formFields?.[newSteps[i]] as
        | FormFieldDropdownPropsExtended
        | FormFieldTextPropsExtended
    }
    if (!nestedFormFields && !buffer) {
      setSendForm(true)
    }
  }, [formField, steps])

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center md:justify-center w-full h-full'
    >
      <FormField
        buttonType={sendForm ? 'submit' : 'button'}
        {..._restOfFormFieldProps}
        onSuccess={onSuccess}
      />
      <ConfigFormNav
        arrowDownButton={{
          disabled: true,
          handleClick: () => {}
        }}
        arrowUpButton={{
          disabled: true,
          handleClick: () => {}
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
