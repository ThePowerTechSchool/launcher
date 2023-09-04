import { VARIANTS, USE_CASES, STYLING_VARIANATS, TECHNOLOGIES } from '@/utils/constants'
import type { Props as ConfigFormProps } from '@/components/config-form'
import { PROJECT_NAME_MAX_LENGTH } from './constants'
import {
  variantSchema,
  projectNameSchema,
  stylingVariantSchema,
  useCasesSchema,
  technologySchema
} from './schema'

export const INITIAL_CONFIG_FORM_PROPS_FIELDS: ConfigFormProps['formFields'] = [
  {
    label: 'Nombre del proyecto',
    id: 'projectName',
    placeholder: 'Mi proyecto',
    type: 'text',
    maxLength: PROJECT_NAME_MAX_LENGTH,
    variant: 'text',
    schema: projectNameSchema
  },
  {
    dropdownElements: TECHNOLOGIES,
    label: 'Escribe o elige la tecnología que quieres usar para tu proyecto.',
    id: 'technology',
    placeholder: 'React',
    variant: 'dropdown',
    schema: technologySchema
  },
  {
    dropdownElements: VARIANTS,
    label: 'Escribe o elige la variante que quieres usar para tu proyecto.',
    id: 'variant',
    placeholder: 'TypeScript',
    variant: 'dropdown',
    schema: variantSchema,
    formFields: [
      {
        dropdownElements: STYLING_VARIANATS,
        label: 'Escribe o elige que quieres utilizar para estilar en tu proyecto.',
        id: 'stylingTool',
        if: { technology: ['React', 'Vanilla'] },
        placeholder: 'Tailwind',
        variant: 'dropdown',
        schema: stylingVariantSchema
      },
      {
        dropdownElements: USE_CASES,
        label: 'Escribe o elige la variante que quieres usar para tu proyecto.',
        id: 'useCase',
        placeholder: 'Scripting',
        variant: 'dropdown',
        schema: useCasesSchema,
        if: { technology: ['Node.js'] }
      }
    ]
  }
]
