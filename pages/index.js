import Head from 'next/head'
import styles from '../styles/Home.module.css'

const projects = [
  { name: 'Story Dock', href: 'https://getstorydock.com/' },
  { name: 'Clementine Kids', href: 'https://clementinekids.com/' },
  { name: 'Bridger Gear', href: 'https://bridgergear.com/' },
  { name: 'Tony Grove', href: 'https://open.spotify.com/artist/683U6wyvDadi5GExsaaojj' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Skyler Smith</title>
        <meta name="description" content="Projects by Skyler Smith." />
        <link rel="canonical" href="https://www.skylersmith.org/" />
      </Head>

      <main className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.name}>Skyler Smith</h1>
          <nav aria-label="Projects">
            <ul className={styles.projects} role="list">
              {projects.map(({ name, href }) => (
                <li key={name}>
                  <a className={styles.link} href={href}>
                    <span>{name}</span>
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </>
  )
}
