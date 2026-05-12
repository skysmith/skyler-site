import Head from 'next/head'

const sampleStats = [
  { label: 'Sample files', value: '4' },
  { label: 'Review items', value: '7' },
  { label: 'Ready drafts', value: '3' },
  { label: 'Real client records', value: '0' }
]

const queueItems = [
  {
    title: '123 Main St',
    status: 'Needs review',
    meta: 'Buyer file · inspection objection due Friday',
    detail: 'Suggested folder match, earnest money receipt, and three extracted dates are waiting for agent approval.'
  },
  {
    title: '48 Canyon View',
    status: 'Ready draft',
    meta: 'Seller file · title follow-up',
    detail: 'A coordinator note is drafted, but the send stays paused until a licensed human reviews it.'
  },
  {
    title: '900 Lake Road',
    status: 'Missing doc',
    meta: 'Buyer file · representation packet',
    detail: 'The desk found a compensation disclosure gap and added it to the broker packet checklist.'
  }
]

const intakeSteps = [
  'Drop a deal folder, contract, or packet into intake.',
  'PorchDesk suggests the file match, key dates, parties, and missing documents.',
  'The agent reviews every extracted fact, draft, and send before anything becomes official.'
]

const boundaries = [
  'Public page uses dummy data only.',
  'No legal advice or autonomous client messaging.',
  'Private notes stay behind the login route.',
  'GitHub and project-local docs remain the source of truth.'
]

export default function PorchDeskPublicPage() {
  return (
    <>
      <Head>
        <title>PorchDesk · Sample Transaction Desk</title>
        <meta
          name="description"
          content="A public dummy-data sample of PorchDesk, a calm transaction desk for reviewed real estate coordination work."
        />
      </Head>

      <main className="porchdesk-shell">
        <header className="porchdesk-header">
          <a className="porchdesk-brand" href="/" aria-label="Skyler Smith home">
            PorchDesk
          </a>
          <nav className="porchdesk-nav" aria-label="PorchDesk">
            <a href="#sample">Sample desk</a>
            <a href="#workflow">Workflow</a>
            <a href="#boundaries">Boundaries</a>
            <a className="porchdesk-login-link" href="/porchdesk/login">Login</a>
          </nav>
        </header>

        <section className="porchdesk-hero" aria-labelledby="porchdesk-heading">
          <div className="porchdesk-hero-copy">
            <h1 id="porchdesk-heading">A calmer transaction desk for real estate coordination.</h1>
            <p>
              PorchDesk turns a deal packet into a reviewed action list, draft queue, document checks, and
              broker-ready evidence. This public page is a shareable sample layout with synthetic data only.
            </p>
            <div className="porchdesk-actions">
              <a href="#sample">View sample desk</a>
              <a href="/porchdesk/login">Login</a>
            </div>
          </div>

          <aside className="porchdesk-sample-card" aria-label="Sample desk status">
            <div className="porchdesk-file-strip">
              <span>123 Main St</span>
              <strong>Buyer under contract</strong>
            </div>
            <div className="porchdesk-status-list">
              <div>
                <span>Next review</span>
                <strong>Inspection objection</strong>
              </div>
              <div>
                <span>Owner</span>
                <strong>Agent approval</strong>
              </div>
              <div>
                <span>Evidence</span>
                <strong>Broker packet ready</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="porchdesk-stat-grid" aria-label="Sample counters">
          {sampleStats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="porchdesk-section" id="sample">
          <div className="porchdesk-section-heading">
            <h2>Sample desk</h2>
            <p>
              The real version is meant to keep agents, coordinators, and brokers on the same reviewed page:
              what changed, what needs action, and what is still waiting on a human decision.
            </p>
          </div>

          <div className="porchdesk-desk-grid">
            <div className="porchdesk-panel porchdesk-panel--wide">
              <div className="porchdesk-panel-heading">
                <h3>Today&apos;s queue</h3>
                <span>Dummy data</span>
              </div>
              <div className="porchdesk-queue-list">
                {queueItems.map((item) => (
                  <article key={item.title}>
                    <div>
                      <p>{item.meta}</p>
                      <h4>{item.title}</h4>
                    </div>
                    <span>{item.status}</span>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="porchdesk-panel">
              <div className="porchdesk-panel-heading">
                <h3>Document QA</h3>
                <span>Review gated</span>
              </div>
              <ul className="porchdesk-check-list">
                <li>Representation agreement present</li>
                <li>Compensation disclosure needs review</li>
                <li>Earnest money receipt matched</li>
                <li>Title packet follow-up drafted</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="porchdesk-section" id="workflow">
          <div className="porchdesk-section-heading">
            <h2>Folder and deal intake</h2>
            <p>
              The most important product move is making intake hard to mess up. A real agent should be able to
              drop the deal in, verify the suggestions, and get back to the work that actually needs judgment.
            </p>
          </div>

          <ol className="porchdesk-step-list">
            {intakeSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="porchdesk-section porchdesk-section--last" id="boundaries">
          <div className="porchdesk-section-heading">
            <h2>Shareable without exposing the workbench.</h2>
            <p>
              This route is intentionally public. The useful private source links live behind a separate login,
              and the public page should never include transaction records, client names, private paths, tokens,
              or operational secrets.
            </p>
          </div>

          <div className="porchdesk-boundary-list">
            {boundaries.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
