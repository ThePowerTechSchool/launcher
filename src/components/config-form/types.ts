import { type Props as FormFieldTextProps } from '@/components/form-field/form-field-text'
import { type Props as FormFieldDropdownProps } from '../form-field/form-field-dropdown'

export interface FormFieldDropdownPropsExtended extends FormFieldDropdownProps {
  variant: 'dropdown'
}

export interface FormFieldTextPropsExtended extends FormFieldTextProps {
  variant: 'text'
}
