import Head from 'next/head'
import {
  privatePasswordConfigured,
  verifyPrivateAccess
} from '../../lib/privateAccess'

function LoginCard({ error, passwordConfigured }) {
  return (
    <main className="private-shell">
      <section className="private-card private-card--login" aria-labelledby="private-heading">
        <p className="legal-kicker">Private PorchDesk Notes</p>
        <h1 id="private-heading">Login</h1>
        <p className="private-lede">
          This route is only a pointer to the private PorchDesk source docs. The public sample page stays at
          <a href="/porchdesk"> /porchdesk</a>.
        </p>

        {!passwordConfigured && (
          <p className="private-alert">
            Set <code>SKYLER_SITE_PRIVATE_PASSWORD</code> before using this route outside local development.
          </p>
        )}

        {error && <p className="private-alert">That password did not open this route.</p>}

        <form className="private-form" method="post" action="/api/private-login">
          <input type="hidden" name="returnTo" value="/porchdesk/login" />
          <label>
            Password
            <input name="password" type="password" autoComplete="current-password" required />
          </label>
          <button type="submit">Open notes</button>
        </form>

        <a className="private-home-link" href="/porchdesk">Back to public PorchDesk page</a>
      </section>
    </main>
  )
}

function PorchDeskNotes({ pageData }) {
  return (
    <main className="private-shell">
      <section className="private-card" aria-labelledby="private-heading">
        <div className="private-card-header">
          <div>
            <p className="legal-kicker">Private PorchDesk Notes</p>
            <h1 id="private-heading">Source links</h1>
          </div>
          <a className="private-home-link" href="/api/private-logout">Log out</a>
        </div>

        <p className="private-lede">
          GitHub and project-local docs stay canonical. This page is just a memorable signpost from
          skylersmith.org back to the PorchDesk materials.
        </p>

        <section className="private-section">
          <h2>Canonical links</h2>
          <div className="private-link-list">
            {pageData.links.map((item) => (
              <a href={item.href} key={item.href} rel="noopener noreferrer" target="_blank">
                <strong>{item.title}</strong>
                <span>{item.copy}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="private-grid">
          <section className="private-section">
            <h2>Local paths</h2>
            <ul className="private-path-list">
              {pageData.localPaths.map((item) => (
                <li key={item}>
                  <code>{item}</code>
                </li>
              ))}
            </ul>
          </section>

          <section className="private-section">
            <h2>Source-of-truth note</h2>
            <p>
              Keep real PorchDesk docs, roadmap decisions, and intake standards in the repository. Use this
              website route for future fetching, but do not paste transaction records, secrets, or client data
              here.
            </p>
          </section>
        </div>

        <a className="private-home-link" href="/porchdesk">Back to public sample</a>
      </section>
    </main>
  )
}

export default function PorchDeskLoginPage({ error, hasAccess, pageData, passwordConfigured }) {
  return (
    <>
      <Head>
        <title>PorchDesk Login · Skyler Smith</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      {hasAccess ? (
        <PorchDeskNotes pageData={pageData} />
      ) : (
        <LoginCard error={error} passwordConfigured={passwordConfigured} />
      )}
    </>
  )
}

export async function getServerSideProps({ req, res, query }) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  res.setHeader('Cache-Control', 'no-store')

  const hasAccess = verifyPrivateAccess(req.headers.cookie)

  if (!hasAccess) {
    return {
      props: {
        error: query.error === '1',
        hasAccess: false,
        pageData: null,
        passwordConfigured: privatePasswordConfigured()
      }
    }
  }

  return {
    props: {
      error: false,
      hasAccess: true,
      passwordConfigured: true,
      pageData: {
        links: [
          {
            title: 'PorchDesk GitHub repository',
            href: 'https://github.com/skysmith/porchdesk',
            copy: 'Private repository and source-of-truth project history.'
          },
          {
            title: 'PorchDesk viability review',
            href: 'https://github.com/skysmith/porchdesk/blob/main/docs/porchdesk-viability-review.md',
            copy: 'Value proposition, market wedge, risks, and next product moves.'
          },
          {
            title: 'Deal intake standard',
            href: 'https://github.com/skysmith/porchdesk/blob/main/docs/deal-intake-standard.md',
            copy: 'Folder, document, and deal intake rules for the “just works” path.'
          },
          {
            title: 'Agent-backed roadmap',
            href: 'https://github.com/skysmith/porchdesk/blob/main/docs/agent-backed-product-roadmap.md',
            copy: 'Sequencing for local-first, review-gated transaction operations.'
          }
        ],
        localPaths: [
          'business/real-estate/porchdesk/README.md',
          'business/real-estate/porchdesk/docs/porchdesk-viability-review.md',
          'business/real-estate/porchdesk/docs/deal-intake-standard.md',
          'business/real-estate/porchdesk/src/app/intake/page.tsx'
        ]
      }
    }
  }
}
