export default function Projects(){
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
        <h1>Projects & Work</h1>
        <section className="card">
          <h3>Bridger Gear</h3>
          <p>Founder of Bridger Gear, an outdoor brand focused on accessible, well-designed gear. Bridger Gear's mission: "The Outdoors Is For Everyone!" Their signature product is the Empyrean Hammy Pack — a hammock system designed to be easy to carry and use.</p>
          <p><a href="https://bridgergear.com">bridgergear.com</a></p>
        </section>
        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Clementine Kids</h3>
          <p>Involved with Clementine Kids — a baby and kids bedding brand (sheets, blankets, and nursery textiles). For contact: support@clementinekids.com</p>
          <p><a href="https://clementinekids.com">clementinekids.com</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Pocket Pal — Mini Tamagotchi</h3>
          <p>A small pixel‑style virtual pet I built as a playful demo. Feed it, put it to sleep, and play with it — state is saved in your browser. <a href="/tamagotchi">Play Pocket Pal →</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Dwell Realty Group</h3>
          <p>Established and focused in Cache Valley — Dwell Realty Group delivers exceptional real estate services with a modern approach to marketing and technology. They emphasize client education, innovative marketing, and community. <a href="https://dwellrg.com/agent/skyler-smith" target="_blank" rel="noopener noreferrer">Skyler's Dwell profile</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Tony Grove — Music</h3>
          <div style={{display:'flex',gap:'1rem',alignItems:'center',flexWrap:'wrap'}}>
            <iframe src="https://open.spotify.com/embed/artist/683U6wyvDadi5GExsaaojj" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div>
              <p style={{marginTop:0}}>Listen on Spotify:</p>
              <p style={{marginTop:6}}><a href="https://open.spotify.com/artist/683U6wyvDadi5GExsaaojj?si=OhSxvCvRSQmI92vmmL8yZw" target="_blank" rel="noopener noreferrer">Open in Spotify</a></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
