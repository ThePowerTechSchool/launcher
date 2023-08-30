import type { FormEvent } from 'react'
import { useState } from 'react'
import type { Props as ConfigFormProps } from '@/components/config-form'
import { CONFIG_FORM_FIELD_VARIANTS } from '@/components/config-form/constants'
import { parse } from 'valibot'

export function useConfigForm({ formFields }: ConfigFormProps) {
  const [step, setStep] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const [values, setValues] = useState<{ [key: string]: string }>(() => {
    const keys = formFields.map(({ id }) => id)

    return keys.reduce((acc, key) => {
      return Object.assign(acc, { [key]: '' })
    }, {})
  })

  const formField = formFields[step]

  const FormField = CONFIG_FORM_FIELD_VARIANTS[formField.variant]

  const handleArrowUpClick = () => {
    setStep(step + 1)
  }

  const handleArrowDownClick = () => {
    setStep(step - 1)
  }

  const clear = () => {
    setErrorMessage('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formField = formFields[step]
    const data = Object.fromEntries(formData)

    const formFieldData = data[formField.id]

    try {
      parse(formField.schema, formFieldData)
      setErrorMessage('')
      const newValues = { ...values, [formField.id]: formFieldData as string }
      setValues(newValues)
      if (step !== formFields.length - 1) {
        let nextStep = step + 1
        const nextFormField = formFields[nextStep]

        if (nextFormField.if) {
          const ifEntries = Object.entries(nextFormField.if)
          let isIfValid = false

          do {
            const [ifKey, ifValue] = ifEntries[0]

            if (ifValue.includes(newValues[ifKey])) {
              isIfValid = true
            } else {
              nextStep++
            }
            if (nextStep === formFields.length - 1) {
              break
            }
          } while (!isIfValid)
        }
        setStep(nextStep)
        setErrorMessage('')
      }
    } catch (err) {
      const _err = err as Error
      setErrorMessage(_err.message)
      return
    }
  }
  return {
    step,
    errorMessage,
    values,
    formField,
    FormField,
    handleArrowUpClick,
    handleArrowDownClick,
    handleSubmit,
    clear
  }
}
