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
          <h3>Tony Grove — Music</h3>
          <div style={{display:'flex',gap:'1rem',alignItems:'center',flexWrap:'wrap'}}>
            <iframe src="https://open.spotify.com/embed/artist/683U6wyvDadi5GExsaaojj" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div>
              <p style={{marginTop:0}}>Listen on Spotify:</p>
              <p style={{marginTop:6}}><a href="https://open.spotify.com/artist/683U6wyvDadi5GExsaaojj?si=OhSxvCvRSQmI92vmmL8yZw" target="_blank" rel="noopener noreferrer">Open in Spotify</a></p>
            </div>
          </div>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Bridger Gear</h3>
          <p>Outdoor gear brand focused on practical and accessible products.</p>
          <p><a href="https://bridgergear.com" target="_blank" rel="noopener noreferrer">Visit Bridger Gear →</a></p>
        </section>

        <section className="card" style={{marginTop:'1rem'}}>
          <h3>Clementine Kids</h3>
          <p>Kids bedding and nursery products.</p>
          <p><a href="https://clementinekids.com" target="_blank" rel="noopener noreferrer">Visit Clementine Kids →</a></p>
        </section>
      </main>
    </div>
  )
}
