import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
const PetAvatar = dynamic(()=>import('../components/PetAvatar'), {ssr:false})
const PixelPet = dynamic(()=>import('../components/PixelPet'), {ssr:false})

const MAX_STAT = 100
const DECAY = 1 // per interval
const INTERVAL_MS = 5000

export default function Tamagotchi(){
  const [hunger, setHunger] = useState(50)
  const [energy, setEnergy] = useState(50)
  const [happiness, setHappiness] = useState(50)
  const [name, setName] = useState('Buddy')
  const [lastSaved, setLastSaved] = useState(null)
  const [playAnim, setPlayAnim] = useState(false)

  // load from localStorage
  useEffect(()=>{
    try{
      const raw = localStorage.getItem('tama-state')
      if(raw){
        const s = JSON.parse(raw)
        setHunger(s.hunger)
        setEnergy(s.energy)
        setHappiness(s.happiness)
        setName(s.name || 'Buddy')
        setLastSaved(s.savedAt)
      }
    }catch(e){console.warn(e)}
  },[])

  // decay over time and autosave
  useEffect(()=>{
    const id = setInterval(()=>{
      setHunger(h=>Math.max(0,h-DECAY))
      setEnergy(e=>Math.max(0,e-DECAY))
      setHappiness(hp=>Math.max(0,hp-DECAY))
      saveState()
    }, INTERVAL_MS)
    return ()=>clearInterval(id)
  },[])

  function clamp(v){return Math.max(0,Math.min(MAX_STAT,v))}
  function saveState(){
    const s = {hunger,energy,happiness,name,savedAt:new Date().toISOString()}
    localStorage.setItem('tama-state',JSON.stringify(s))
    setLastSaved(s.savedAt)
  }

  function handleEat(){ setHunger(h=>clamp(h+20)); setHappiness(h=>clamp(h+5)); saveState() }
  function handleSleep(){ setEnergy(e=>clamp(e+30)); setHunger(h=>clamp(h-5)); saveState() }
  function handlePlay(){ setHappiness(h=>clamp(h+20)); setEnergy(e=>clamp(e-10)); setHunger(h=>clamp(h-10)); setPlayAnim(true); saveState(); setTimeout(()=>setPlayAnim(false),700) }
  function handleReset(){ localStorage.removeItem('tama-state'); setHunger(50); setEnergy(50); setHappiness(50); setName('Buddy'); saveState() }

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
            <a href="/tamagotchi">Tamagotchi</a>
          </nav>
        </div>
      </header>
      <main className="container">
        <h1>Pocket Pal — {name}</h1>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',alignItems:'center'}}>
          <div className="card">
            <h3>Stats</h3>
            {/* switch to pixel pet for retro look */}
            <PixelPet palette={happiness>60?'warm':'retro'} animate={playAnim} />
            <p>Hunger: {hunger}</p>
            <div style={{background:'#eee',height:10,borderRadius:6}}><div style={{width:`${hunger}%`,height:10,background:'#f97316',borderRadius:6}}></div></div>
            <p>Energy: {energy}</p>
            <div style={{background:'#eee',height:10,borderRadius:6}}><div style={{width:`${energy}%`,height:10,background:'#0ea5a4',borderRadius:6}}></div></div>
            <p>Happiness: {happiness}</p>
            <div style={{background:'#eee',height:10,borderRadius:6}}><div style={{width:`${happiness}%`,height:10,background:'#ef4444',borderRadius:6}}></div></div>
            <p style={{color:'#666',fontSize:12}}>Last saved: {lastSaved? new Date(lastSaved).toLocaleString() : 'never'}</p>
          </div>
          <div className="card">
            <h3>Actions</h3>
            <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
              <button onClick={handleEat} style={{padding:'0.5rem 1rem'}}>Eat</button>
              <button onClick={handleSleep} style={{padding:'0.5rem 1rem'}}>Sleep</button>
              <button onClick={handlePlay} style={{padding:'0.5rem 1rem'}}>Play</button>
              <button onClick={saveState} style={{padding:'0.5rem 1rem'}}>Save</button>
              <button onClick={handleReset} style={{padding:'0.5rem 1rem',background:'#fee2e2'}}>Reset</button>
            </div>
            <div style={{marginTop:12}}>
              <label style={{display:'block',marginBottom:6}}>Pet name</label>
              <input value={name} onChange={e=>setName(e.target.value)} style={{padding:'0.5rem',width:'100%'}} />
            </div>
            <div style={{marginTop:12}}>
              <p style={{color:'#666'}}>This is a lightweight, client-side tamagotchi. Stats decay every {INTERVAL_MS/1000}s. State is saved to your browser localStorage.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
