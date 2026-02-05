import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <header>
        <div className="container nav">
          <div style={{fontWeight:700}}>Skyler Smith</div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="container">
        <section className="hero">
          <h1 style={{marginBottom:8}}>Skyler Smith</h1>
          <p style={{color:'var(--muted)',marginTop:0}}>Founder, Bridger Gear. Outdoor gear, product design, real estate agent at Dwell Realty Group.</p>
        </section>

        <section style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div className="card">
            <h3>About</h3>
            <p>Short bio, links, and recent work. <Link href="/about">Read more →</Link></p>
          </div>
          <div className="card">
            <h3>Latest Projects</h3>
            <p>Bridger Gear — outdoor gear brand. Clementine Kids — children’s clothing. <Link href="/projects">See projects →</Link></p>
          </div>
        </section>

        <section style={{marginTop:'2rem'}} className="card">
          <h3>Get in touch</h3>
          <p>If you want to reach me, <Link href="/contact">send a message</Link> or email <a href="mailto:support@clementinekids.com">support@clementinekids.com</a>.</p>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Skyler Smith — <a href="https://bridgergear.com">Bridger Gear</a> · <a href="https://clementinekids.com">Clementine Kids</a> · <a href="https://dwellrg.com">Dwell Realty Group</a>
        </footer>
      </main>
    </div>
  )
}
