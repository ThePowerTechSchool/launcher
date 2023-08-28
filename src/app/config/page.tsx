'use client'

import { CONFIG_FORM_PROPS_FIELDS } from './props'
import ConfigForm from '@/components/config-form'

export default function ConfigPage() {
  return <ConfigForm formFields={CONFIG_FORM_PROPS_FIELDS} />
}
