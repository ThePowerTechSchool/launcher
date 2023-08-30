import type { DropdownElement } from './types'
import FormFieldDropdownElement from './form-field-dropdown-element'
import { HIGHLIGHTED_COLORS } from './constants'
import CheckIcon from '../icons/check-icon'

interface Props {
  dropdownElements: DropdownElement[]
  value: string
  selectedElement: string
  handleDropdownElementClick: (value: string) => void
}

export default function FormFieldDropdownElementsList({
  dropdownElements,
  value,
  selectedElement,
  handleDropdownElementClick
}: Props) {
  return (
    <ul className='w-full bg-transparent flex flex-col gap-2'>
      {dropdownElements.map((dropdownElement) => {
        const higlightedLetters = dropdownElement.name.slice(0, value.length)
        const restOfLetters = dropdownElement.name.slice(value.length)
        const isSelected = selectedElement === dropdownElement.name

        return (
          <FormFieldDropdownElement
            key={dropdownElement.name}
            handleClick={() => handleDropdownElementClick(dropdownElement.name)}
            className={dropdownElement.className}
          >
            <div>
              <span className={HIGHLIGHTED_COLORS[dropdownElement.higilightedColor]}>
                {higlightedLetters}
              </span>
              {restOfLetters}
            </div>

            {isSelected && <CheckIcon className={dropdownElement.iconColor} />}
          </FormFieldDropdownElement>
        )
      })}
    </ul>
  )
}
