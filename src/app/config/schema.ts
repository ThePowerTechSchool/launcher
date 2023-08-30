import { custom, maxLength, minLength, string } from 'valibot'
import {
  AVAILABLE_VARIANTS,
  AVAILABLE_USE_CASES,
  AVAILABLE_STYLING_VARIANTS,
  AVAILABLE_TECHNOLOGIES,
  PROJECT_NAME_MAX_LENGTH
} from './constants'

export const projectNameSchema = string([
  minLength(1, 'El nombre del proyecto es un campo obligatorio'),
  maxLength(PROJECT_NAME_MAX_LENGTH, 'El nombre del proyecto no puede tener más de 32 caracteres')
])

export const technologySchema = string([
  minLength(1, 'La tecnología es un campo obligatorio'),
  custom((input) => {
    return AVAILABLE_TECHNOLOGIES.includes(input)
  }, `La tecnología introducida no es válida.`)
])

export const variantSchema = string([
  minLength(1, 'La variante es un campo obligatorio'),
  custom((input) => {
    return AVAILABLE_VARIANTS.includes(input)
  }, 'La variante introducida no es válida')
])

export const useCasesSchema = string([
  minLength(1, 'El caso de uso es un campo obligatorio'),
  custom((input) => {
    return AVAILABLE_USE_CASES.includes(input)
  }, 'El caso de uso que has elegido no está disponible')
])

export const stylingVariantSchema = string([
  minLength(1, 'La herramienta de estilado es un campo obligatorio'),
  custom((input) => {
    return AVAILABLE_STYLING_VARIANTS.includes(input)
  }, 'La herramienta de estilado que has elegido no esta disponible')
])
