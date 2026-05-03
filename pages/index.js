import Head from 'next/head'

const workLanes = [
  {
    title: 'Small Business',
    summary: 'Practical operating systems for useful work.',
    detail: 'I like small, durable tools around inventory, finance, ecommerce, and the daily mechanics that keep a business moving.'
  },
  {
    title: 'Realty',
    summary: 'Transaction work with less avoidable friction.',
    detail: 'Real estate is easier to keep doing when deadlines, follow-up, and coordination have a calmer surface.'
  },
  {
    title: 'Music',
    summary: 'Songs, recordings, and related creative work.',
    detail: 'Tony Grove is the public music thread, with room nearby for games, family-history projects, and useful experiments.'
  }
]

const projectLinks = [
  {
    title: 'Tony Grove Music',
    lane: 'Music',
    summary: 'Songs and recordings from my folk-ish solo music project.',
    href: 'https://open.spotify.com/artist/683U6wyvDadi5GExsaaojj?si=OhSxvCvRSQmI92vmmL8yZw',
    access: 'public'
  },
  {
    title: 'Bridger Gear',
    lane: 'Business',
    summary: 'Outdoor gear brand and shop.',
    href: 'https://bridgergear.com',
    access: 'public'
  },
  {
    title: 'Clementine Kids',
    lane: 'Business',
    summary: 'Kids bedding, nursery goods, and the business that funds a lot of the practical experiments.',
    href: 'https://clementinekids.com',
    access: 'public'
  },
  {
    title: 'Transaction Cockpit',
    lane: 'Real estate',
    summary: 'Local transaction coordination cockpit for deadlines, checklists, contract intake, documents, and reviewed follow-up drafts.',
    href: 'http://localhost:3001',
    access: 'local'
  },
  {
    title: 'Finance + Clementine Ops Dashboard',
    lane: 'Operations',
    summary: 'Private money, QuickBooks, inventory, planning, and business operations dashboard.',
    href: 'http://127.0.0.1:8765',
    access: 'local'
  },
  {
    title: 'Bill Pay',
    lane: 'Operations',
    summary: 'Human-reviewed bill intake, review, and payment-prep surface.',
    href: 'http://localhost:3000',
    access: 'local'
  },
  {
    title: 'Instagram Planner',
    lane: 'Business',
    summary: 'Lightweight Bridger Gear image selection, caption drafting, and posting-prep workspace.',
    href: 'http://127.0.0.1:8080',
    access: 'local'
  },
  {
    title: 'Arcade Lobby',
    lane: 'Games',
    summary: 'Cabinet-oriented game lobby and launcher for browser game experiments.',
    href: 'http://localhost:5173',
    access: 'local'
  },
  {
    title: 'Dice Rodeo',
    lane: 'Games',
    summary: 'Fast browser dice game deployed as a public play surface.',
    href: 'https://bank-dice-phi.vercel.app/index.html?play=bank-local',
    access: 'public'
  },
  {
    title: 'CrossDice Arcade',
    lane: 'Games',
    summary: 'Turn-based dice board game with rows, locks, and arcade scoring.',
    href: 'https://bank-dice-phi.vercel.app/qwixx/index.html',
    access: 'public'
  },
  {
    title: 'Restock Raven',
    lane: 'Inventory',
    summary: 'Inventory and replenishment workspace for operating decisions.',
    href: 'https://github.com/skysmith/restock-raven',
    access: 'gated'
  }
]

const operatingPrinciples = [
  {
    label: 'Useful before impressive',
    copy: 'I am usually more interested in whether a thing lowers friction than whether it looks like a big announcement.'
  },
  {
    label: 'Small systems compound',
    copy: 'A lot of the best work is not dramatic. It is the boring surface that makes tomorrow easier.'
  },
  {
    label: 'Leave room for side quests',
    copy: 'I like projects that can stay alive without needing to become a whole identity or a giant plan.'
  }
]

const contextItems = [
  {
    label: 'Based in',
    value: 'Northern Utah',
    copy: 'Working across small business, real estate, music, and practical private tools.'
  },
  {
    label: 'Public thread',
    value: 'Music, shops, games',
    copy: 'A few doors open outward; the rest point back to work surfaces that live closer to home.'
  },
  {
    label: 'Private systems',
    value: 'Operations and planning',
    copy: 'Most of the useful software here is modest, local, and built to reduce everyday drag.'
  }
]

const signalItems = [
  {
    label: 'Location',
    value: 'Northern Utah',
    tone: 'positive'
  },
  {
    label: 'Work',
    value: 'Small Business, Realty, Music',
    tone: 'neutral'
  },
  {
    label: 'Access',
    value: 'Some doors are local or gated',
    tone: 'warning'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Skyler Smith</title>
        <meta
          name="description"
          content="Skyler Smith's quiet home base for Small Business, Realty, Music, and practical experiments."
        />
      </Head>

      <main className="site-shell">
        <header className="site-header">
          <div className="site-identity">
            <img className="site-mark" src="/favicon.svg" alt="" aria-hidden="true" />
            <div>
              <p className="site-kicker">Skyler Smith</p>
              <p className="site-masthead">Small Business, Realty, Music.</p>
            </div>
          </div>
          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#work">Work</a>
            <a href="#legal">Legal</a>
          </nav>
        </header>

        <section className="hero-grid" aria-labelledby="home-heading">
          <div className="hero-copy">
            <h1 id="home-heading">Skyler Smith</h1>
            <p className="hero-summary">
              I build and operate small, useful things: internal software, ecommerce systems, real-estate tools,
              browser games, family-history projects, and songs under the name Tony Grove.
            </p>
            <p className="hero-summary hero-summary-secondary">
              This site is mostly a home base. Some links are public; some are just signposts back to private
              tools I use to keep work from turning into fog.
            </p>
            <div className="hero-links">
              <a href="#about">
                Read the short bio
              </a>
              <a href="#projects">
                Open project index
              </a>
              <a href="#legal">
                Open the legal routes
              </a>
            </div>
          </div>

          <aside className="hero-ledger" aria-label="Site status">
            {signalItems.map((item) => (
              <div className={`signal-block signal-block--${item.tone}`} key={item.label}>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            ))}
          </aside>
        </section>

        <section className="context-strip" aria-label="Site context">
          {contextItems.map((item) => (
            <div className="context-cell" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.copy}</p>
            </div>
          ))}
        </section>

        <section className="section-band about-band" id="about">
          <div className="section-heading">
            <p className="section-eyebrow">About</p>
            <h2>A builder-operator in northern Utah.</h2>
          </div>
          <div className="bio-grid">
            <p>
              I make software and small systems for the real work around me: businesses, finances, creative
              projects, real estate, and the everyday operations that become easier when they have a better
              surface.
            </p>
            <p>
              A lot of my projects are intentionally modest. I like tools that help a person think clearly,
              follow through, and keep useful work from becoming heavier than it needs to be.
            </p>
          </div>
        </section>

        <section className="section-band" id="projects">
          <div className="section-heading">
            <p className="section-eyebrow">Project index</p>
            <h2>Public links and private signposts.</h2>
            <p>
              A small directory for public, gated, and local-only projects. Some destinations are meant for
              authenticated or machine-local use, so the link is the handoff, not a promise of public access.
            </p>
          </div>
          <div className="project-list" role="list">
            {projectLinks.map((item) => (
              <a className="project-row" href={item.href} key={item.title} rel="noopener noreferrer" target="_blank" role="listitem">
                <div className="project-heading">
                  <p>{item.lane}</p>
                  <h3>{item.title}</h3>
                </div>
                <p className="project-copy">{item.summary}</p>
                <span className={`project-access project-access--${item.access}`}>{item.access}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section-band" id="work">
          <div className="section-heading">
            <p className="section-eyebrow">Working modes</p>
            <h2>What I tend to make.</h2>
            <p>
              The common thread is not a single industry. It is a preference for systems that make real life
              easier to navigate.
            </p>
          </div>
          <div className="lane-list" role="list">
            {workLanes.map((item) => (
              <article className="lane-row" key={item.title} role="listitem">
                <div className="lane-heading">
                  <p>{item.title}</p>
                  <h3>{item.summary}</h3>
                </div>
                <p className="lane-copy">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band" id="principles">
          <div className="section-heading">
            <p className="section-eyebrow">Principles</p>
            <h2>A few preferences that keep showing up.</h2>
            <p>
              These are less like brand pillars and more like habits I keep rediscovering while working.
            </p>
          </div>
          <div className="principle-list" role="list">
            {operatingPrinciples.map((item, index) => (
              <div className="principle-row" key={item.label} role="listitem">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band section-band--accent" id="legal">
          <div className="section-heading">
            <p className="section-eyebrow">Legal</p>
            <h2>A couple of operational pages stay available.</h2>
            <p>
              Existing compliance pages for Clementine Ledger Sync remain live and inherit the same quieter
              visual language as the rest of the site.
            </p>
          </div>
          <div className="route-links route-links--ledger">
            <a href="/legal/privacy">Privacy policy</a>
            <a href="/legal/eula">EULA</a>
          </div>
        </section>

        <footer className="site-footer">
          <p>Quiet home base. Public links, private signposts, and a few useful doors.</p>
        </footer>
      </main>
    </>
  )
}
