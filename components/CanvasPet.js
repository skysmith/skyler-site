import {useRef, useEffect} from 'react'

export default function CanvasPet({mood='neutral', play=false, size=180}){
  const canvasRef = useRef(null)
  const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1

  useEffect(()=>{
    const c = canvasRef.current
    if(!c) return
    const ctx = c.getContext('2d')
    let raf
    let start
    const w = size
    const h = size
    c.style.width = w + 'px'
    c.style.height = h + 'px'
    c.width = Math.floor(w * devicePixelRatio)
    c.height = Math.floor(h * devicePixelRatio)
    ctx.scale(devicePixelRatio, devicePixelRatio)

    const state = {
      // longer random delay between blinks (3s - 8s)
      blinkTimer: Math.random()*5000 + 3000,
      // blinkEnd (timestamp in ms) when current blink finishes
      blinkEnd: 0,
      playPulse: 0
    }

    function drawBackground(){
      // soft radial gradient
      const g = ctx.createLinearGradient(0,0,0,h)
      g.addColorStop(0,'#fffaf0')
      g.addColorStop(1,'#fff3e6')
      ctx.fillStyle = g
      ctx.fillRect(0,0,w,h)
    }

    function drawPet(t, nowTs){
      const ts = nowTs || 0
      ctx.clearRect(0,0,w,h)
      drawBackground()

      // breathing bob
      const bob = Math.sin(t/600)*4
      const pulse = play ? (Math.sin(t/120)+1)/2 : 0

      // body
      const cx = w/2
      const cy = h/2 + 6 + bob
      const rx = 44
      const ry = 40
      // body shadow
      ctx.beginPath()
      ctx.ellipse(cx, cy+6, rx, ry, 0, 0, Math.PI*2)
      ctx.fillStyle = 'rgba(0,0,0,0.06)'
      ctx.fill()

      // body gradient (adapt for tired/hungry moods)
      const grad = ctx.createLinearGradient(cx - rx, cy - ry, cx + rx, cy + ry)
      if(mood === 'happy'){
        grad.addColorStop(0, '#fff0b3')
        grad.addColorStop(1, '#ffd166')
      } else if(mood === 'sad'){
        grad.addColorStop(0, '#d9eaff')
        grad.addColorStop(1, '#a0c4ff')
      } else if(mood === 'tired'){
        grad.addColorStop(0, '#f6f1e6')
        grad.addColorStop(1, '#e6d7c5')
      } else if(mood === 'hungry'){
        grad.addColorStop(0, '#fff2e6')
        grad.addColorStop(1, '#ffd9c2')
      } else {
        grad.addColorStop(0, '#ffe5b8')
        grad.addColorStop(1, '#ffd9b3')
      }
      ctx.beginPath()
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2)
      ctx.fillStyle = grad
      ctx.fill()

      // cheeks (less pronounced when tired)
      ctx.beginPath()
      ctx.fillStyle = mood==='tired' ? 'rgba(255,138,138,0.6)' : 'rgba(255,138,138,0.9)'
      ctx.arc(cx - 22, cy + 10, 6, 0, Math.PI*2)
      ctx.arc(cx + 22, cy + 10, 6, 0, Math.PI*2)
      ctx.fill()

      // eyes
      const eyeY = cy - 6
      const eyeXOff = 18
      const eyeR = 6

      // blinking logic — time-based
      const BLINK_MS = 200
      const remaining = Math.max(0, state.blinkEnd - (ts || 0))
      const isBlinking = remaining > 0
      // progress 1 -> 0 as blink runs
      const progress = isBlinking ? (remaining / BLINK_MS) : 0
      // map progress to eye scale (closed at ~0.05)
      let blinkScale = isBlinking ? Math.max(0.05, progress) : 1
      // tired pets keep eyes partially closed
      if(mood === 'tired' && !isBlinking){
        blinkScale = 0.5
      }

      ctx.fillStyle = '#111'
      // left
      ctx.beginPath()
      ctx.ellipse(cx - eyeXOff, eyeY, eyeR, eyeR*blinkScale, 0, 0, Math.PI*2)
      ctx.fill()
      // right
      ctx.beginPath()
      ctx.ellipse(cx + eyeXOff, eyeY, eyeR, eyeR*blinkScale, 0, 0, Math.PI*2)
      ctx.fill()

      // mouth
      ctx.strokeStyle = '#111'
      ctx.lineWidth = 2
      ctx.lineCap = 'round'
      ctx.beginPath()
      if(mood==='happy'){
        ctx.moveTo(cx - 12, cy + 10)
        ctx.quadraticCurveTo(cx, cy + 24 + pulse*6, cx + 12, cy + 10)
      }else if(mood==='sad'){
        ctx.moveTo(cx - 12, cy + 20)
        ctx.quadraticCurveTo(cx, cy + 8 - pulse*4, cx + 12, cy + 20)
      }else if(mood==='tired'){
        // small straight tired mouth
        ctx.moveTo(cx - 10, cy + 16)
        ctx.lineTo(cx + 10, cy + 16)
      }else if(mood==='hungry'){
        // little open o mouth
        ctx.arc(cx, cy + 16, 6, 0, Math.PI*2)
      }else{
        ctx.moveTo(cx - 8, cy + 14)
        ctx.quadraticCurveTo(cx, cy + 18, cx + 8, cy + 14)
      }
      ctx.stroke()

      // antenna/ear — animated when play
      ctx.save()
      ctx.translate(cx + 34, cy - 28 + (play? -6*Math.sin(t/180) : 0))
      ctx.strokeStyle = '#c89457'
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.moveTo(0,0)
      ctx.quadraticCurveTo(6,-12,14,-6)
      ctx.stroke()
      ctx.fillStyle = '#ffd9b3'
      ctx.beginPath()
      ctx.ellipse(14,-6,6,6,0,0,Math.PI*2)
      ctx.fill()
      ctx.restore()

      // small shine on body
      ctx.beginPath()
      ctx.fillStyle='rgba(255,255,255,0.45)'
      ctx.ellipse(cx - 12, cy - 12, 14, 10, -0.6, 0, Math.PI*2)
      ctx.fill()
    }

    function step(ts){
      if(!start) start = ts
      const t = ts - start

      // update blink timer (countdown by frame delta)
      const delta = Math.min(60, ts - (step._lastTs || ts))
      step._lastTs = ts
      state.blinkTimer -= delta
      // When timer hits zero, start a blink that lasts BLINK_MS
      const BLINK_MS = 200
      if(state.blinkTimer <= 0 && ts > state.blinkEnd){
        state.blinkEnd = ts + BLINK_MS
        // next blink after 3-8 seconds
        state.blinkTimer = 3000 + Math.random()*5000
      }

      drawPet(t, ts)

      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return ()=>{
      cancelAnimationFrame(raf)
    }
  },[mood,play,size])

  return <canvas ref={canvasRef} style={{width:size,height:size,display:'block',borderRadius:8}} />
}
