import { type Props as FormFieldTextProps } from '@/components/form-field/form-field-text'
import { type Props as FormFieldDropdownProps } from '../form-field/form-field-dropdown'
import type { StringSchema } from 'valibot'

export interface FormFieldDropdownPropsExtended extends FormFieldDropdownProps {
  variant: 'dropdown'
  schema: StringSchema<string>
  if?: { [key: string]: string[] }
}

export interface FormFieldTextPropsExtended extends FormFieldTextProps {
  variant: 'text'
  schema: StringSchema<string>
  if?: { [key: string]: string[] }
}
