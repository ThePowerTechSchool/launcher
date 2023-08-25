import Image from 'next/image'

const PRE_ESTABLISHED_CONFIGURATIONS = [
  {
    label: 'Landing page',
    value: 'landing-page'
  }
]

export default function Home() {
  return (
    <>
      <header>
        <h1>Launcher App</h1>
      </header>
      <main>
        <section>
          <button>Start configuration</button>
        </section>
        <section>
          <h2>Pre-established configurations</h2>
          <ul>
            {PRE_ESTABLISHED_CONFIGURATIONS.map((configuration) => {
              return (
                <li key={configuration.label}>
                  <button>{configuration.label}</button>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}
