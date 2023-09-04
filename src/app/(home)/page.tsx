import { HIGILIGHTED_FEATURES, PROJECT_NAME } from '@/utils/constants'
import HomeHeader from '@/components/home-header'
import { HOME_HEADER_PROPS } from './props'
import LandingParragraph from '@/components/lading-parragraph'
import LandingTitle from '@/components/landing-title'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HomeHeader {...HOME_HEADER_PROPS} />
      <main>
        <section className='px-4'>
          <LandingParragraph>
            ¡Bienvenido a la revolución en el desarrollo web! {PROJECT_NAME} es tu socio perfecto
            para acelerar tus proyectos en línea. ¿Estás cansado de perder tiempo configurando tu
            entorno de desarrollo, instalando dependencias y creando estructuras de proyectos desde
            cero? ¡No busques más! {PROJECT_NAME} ha llegado para simplificar tu vida y hacerte más
            productivo que nunca.
          </LandingParragraph>
          <LandingTitle>¿Qué es {PROJECT_NAME}?</LandingTitle>
          <LandingParragraph>
            {PROJECT_NAME} es un innovador acelerador de proyectos web que te permite iniciar tus
            desarrollos con un solo clic. Ya no tienes que preocuparte por las tareas tediosas de
            configuración y organización. Nuestra aplicación inteligente hace el trabajo por ti,
            permitiéndote enfocarte en lo que realmente importa: escribir código y hacer que tu
            proyecto cobre vida.
          </LandingParragraph>
          <LandingTitle>Características Destacadas:</LandingTitle>
          <ol className='list-decimal px-4'>
            {HIGILIGHTED_FEATURES.map((feature) => {
              return (
                <li key={feature.title} className='first-of-type:mt-0 mt-6'>
                  <LandingParragraph>
                    <span className='font-bold'>{feature.title}</span>
                    {feature.description}
                  </LandingParragraph>
                </li>
              )
            })}
          </ol>
          <LandingTitle>
            ¡Prueba{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400 font-bold'>
              {PROJECT_NAME}{' '}
            </span>
            Ahora!
          </LandingTitle>
          <div className='flex flex-wrap mb-10 items-center justify-center w-full mt-10 gap-10'>
            <Link
              href={'/config'}
              className='text-black bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 hover:bg-gradient-to-br hover:from-zinc-300 hover:via-zinc-200 hover:to-zinc-100   shadow-lg shadow-zinc-500/50  rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 ring-1 animate-bounce  font-medium text-lg md:text-xl '
            >
              Crear Configuración
            </Link>
            <Link
              href={'/pre-established-config'}
              className='text-black bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 hover:bg-gradient-to-br hover:from-zinc-300 hover:via-zinc-200 hover:to-zinc-100   shadow-lg shadow-zinc-500/50  rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 ring-1 animate-bounce  font-medium text-lg md:text-xl '
            >
              Usar Configuración
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
