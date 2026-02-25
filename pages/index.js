import Link from 'next/link'
export default function Home() {
  const featured = [
    {
      badge: '🎲',
      title: 'Bank Dice',
      desc: 'Fast multiplayer dice rounds built for replay.',
      href: 'https://bank-dice-phi.vercel.app',
      cta: 'Play Bank Dice →'
    },
    {
      badge: '🧩',
      title: 'CrossDice Arcade',
      desc: 'Turn-based dice board game with locking rows and podium finish.',
      href: 'https://bank-dice-phi.vercel.app/qwixx/index.html',
      cta: 'Play CrossDice Arcade →'
    },
    {
      badge: '🎵',
      title: 'Tony Grove Music',
      desc: 'Listen to Tony Grove on Spotify.',
      href: 'https://open.spotify.com/artist/683U6wyvDadi5GExsaaojj?si=OhSxvCvRSQmI92vmmL8yZw',
      cta: 'Open on Spotify →',
      embed: true
    },
    {
      badge: '🏕️',
      title: 'Bridger Gear',
      desc: 'Outdoor gear brand and shop.',
      href: 'https://bridgergear.com',
      cta: 'Visit Bridger Gear →'
    },
    {
      badge: '🧸',
      title: 'Clementine Kids',
      desc: 'Kids bedding and nursery goods.',
      href: 'https://clementinekids.com',
      cta: 'Visit Clementine Kids →'
    }
  ]

  return (
    <div>
      <header>
        <div className="container nav">
          <div style={{fontWeight:700}}>Skyler Smith</div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="container">
        <section className="hero">
          <h1 style={{marginBottom:8}}>Skyler Smith</h1>
          <p style={{color:'var(--muted)',marginTop:0}}>Games, music, and live projects.</p>
        </section>

        <section className="cascade">
          {featured.map((item, idx) => (
            <article className="card cascade-item" style={{ marginLeft: `${idx * 18}px` }} key={item.title}>
              <div className="cascade-head">
                <span className="badge">{item.badge}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
              {item.embed && (
                <div className="music-embed">
                  <iframe
                    src="https://open.spotify.com/embed/artist/683U6wyvDadi5GExsaaojj"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="encrypted-media"
                  />
                </div>
              )}
              <p>
                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.cta}</a>
              </p>
            </article>
          ))}
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Skyler Smith · <Link href="/projects">Projects</Link> · <Link href="/contact">Contact</Link>
        </footer>
      </main>
    </div>
  )
}
