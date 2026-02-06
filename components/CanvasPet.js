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

      // knight body/helmet
      const cx = w/2
      const cy = h/2 + 6 + bob

      // shadow under knight
      ctx.beginPath()
      ctx.ellipse(cx, cy+34, 36, 10, 0, 0, Math.PI*2)
      ctx.fillStyle = 'rgba(0,0,0,0.12)'
      ctx.fill()

      // helmet base
      ctx.save()
      ctx.translate(cx, cy)
      const helmetW = 68
      const helmetH = 70
      const helmGrad = ctx.createLinearGradient(-helmetW/2, -helmetH/2, helmetW/2, helmetH/2)
      if(mood === 'happy'){
        helmGrad.addColorStop(0, '#f0f4ff')
        helmGrad.addColorStop(1, '#cfe0ff')
      } else if(mood === 'sad'){
        helmGrad.addColorStop(0, '#dfe8f8')
        helmGrad.addColorStop(1, '#b8cfe8')
      } else if(mood === 'tired'){
        helmGrad.addColorStop(0, '#f0f0f0')
        helmGrad.addColorStop(1, '#d8d8d8')
      } else if(mood === 'hungry'){
        helmGrad.addColorStop(0, '#fff6e6')
        helmGrad.addColorStop(1, '#ffe6b3')
      } else {
        helmGrad.addColorStop(0, '#eae6d6')
        helmGrad.addColorStop(1, '#d8cba8')
      }
      ctx.fillStyle = helmGrad
      ctx.beginPath()
      ctx.ellipse(0, -6, helmetW/2, helmetH/2, 0, Math.PI, 0, true)
      ctx.fill()

      // visor slot
      const visorY = 6
      const visorW = 44
      const visorH = 16
      // visor background
      ctx.fillStyle = '#111'
      ctx.beginPath()
      ctx.ellipse(0, visorY, visorW/2, visorH/2, 0, 0, Math.PI*2)
      ctx.fill()

      // eye slits based on blink
      const eyeOff = 14
      const eyeH = 6
      const BLINK_MS = 200
      const remaining = Math.max(0, state.blinkEnd - (ts || 0))
      const isBlinking = remaining > 0
      const progress = isBlinking ? (remaining / BLINK_MS) : 0
      let eyeClose = isBlinking ? Math.max(0.05, progress) : 1
      if(mood === 'tired' && !isBlinking) eyeClose = 0.4

      ctx.fillStyle = '#ffd' // eye glow color
      // left eye slit
      ctx.beginPath()
      ctx.ellipse(-eyeOff, visorY, 8, eyeH*eyeClose, 0, 0, Math.PI*2)
      ctx.fill()
      // right eye slit
      ctx.beginPath()
      ctx.ellipse(eyeOff, visorY, 8, eyeH*eyeClose, 0, 0, Math.PI*2)
      ctx.fill()

      // mouth / grille indicator
      ctx.strokeStyle = '#111'
      ctx.lineWidth = 2
      ctx.beginPath()
      if(mood === 'happy'){
        ctx.moveTo(-10, 22)
        ctx.quadraticCurveTo(0, 32 + pulse*6, 10, 22)
      } else if(mood === 'sad'){
        ctx.moveTo(-10, 28)
        ctx.quadraticCurveTo(0, 18 - pulse*4, 10, 28)
      } else if(mood === 'tired'){
        ctx.moveTo(-8, 24)
        ctx.lineTo(8, 24)
      } else if(mood === 'hungry'){
        ctx.beginPath()
        ctx.arc(0, 26, 6, 0, Math.PI*2)
        ctx.stroke()
      } else {
        ctx.moveTo(-8, 24)
        ctx.quadraticCurveTo(0, 28, 8, 24)
      }
      ctx.stroke()

      // plume on top (color varies with mood)
      const plumeColors = {
        happy: '#ffd166',
        sad: '#98c1ff',
        tired: '#cfcfcf',
        hungry: '#ffd9b3',
        neutral: '#ffe5b8'
      }
      ctx.fillStyle = plumeColors[mood] || plumeColors['neutral']
      ctx.beginPath()
      ctx.moveTo(-28, -26)
      ctx.quadraticCurveTo(0, -48 + (play? -6*Math.sin(t/120) : 0), 28, -26)
      ctx.quadraticCurveTo(0, -30, -28, -26)
      ctx.fill()

      ctx.restore()

      // small shield to the side when playing
      if(play){
        ctx.save()
        ctx.translate(cx + 46, cy + 6 - 6*Math.sin(t/120))
        ctx.fillStyle = '#cfe0ff'
        ctx.beginPath()
        ctx.moveTo(0, -12)
        ctx.lineTo(12, 0)
        ctx.lineTo(0, 18)
        ctx.lineTo(-12, 0)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }

      // small shine on helmet
      ctx.beginPath()
      ctx.fillStyle='rgba(255,255,255,0.45)'
      ctx.ellipse(cx - 18, cy - 18, 12, 6, -0.6, 0, Math.PI*2)
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
