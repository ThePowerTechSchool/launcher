import type { HIGHLIGHTED_COLORS } from './constants'

export interface DropdownElement {
  name: string
  className: string
  higilightedColor: keyof typeof HIGHLIGHTED_COLORS
  iconColor: string
}

export interface ErrorMessage {
  message: string
  clear: () => void
}
