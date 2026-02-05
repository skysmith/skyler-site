export default function Contact(){
  return (
    <div>
      <header style={{background:'#f8fafb',borderBottom:'1px solid #eee'}}>
        <div className="container nav">
          <div style={{fontWeight:700}}>Skyler Smith</div>
          <nav>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
      <main className="container">
        <h1>Contact</h1>
        <section className="card">
          <p>If you'd like to reach Skyler, email <a href="mailto:support@clementinekids.com">support@clementinekids.com</a> or connect via the links below.</p>
          <ul>
            <li><a href="https://bridgergear.com">Bridger Gear</a></li>
            <li><a href="https://clementinekids.com">Clementine Kids</a></li>
            <li><a href="https://dwellrg.com">Dwell Realty Group</a></li>
          </ul>
        </section>
      </main>
    </div>
  )
}
