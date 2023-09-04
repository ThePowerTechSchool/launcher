import { type Props as CardProps } from '@/components/card'
import type { DropdownElement } from '@/components/form-field/types'

export const PRE_ESTABLISHED_CONFIGURATIONS: CardProps[] = [
  {
    img: {
      src: '/images/blog.webp',
      alt: 'Blog example image'
    },
    description:
      'Configuración la cual utiliza las tecnologías más punteras para crear tu Landing page de manera rapida y eficiente',
    href: '/config/vanilla/javascript/tailwind?project_name=landing-page',
    title: 'Blog'
  },
  {
    img: {
      src: '/images/landing.webp',
      alt: 'Landing example image'
    },
    description:
      'Configuración la cual utiliza las tecnologías más punteras para crear tu Landing page de manera rapida y eficiente',
    href: '/config/vanilla/typescript/tailwind?project_name=landing-page',
    title: 'Landing Page'
  },
  {
    img: {
      src: '/images/web-app.webp',
      alt: 'Web app example image'
    },
    description:
      'Configuración la cual utiliza las tecnologías más punteras para crear tu Landing page de manera rapida y eficiente',
    href: '/config/react/typescript/tailwind?project_name=web-app',
    title: 'Aplicación web'
  },
  {
    img: {
      src: '/images/dashboard.webp',
      alt: 'Dashboard example image'
    },
    description:
      'Configuración la cual utiliza las tecnologías más punteras para crear tu Landing page de manera rapida y eficiente',
    href: '/config/react/typescript/tailwind?project_name=dashboard',
    title: 'Dashboard'
  }
]

export const TECHNOLOGIES: DropdownElement[] = [
  {
    name: 'React',
    className: 'text-blue-300 border-blue-300 z-20',
    higilightedColor: 'blue',
    iconColor: 'fill-blue-500'
  },
  {
    name: 'Vanilla',
    className: 'text-yellow-300 border-yellow-300 z-20',
    higilightedColor: 'yellow',
    iconColor: 'fill-yellow-500'
  },
  {
    name: 'Node.js',
    className: 'text-green-300 border-green-300 z-20',
    higilightedColor: 'green',
    iconColor: 'fill-green-500'
  }
]

export const VARIANTS: DropdownElement[] = [
  {
    name: 'JavaScript',
    className: 'text-yellow-300 border-yellow-300 z-20',
    higilightedColor: 'yellow',
    iconColor: 'fill-yellow-500'
  },
  {
    name: 'TypeScript',
    className: 'text-blue-300 border-blue-300 z-20',
    higilightedColor: 'blue',
    iconColor: 'fill-blue-500'
  }
]

export const USE_CASES: DropdownElement[] = [
  {
    name: 'Scripting',
    className: 'text-red-300 border-red-300 z-20',
    higilightedColor: 'red',
    iconColor: 'fill-red-500'
  },
  {
    name: 'Express.js',
    className: 'text-green-300 border-green-300 z-20',
    higilightedColor: 'green',
    iconColor: 'fill-green-500'
  }
]

export const STYLING_VARIANATS: DropdownElement[] = [
  {
    name: 'Tailwind',
    className: 'text-blue-300 border-blue-300 z-20',
    higilightedColor: 'blue',
    iconColor: 'fill-blue-500'
  },
  {
    name: 'CSS',
    className: 'text-green-300 border-green-300 z-20',
    higilightedColor: 'green',
    iconColor: 'fill-green-500'
  }
]
export const PROJECT_NAME = 'Luncher App'

// Temporary until we have a better name
