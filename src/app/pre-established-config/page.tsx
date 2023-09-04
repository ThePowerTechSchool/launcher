import Card from '@/components/card'
import HeaderWithIcon from '@/components/header-with-icon'
import HomeIcon from '@/components/icons/home-icon'
import { PRE_ESTABLISHED_CONFIGURATIONS } from '@/utils/constants'

export default function PreEstablishedConfig() {
  return (
    <section className='w-full px-4'>
      <HeaderWithIcon
        title='Configuraciones Pre-Establecidas'
        link={{ href: '/', icon: HomeIcon }}
      />
      <ul className='place-items-center  md:place-items-end w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-10'>
        {PRE_ESTABLISHED_CONFIGURATIONS.map((configuration) => {
          return (
            <li key={configuration.title}>
              <Card {...configuration} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
