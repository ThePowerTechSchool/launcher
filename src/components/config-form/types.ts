import { type Props as FormFieldTextProps } from '@/components/form-field/form-field-text'
import { type Props as FormFieldDropdownProps } from '../form-field/form-field-dropdown'

interface FormFieldCommonProps {
  if?: { [key: string]: string[] }
  formFields?: Array<FormFieldDropdownPropsExtended | FormFieldTextPropsExtended>
}

type NeddedFormFieldDropdownProps = Omit<
  FormFieldDropdownProps,
  'children' | 'errorMessage' | 'defaultValue' | 'onSuccess'
>

type NeddedFormFieldTextProps = Omit<
  FormFieldTextProps,
  'children' | 'errorMessage' | 'defaultValue' | 'onSuccess'
>
export interface FormFieldDropdownPropsExtended
  extends NeddedFormFieldDropdownProps,
    FormFieldCommonProps {
  variant: 'dropdown'
}

export interface FormFieldTextPropsExtended extends NeddedFormFieldTextProps, FormFieldCommonProps {
  variant: 'text'
}

export type FormFieldType = FormFieldTextProps | FormFieldDropdownProps
