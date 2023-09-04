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
export const PROJECT_NAME = 'Launcher App'

export const HIGILIGHTED_FEATURES = [
  {
    title: 'Preguntas Inteligentes: ',
    description: `${PROJECT_NAME} te guía a través de una serie de preguntas clave para entender tus necesidades. ¿Qué tecnologías prefieres? ¿Qué tipo de proyecto estás construyendo? Nuestra aplicación se adapta a tus respuestas y genera una estructura de proyecto personalizada`
  },
  {
    title: 'Scaffolding Automatizado: ',
    description: ` Olvídate de crear estructuras de proyectos desde cero. ${PROJECT_NAME} genera automáticamente la carpeta con el scaffolding adecuado, ahorrándote horas de trabajo manual.`
  },
  {
    title: 'Gestión de Dependencias: ',
    description: `¿Necesitas ciertas bibliotecas o dependencias específicas? ${PROJECT_NAME} se encarga de la instalación y configuración de todas las dependencias necesarias para tu proyecto.`
  },
  {
    title: 'Personalización Total: ',
    description: `Aunque ${PROJECT_NAME} automatiza gran parte del proceso, aún tienes el control total. Puedes personalizar y ajustar cualquier aspecto de tu proyecto según tus necesidades.`
  },
  {
    title: 'Compatibilidad con las Tecnologías Más Populares: ',
    description: `Trabaja con las tecnologías más utilizadas, desde JavaScript y React hasta Python y Django. ${PROJECT_NAME} te respalda en una amplia variedad de tecnologías y marcos de trabajo.`
  }
]

// Temporary until we have a better name
