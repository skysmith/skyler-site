import Head from 'next/head'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Clementine Ledger Sync Privacy Policy</title>
      </Head>
      <main className="legal-shell">
        <article className="legal-card">
          <p className="legal-kicker">Clementine Kids LLC</p>
          <h1>Clementine Ledger Sync Privacy Policy</h1>
          <p className="legal-meta">Effective date: March 24, 2026</p>

          <p>
            Clementine Ledger Sync is operated by Clementine Kids LLC. This Privacy Policy explains what
            information we collect, how we use it, and the limited circumstances in which we share it.
          </p>

          <h2>What this app does</h2>
          <p>
            Clementine Ledger Sync is an internal accounting support tool used to compare QuickBooks Online
            transaction data with a local finance database for bookkeeping review, categorization checks,
            and reconciliation workflows.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>QuickBooks Online company identifiers and accounting data made available through authorized Intuit API scopes</li>
            <li>Transaction details such as dates, amounts, descriptions, counterparties, accounts, classes, and categories</li>
            <li>OAuth credentials and tokens needed to maintain authorized QuickBooks access</li>
            <li>Operational logs needed to troubleshoot sync, comparison, and access issues</li>
          </ul>

          <h2>How we use information</h2>
          <ul>
            <li>To connect to QuickBooks Online on an authorized user&apos;s behalf</li>
            <li>To compare QuickBooks data against local records and surface classification differences</li>
            <li>To maintain, secure, troubleshoot, and improve the bookkeeping workflow</li>
            <li>To comply with legal obligations and enforce our agreements</li>
          </ul>

          <h2>How we share information</h2>
          <p>
            We do not sell personal information. We may share information only with service providers or
            infrastructure vendors that help us host, secure, or operate the app, and only to the extent
            reasonably necessary to provide the service. We may also disclose information if required by law,
            regulation, subpoena, or other valid legal process.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain data only for as long as needed to operate the bookkeeping workflow, maintain reasonable
            business records, resolve disputes, enforce agreements, and satisfy legal or compliance obligations.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical, and organizational safeguards designed to protect
            authorized data from unauthorized access, disclosure, alteration, or destruction. No method of
            transmission or storage is completely secure, so we cannot guarantee absolute security.
          </p>

          <h2>Your choices</h2>
          <p>
            Authorized users may revoke the app&apos;s access to QuickBooks Online through Intuit account controls
            or by contacting us. Where applicable, you may also request access, correction, or deletion of
            information that we hold, subject to legal and operational limitations.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make a material change, we will update
            the effective date on this page and may take additional steps as appropriate.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this Privacy Policy or the app&apos;s handling of data, contact{' '}
            <a href="mailto:support@clementinekids.com">support@clementinekids.com</a>.
          </p>
        </article>
      </main>
    </>
  )
}
