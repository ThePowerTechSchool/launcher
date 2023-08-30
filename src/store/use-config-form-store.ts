import { create } from 'zustand'
import type { StylingTool, Technology, Variant } from '../utils/types'

export type useConfigFormStateKeys = keyof useConfigFormState

interface useConfigFormState {
  name: string
  technology: Technology
  variant: Variant
  stylingTool: StylingTool
  testing: boolean
}

interface useConfigFormActions {
  setName: (name: string) => void
  setTechnology: (technology: Technology) => void
  setVariant: (variant: Variant) => void
  setStylingTool: (stylingTool: StylingTool) => void
  setTesting: (testing: boolean) => void
}

const useConfigFormInitialState: useConfigFormState = {
  name: '',
  technology: 'React',
  stylingTool: null,
  variant: 'TypeScript',
  testing: false
}

export const useConfigFormStore = create<useConfigFormState & useConfigFormActions>((set) => ({
  ...useConfigFormInitialState,
  setName: (name) => set({ name }),
  setTechnology: (technology) => set({ technology }),
  setVariant: (variant) => set({ variant }),
  setStylingTool: (stylingTool) => set({ stylingTool }),
  setTesting: (testing) => set({ testing })
}))
