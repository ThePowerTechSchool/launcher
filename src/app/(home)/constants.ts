import { PROJECT_NAME } from '../../utils/constants'

export const INTRODUCTION_TEXT = `¡Bienvenido a la revolución en el desarrollo web! ${PROJECT_NAME} es tu socio perfecto
para acelerar tus proyectos en línea. ¿Estás cansado de perder tiempo configurando tu
entorno de desarrollo, instalando dependencias y creando estructuras de proyectos desde
cero? ¡No busques más! ${PROJECT_NAME} ha llegado para simplificar tu vida y hacerte más
productivo que nunca.`

export const WHAT_IS = {
  title: `¿Qué es ${PROJECT_NAME}?`,
  parragraph: `${PROJECT_NAME} es un innovador acelerador de proyectos web que te permite iniciar tus
  desarrollos con un solo clic. Ya no tienes que preocuparte por las tareas tediosas de
  configuración y organización. Nuestra aplicación inteligente hace el trabajo por ti,
  permitiéndote enfocarte en lo que realmente importa: escribir código y hacer que tu
  proyecto cobre vida.`
}

export const HIGHLIGHTED_FEATURES = {
  title: 'Características Destacadas:',
  features: [
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
}

export const CALL_TO_ACTION = {
  title: `¡Prueba ${PROJECT_NAME} ahora!`,
  links: [
    {
      text: 'Crear Proyecto',
      href: '/config'
    },
    {
      text: 'Ver Proyectos',
      href: '/pre-establidhed-config'
    }
  ]
}
