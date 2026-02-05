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
          <p>Baby and kids bedding brand (sheets, blankets, and nursery textiles). <a href="https://clementinekids.com">Visit site</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Pocket Pal — Mini Tamagotchi</h3>
          <p>A small pixel‑style virtual pet I built as a playful demo. Feed it, put it to sleep, and play with it — state is saved in your browser. <a href="/tamagotchi">Play Pocket Pal →</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Tony Grove — Music</h3>
          <p>Listen to the Tony Grove soundtrack: <a href="https://open.spotify.com/artist/683U6wyvDadi5GExsaaojj?si=OhSxvCvRSQmI92vmmL8yZw" target="_blank" rel="noopener noreferrer">Spotify — Tony Grove</a></p>
        </section>
      </main>
    </div>
  )
}
