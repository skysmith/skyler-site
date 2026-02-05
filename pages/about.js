export default function About(){
  return (
    <div>
      <header style={{background:'#f8fafb',borderBottom:'1px solid #eee'}}>
        <div className="container nav">
          <div style={{fontWeight:700}}>Skyler Smith</div>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
      <main className="container">
        <h1>About Skyler</h1>
        <p style={{color:'var(--muted)'}}>Short bio compiled from public sources.</p>
        <section className="card">
          <h3>Bridger Gear</h3>
          <p>Founder of Bridger Gear, an outdoor brand focused on accessible, well-designed gear. Bridger Gear's mission: "The Outdoors Is For Everyone!" Their signature product is the Empyrean Hammy Pack — a hammock system designed to be easy to carry and use.</p>
          <p><a href="https://bridgergear.com">bridgergear.com</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Clementine Kids</h3>
          <p>Involved with Clementine Kids — children's clothing brand. For contact: support@clementinekids.com</p>
          <p><a href="https://clementinekids.com">clementinekids.com</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Dwell Realty Group</h3>
          <p>Real estate agent profile listed at Dwell Realty Group. <a href="https://dwellrg.com">dwellrg.com</a></p>
        </section>

        <footer className="footer">© {new Date().getFullYear()} Skyler Smith</footer>
      </main>
    </div>
  )
}
