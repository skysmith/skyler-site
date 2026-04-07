import Head from 'next/head'

export default function EulaPage() {
  return (
    <>
      <Head>
        <title>Clementine Ledger Sync End-User License Agreement</title>
      </Head>
      <main className="legal-shell">
        <article className="legal-card legal-card--sage">
          <p className="legal-kicker">Clementine Kids LLC</p>
          <h1>Clementine Ledger Sync End-User License Agreement</h1>
          <p className="legal-meta">Effective date: March 24, 2026</p>

          <p>
            This End-User License Agreement governs use of Clementine Ledger Sync. By accessing or using the
            app, you agree to this agreement on behalf of yourself and, if applicable, the organization you
            represent.
          </p>

          <h2>License</h2>
          <p>
            Clementine Kids LLC grants you a limited, non-exclusive, non-transferable, revocable license to
            access and use Clementine Ledger Sync solely for internal bookkeeping, accounting review, and
            reconciliation purposes in accordance with this agreement.
          </p>

          <h2>Restrictions</h2>
          <p>
            You may not copy, resell, sublicense, lease, reverse engineer, interfere with, or misuse the app;
            use the app in violation of law; or use the app to access data you are not authorized to access.
          </p>

          <h2>Your responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your credentials, ensuring that your use
            of the app complies with applicable law and your agreements with third parties, and verifying the
            accuracy of bookkeeping decisions made using the app&apos;s outputs.
          </p>

          <h2>Third-party services</h2>
          <p>
            The app may connect to third-party platforms, including QuickBooks Online. Your use of those
            platforms remains subject to their own terms, policies, and technical limitations.
          </p>

          <h2>Availability and changes</h2>
          <p>
            We may modify, suspend, or discontinue the app or any feature at any time, with or without notice.
            We do not guarantee uninterrupted availability.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The app is provided on an as is and as available basis. To the maximum extent permitted by law,
            Clementine Kids LLC disclaims all warranties, whether express, implied, or statutory, including
            implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Clementine Kids LLC will not be liable for any indirect,
            incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits,
            revenue, data, goodwill, or business opportunity arising from or related to the app or this agreement.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate your access at any time if we believe you violated this agreement,
            created risk for the app or its operators, or if continuing access is no longer commercially or
            operationally feasible.
          </p>

          <h2>Governing law</h2>
          <p>
            This agreement is governed by the laws applicable in the jurisdiction where Clementine Kids LLC is
            organized and operated, without regard to conflict-of-laws principles, except where applicable law
            requires otherwise.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this agreement can be sent to{' '}
            <a href="mailto:support@clementinekids.com">support@clementinekids.com</a>.
          </p>
        </article>
      </main>
    </>
  )
}
