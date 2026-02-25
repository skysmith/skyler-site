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
        <h1>Projects</h1>
        <section className="card">
          <h3>Bank Dice</h3>
          <p>A quick multiplayer dice game built for fast rounds and easy replay.</p>
          <p><a href="https://bank-dice-phi.vercel.app" target="_blank" rel="noopener noreferrer">Play Bank Dice →</a></p>
        </section>
        <section className="card" style={{marginTop:'1rem'}}>
          <h3>CrossDice Arcade</h3>
          <p>A fast-paced online dice board game with turn-based multiplayer, row locking, and a live leaderboard finish.</p>
          <p><a href="https://bank-dice-phi.vercel.app/qwixx/index.html" target="_blank" rel="noopener noreferrer">Play CrossDice Arcade →</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Pocket Pal — Mini Tamagotchi</h3>
          <p>A small pixel‑style virtual pet I built as a playful demo. Feed it, put it to sleep, and play with it — state is saved in your browser. <a href="/tamagotchi">Play Pocket Pal →</a></p>
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
