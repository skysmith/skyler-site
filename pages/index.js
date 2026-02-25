import Link from 'next/link'
export default function Home() {
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
          <p style={{color:'var(--muted)',marginTop:0}}>I build playable web games and fun side projects.</p>
        </section>

        <section style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div className="card">
            <h3>About</h3>
            <p>This site is a home for finished games, experiments, and interactive ideas.</p>
          </div>
          <div className="card">
            <h3>Latest Projects</h3>
            <p>Bank Dice and CrossDice Arcade are live now. <Link href="/projects">See projects →</Link></p>
          </div>
        </section>

        <section style={{marginTop:'2rem'}} className="card">
          <h3>Get in touch</h3>
          <p>If you want to reach me, <Link href="/contact">send a message</Link>.</p>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Skyler Smith — <a href="https://bank-dice-phi.vercel.app" target="_blank" rel="noopener noreferrer">Bank Dice</a> · <a href="https://bank-dice-phi.vercel.app/qwixx/index.html" target="_blank" rel="noopener noreferrer">CrossDice Arcade</a>
        </footer>
      </main>
    </div>
  )
}
