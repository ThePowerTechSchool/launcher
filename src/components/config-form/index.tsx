'use client'
import type { FormFieldDropdownPropsExtended, FormFieldTextPropsExtended } from './types'
import ConfigFormNav from '../config-form-nav'
import { useConfigForm } from '@/hooks/use-config-form'

export interface Props {
  formFields: Array<FormFieldDropdownPropsExtended | FormFieldTextPropsExtended>
  onSubmit: (values: { [key: string]: string }) => void
}

export default function ConfigForm({ formFields, onSubmit }: Props) {
  const { FormField, formFieldProps, handleKeyDown, handleSubmit, onSuccess, sendForm } =
    useConfigForm({ formFields, onSubmit })
  return (
    <form
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center md:justify-center w-full h-full'
    >
      <FormField
        buttonType={sendForm ? 'submit' : 'button'}
        {...formFieldProps}
        onSuccess={onSuccess}
      />
      {/* TODO: Arrows logic  */}
      <ConfigFormNav
        // arrowDownButton={{
        //   disabled: true,
        //   handleClick: () => {}
        // }}
        // arrowUpButton={{
        //   disabled: true,
        //   handleClick: () => {}
        // }}
        link={{
          href: 'https://thepowermba.com/',
          target: '_blank',
          rel: 'noopener noreferrer'
        }}
      >
        Powered by <span className='font-bold '>The Power MBA</span>
      </ConfigFormNav>
    </form>
  )
}
