import FormFieldDropdown from '../form-field/form-field-dropdown'
import FormFieldText from '../form-field/form-field-text'

export type ConfigFormFieldVariant = 'dropdown' | 'text'

type ConfigFormField = {
  [key in ConfigFormFieldVariant]: typeof FormFieldDropdown | typeof FormFieldText
}

export const CONFIG_FORM_FIELD_VARIANTS: ConfigFormField = {
  dropdown: FormFieldDropdown,
  text: FormFieldText
}
