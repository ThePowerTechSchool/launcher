import { custom, maxLength, minLength, string } from 'valibot'
import {
  AVAILABLE_FRONT_VARIANTS,
  AVAILABLE_NODEJS_VARIANTS,
  AVAILABLE_STYLING_VARIANTS,
  AVAILABLE_TECHNOLOGIES,
  PROJECT_NAME_MAX_LENGTH
} from './constants'

export const projectNameSchema = string([
  minLength(1, 'El nombre del proyecto no puede estar vacío'),
  maxLength(PROJECT_NAME_MAX_LENGTH, 'El nombre del proyecto no puede tener más de 32 caracteres')
])

export const technologySchema = string([
  minLength(1, 'La tecnología no puede estar vacía'),
  custom((input) => {
    return AVAILABLE_TECHNOLOGIES.includes(input)
  }, 'La tecnología que has elegido no está disponible')
])

export const frontVariantSchema = string([
  minLength(1, 'La variante no puede estar vacía'),
  custom((input) => {
    return AVAILABLE_FRONT_VARIANTS.includes(input)
  }, 'La variante que has elegido no está disponible')
])

export const nodejsVariantSchema = string([
  minLength(1, 'La variante no puede estar vacía'),
  custom((input) => {
    return AVAILABLE_NODEJS_VARIANTS.includes(input)
  }, 'La variante que has elegido no está disponible')
])

export const stylingVariantSchema = string([
  minLength(1, 'La variante no puede estar vacía'),
  custom((input) => {
    return AVAILABLE_STYLING_VARIANTS.includes(input)
  }, 'La variante que has elegido no está disponible')
])
