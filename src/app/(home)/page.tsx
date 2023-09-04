import { PROJECT_NAME } from '@/utils/constants'
import HomeHeader from '@/components/home-header'
import { HOME_HEADER_PROPS } from './props'
import LandingParragraph from '@/components/lading-parragraph'
import LandingTitle from '@/components/landing-title'
import Link from 'next/link'
import { CALL_TO_ACTION, HIGHLIGHTED_FEATURES, INTRODUCTION_TEXT, WHAT_IS } from './constants'

export default function Home() {
  return (
    <>
      <HomeHeader {...HOME_HEADER_PROPS} />
      <main>
        <section className='px-4'>
          <LandingParragraph>{INTRODUCTION_TEXT}</LandingParragraph>
          <LandingTitle>{WHAT_IS.title}</LandingTitle>
          <LandingParragraph>{WHAT_IS.parragraph}</LandingParragraph>
          <LandingTitle>{HIGHLIGHTED_FEATURES.title}</LandingTitle>
          <ol data-testid='higilighted-features-ordered-list' className='list-decimal px-4'>
            {HIGHLIGHTED_FEATURES.features.map((feature) => {
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
          <ul
            data-testid='call-to-action-unordered-list'
            className='flex flex-wrap mb-10 items-center justify-center w-full mt-10 gap-10'
          >
            {CALL_TO_ACTION.links.map(({ href, text }) => {
              return (
                <Link
                  key={href}
                  href={href}
                  className='text-black bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 hover:bg-gradient-to-br hover:from-zinc-300 hover:via-zinc-200 hover:to-zinc-100   shadow-lg shadow-zinc-500/50  rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 ring-1 animate-bounce  font-medium text-lg md:text-xl '
                >
                  {text}
                </Link>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}
