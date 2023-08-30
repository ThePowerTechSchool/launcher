import type { DropdownElement, ErrorMessage } from '@/components/form-field/types'
// import type { Technology } from '@/utils/types'
import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import type { StringSchema } from 'valibot'
import { parse } from 'valibot'

interface Props {
  elements: DropdownElement[]
  errorMessage?: ErrorMessage
  defaultValue?: string
  schema: StringSchema<string>
  onSuccess: (value: string, id: string) => void
  id: string
}

export function useFormFieldDropdown({ elements, defaultValue, schema, onSuccess, id }: Props) {
  const [value, setValue] = useState(defaultValue ?? '')
  const [selectedElement, setSelectedElement] = useState('')
  const [dropdownElements, setDropdownElements] = useState(elements)
  const [isOpen, setIsOpen] = useState(false)
  const [crossIcon, setCrossIcon] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const showChildren = !isOpen
  const showOverlayContainer = isOpen && !errorMessage

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setCrossIcon(true)
    setSelectedElement('')
  }

  const handleChevronButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOverlayClick = () => {
    setIsOpen(false)
  }

  const handleDropdownElementClick = (value: string) => {
    setValue(value)
    setSelectedElement(value)
    setCrossIcon(true)
    setIsOpen(false)
  }

  const handleCrossIconClick = () => {
    setValue('')
    setSelectedElement('')
    setIsOpen(false)
    setCrossIcon(false)
  }

  const handleSubmitButtonClick = () => {
    try {
      parse(schema, value)
      setErrorMessage('')
      onSuccess(value, id)
      setValue(defaultValue ?? '')
      setSelectedElement('')
      setIsOpen(false)
      setCrossIcon(false)
    } catch (err) {
      setErrorMessage((err as Error).message)
    }
  }

  useEffect(() => {
    const { length: valueLength } = value
    const newDropdownElements = elements.filter((technology) => {
      const slicedTechnologyName = technology.name.slice(0, valueLength)
      return slicedTechnologyName === value
    })
    setDropdownElements(newDropdownElements)

    if (newDropdownElements.length === 0) {
      setIsOpen(false)
      return
    }

    if (!isFirstRender && !selectedElement) {
      setIsOpen(true)
      return
    }
  }, [value])

  useEffect(() => {
    if (isOpen) {
      setErrorMessage('')
    }
  }, [isOpen])

  useEffect(() => {
    setIsFirstRender(false)
    if (defaultValue) {
      setValue(defaultValue)
      setSelectedElement(defaultValue)
      setCrossIcon(true)
    }
  }, [])

  // useEffect(() => {
  //   setValue(defaultValue ?? '')
  //   setSelectedElement(defaultValue ?? '')
  //   setCrossIcon(defaultValue ? true : false)
  //   setIsOpen(false)
  // }, [id])

  return {
    value,
    selectedElement,
    dropdownElements,
    isOpen,
    crossIcon,
    showChildren,
    handleFocus,
    handleChange,
    handleChevronButtonClick,
    handleOverlayClick,
    handleDropdownElementClick,
    handleCrossIconClick,
    showOverlayContainer,
    isFirstRender,
    handleSubmitButtonClick,
    errorMessage
  }
}
