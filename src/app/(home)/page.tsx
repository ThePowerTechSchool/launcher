import Card from '@/components/card'
import { cn } from '@/utils/functions'
import { PRE_ESTABLISHED_CONFIGURATIONS } from '@/utils/constants'
import { MONTSERRAT } from '@/utils/fonts'
import HomeHeader from '@/components/home-header'
import { HOME_HEADER_PROPS } from './props'

export default function Home() {
  return (
    <>
      <HomeHeader {...HOME_HEADER_PROPS} />
      <main>
        <section>
          <h2
            className={cn(
              'text-3xl  lg:text-4xl 2xl:text-5xl font-medium leading-10 text-center',
              MONTSERRAT.className
            )}
          >
            Configuraciones Pre-establecidas
          </h2>
          <ul className='mt-10 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10 px-8'>
            {PRE_ESTABLISHED_CONFIGURATIONS.map((configuration) => {
              return (
                <li key={configuration.title}>
                  <Card {...configuration} />
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}
