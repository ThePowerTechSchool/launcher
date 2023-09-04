'use client'

import { INITIAL_CONFIG_FORM_PROPS_FIELDS } from './props'
import ConfigForm from '@/components/config-form'
import { cloneTemplate } from '@/utils/functions'
import { useRouter } from 'next/navigation'

export default function ConfigPage() {
  const router = useRouter()
  const handleSubmit = async (values: { [key: string]: string }) => {
    await cloneTemplate(
      [values.technology, values.variant, values.stylingTool || values.useCase],
      values.projectName
    )

    const url = `config/${values.technology.toLowerCase()}/${values.variant.toLowerCase()}/${
      values.stylingTool.toLowerCase() || values.useCase.toLowerCase()
    }${encodeURIComponent(values.projectName)}`

    router.push(url)
  }
  return <ConfigForm onSubmit={handleSubmit} formFields={INITIAL_CONFIG_FORM_PROPS_FIELDS} />
}
