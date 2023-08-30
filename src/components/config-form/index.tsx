'use client'
import type { FormFieldDropdownPropsExtended, FormFieldTextPropsExtended } from './types'
import ConfigFormNav from '../config-form-nav'
import SubmitButton from '../submit-button'
import { useConfigForm } from '@/hooks/use-config-form'

export interface Props {
  formFields: Array<FormFieldDropdownPropsExtended | FormFieldTextPropsExtended>
}

export default function ConfigForm({ formFields }: Props) {
  const {
    FormField,
    errorMessage,
    formField,
    handleArrowDownClick,
    handleArrowUpClick,
    handleSubmit,
    step,
    values,
    clear
  } = useConfigForm({ formFields })

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center md:justify-center w-full h-full'
    >
      {formField.variant === 'dropdown' ? (
        <FormField
          {...formField}
          errorMessage={{ message: errorMessage, clear }}
          defaultValue={values[formField.id]}
        >
          <SubmitButton />
        </FormField>
      ) : (
        <FormField {...formField} errorMessage={errorMessage} defaultValue={values[formField.id]}>
          <SubmitButton />
        </FormField>
      )}
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
