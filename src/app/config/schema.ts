import { maxLength, minLength, string } from 'valibot'
import { AVAILABLE_TECHNOLOGIES, PROJECT_NAME_MAX_LENGTH } from './constants'

export const projectNameSchema = string([
  minLength(1, 'El nombre del proyecto no puede estar vacío'),
  maxLength(PROJECT_NAME_MAX_LENGTH, 'El nombre del proyecto no puede tener más de 32 caracteres')
])

export const technologySchema = string([
  minLength(1, 'La tecnología no puede estar vacía'),
  (input) => {
    if (!AVAILABLE_TECHNOLOGIES.includes(input)) {
      return {
        issue: {
          validation: 'custom',
          message: 'La tecnología que has elegido no está disponible',
          input
        }
      }
    }
    return { output: input }
  }
])
