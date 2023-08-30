'use client'

import { INITIAL_CONFIG_FORM_PROPS_FIELDS } from './props'
import ConfigForm from '@/components/config-form'

export default function ConfigPage() {
  const handleSubmit = (values: { [key: string]: string }) => {
    console.log(values)
  }
  return <ConfigForm onSubmit={handleSubmit} formFields={INITIAL_CONFIG_FORM_PROPS_FIELDS} />
}
