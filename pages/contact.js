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
          <p>If you'd like to reach Skyler, connect through the live project links below.</p>
          <ul>
            <li><a href="https://bank-dice-phi.vercel.app" target="_blank" rel="noopener noreferrer">Bank Dice</a></li>
            <li><a href="https://bank-dice-phi.vercel.app/qwixx/index.html" target="_blank" rel="noopener noreferrer">CrossDice Arcade</a></li>
          </ul>
        </section>
      </main>
    </div>
  )
}
