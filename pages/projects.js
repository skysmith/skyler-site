export default function Projects(){
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
        <h1>Projects & Work</h1>
        <section className="card">
          <h3>Bridger Gear</h3>
          <p>Outdoor apparel and gear. <a href="https://bridgergear.com">Visit site</a></p>
        </section>
        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Clementine Kids</h3>
          <p>Children's clothing brand. <a href="https://clementinekids.com">Visit site</a></p>
        </section>
      </main>
    </div>
  )
}
