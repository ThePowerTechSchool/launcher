import {
  FRONT_END_VARIANTS,
  NODE_JS_VARIANTS,
  STYLING_VARIANATS,
  TECHNOLOGIES
} from '@/utils/constants'
import type { Props as ConfigFormProps } from '@/components/config-form'
import { PROJECT_NAME_MAX_LENGTH } from './constants'
import {
  frontVariantSchema,
  projectNameSchema,
  stylingVariantSchema,
  technologySchema
} from './schema'

export const INITIAL_CONFIG_FORM_PROPS_FIELDS: ConfigFormProps['formFields'] = [
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
    variant: 'dropdown',
    schema: technologySchema
  },
  {
    dropdownElements: FRONT_END_VARIANTS,
    label: 'Escribe o elige la variante que quieres usar para tu proyecto.',
    id: 'variant-dropdown',
    placeholder: 'TypeScript',
    variant: 'dropdown',
    schema: frontVariantSchema,
    if: { 'technology-dropdown': ['React', 'JavaScript'] }
  },

  {
    dropdownElements: NODE_JS_VARIANTS,
    label: 'Escribe o elige la variante que quieres usar para tu proyecto.',
    id: 'variant-dropdown',
    placeholder: 'Scripting',
    variant: 'dropdown',
    schema: technologySchema,
    if: { 'technology-dropdown': ['Node.js'] }
  },

  {
    dropdownElements: STYLING_VARIANATS,
    label: 'Escribe o elige que quieres utilizar para estilar en tu proyecto.',
    id: 'styliling-variant-dropdown',
    placeholder: 'Tailwind',
    variant: 'dropdown',
    schema: stylingVariantSchema,
    if: { 'technology-dropdown': ['React', 'JavaScript'] }
  },

  {
    dropdownElements: FRONT_END_VARIANTS,
    label: 'Escribe o elige la variante que quieres usar para tu proyecto.',
    id: 'nodejs-variant-dropdown',
    placeholder: 'TypeScript',
    variant: 'dropdown',
    schema: frontVariantSchema,
    if: { 'technology-dropdown': ['Node.js'] }
  }
]
