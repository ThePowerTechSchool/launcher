import { TECHNOLOGIES } from '@/utils/constants'
import type { Props as ConfigFormProps } from '@/components/config-form'
import { PROJECT_NAME_MAX_LENGTH } from './constants'
import { projectNameSchema, technologySchema } from './schema'

export const CONFIG_FORM_PROPS_FIELDS: ConfigFormProps['formFields'] = [
  {
    label: 'Nombre del proyecto',
    id: 'project-name',
    placeholder: 'Mi proyecto',
    type: 'text',
    maxLength: PROJECT_NAME_MAX_LENGTH,
    variant: 'text',
    schema: projectNameSchema
  },
  {
    dropdownElements: TECHNOLOGIES,
    label: 'Escribe o elige la tecnología que quieres usar para tu proyecto.',
    id: 'technology-dropdown',
    placeholder: 'React',
    noResultsText: 'La tecnología que buscas no está en la lista',
    variant: 'dropdown',
    schema: technologySchema
  }
]
