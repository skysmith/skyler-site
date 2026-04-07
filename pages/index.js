import Head from 'next/head'

const workLanes = [
  {
    title: 'Product engineering',
    summary: 'Shipping web products that stay legible under real use.',
    detail: 'Interface systems, architecture decisions, and cleanup work that reduce long-term drag instead of adding more shine.'
  },
  {
    title: 'Operational software',
    summary: 'Internal tools for reconciliation, reporting, and review.',
    detail: 'Work surfaces that need to feel trustworthy, fast to scan, and durable enough for repeat operator use.'
  },
  {
    title: 'Focused experiments',
    summary: 'Small prototypes and automation ideas kept narrow on purpose.',
    detail: 'Useful proofs of concept that can be revised quickly, archived cleanly, or expanded only after they earn trust.'
  }
]

const operatingPrinciples = [
  {
    label: 'Calm before clever',
    copy: 'The page should read like a brief, not a product launch. Orientation wins before flourish.'
  },
  {
    label: 'Typography does the lifting',
    copy: 'Hierarchy comes from type, spacing, and order. Borders and surfaces stay quiet unless they add real meaning.'
  },
  {
    label: 'Color is semantic',
    copy: 'Neutrals dominate. Green marks stability and progress; rust is reserved for caution, drag, or burden.'
  }
]

const summaryItems = [
  {
    value: '03',
    label: 'Working lanes'
  },
  {
    value: '01',
    label: 'Continuous canvas'
  },
  {
    value: '02',
    label: 'Live legal routes'
  }
]

const signalItems = [
  {
    label: 'Mode',
    value: 'Regular website',
    tone: 'positive'
  },
  {
    label: 'Direction',
    value: 'Calm operational minimalism',
    tone: 'neutral'
  },
  {
    label: 'Status',
    value: 'Privacy policy and EULA remain live',
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
          content="A typography-first website for product engineering, experiments, and practical operational systems."
        />
      </Head>

      <main className="site-shell">
        <header className="site-header">
          <div className="site-identity">
            <p className="site-kicker">Skyler Smith</p>
            <p className="site-masthead">Product engineering, operational software, and deliberate experiments.</p>
          </div>
          <nav className="site-nav" aria-label="Primary">
            <a href="#lanes">Lanes</a>
            <a href="#principles">Principles</a>
            <a href="#legal">Legal</a>
          </nav>
        </header>

        <section className="hero-grid" aria-labelledby="home-heading">
          <div className="hero-copy">
            <p className="section-eyebrow">Operational brief</p>
            <h1 id="home-heading">Quiet systems for work that needs to stay readable.</h1>
            <p className="hero-summary">
              This homepage now follows a quieter operational language: one continuous canvas, thin dividers,
              report-like hierarchy, and restrained color that carries meaning instead of decoration.
            </p>
            <div className="hero-links">
              <a href="#lanes">
                Review the lanes
              </a>
              <a href="#principles">
                Read the principles
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

        <section className="summary-strip" aria-label="Site summary">
          {summaryItems.map((item) => (
            <div className="summary-cell" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section-band" id="lanes">
          <div className="section-heading">
            <p className="section-eyebrow">Current lanes</p>
            <h2>What this site is built to hold.</h2>
            <p>
              The page stays narrow in scope on purpose: a clear operating surface for the kinds of work that
              benefit from trust, legibility, and low-friction upkeep.
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
            <p className="section-eyebrow">Operating principles</p>
            <h2>The interface should feel managed, not marketed.</h2>
            <p>
              The visual system stays report-like on purpose. Structure comes from reading order, spacing,
              alignment, and thin rules before any heavier treatment appears.
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
            <h2>The operational pages stay available.</h2>
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
          <p>Single-page site. Thin rules. Muted palette. No game shell.</p>
        </footer>
      </main>
    </>
  )
}
