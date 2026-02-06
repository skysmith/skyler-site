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

      // human face/portrait
      const cx = w/2
      const cy = h/2 + 6 + bob

      // ground shadow
      ctx.beginPath()
      ctx.ellipse(cx, cy+36, 36, 10, 0, 0, Math.PI*2)
      ctx.fillStyle = 'rgba(0,0,0,0.12)'
      ctx.fill()

      // head
      ctx.save()
      ctx.translate(cx, cy - 4)
      const headR = 46
      // skin tone by mood (subtle shifts)
      const skinMap = {
        happy: ['#fff0d9','#ffd9b3'],
        sad: ['#f0f6ff','#d8e8ff'],
        tired: ['#f4efe9','#e6ddd0'],
        hungry: ['#fff6e6','#ffe6b3'],
        neutral: ['#ffeedd','#ffd9b3']
      }
      const s = skinMap[mood] || skinMap['neutral']
      const skinGrad = ctx.createLinearGradient(-headR, -headR, headR, headR)
      skinGrad.addColorStop(0, s[0])
      skinGrad.addColorStop(1, s[1])
      ctx.beginPath()
      ctx.arc(0, 0, headR, 0, Math.PI*2)
      ctx.fillStyle = skinGrad
      ctx.fill()

      // hair (simple hairstyle)
      ctx.beginPath()
      ctx.fillStyle = '#2b2b2b'
      ctx.ellipse(0, -26, 44, 28, 0, Math.PI, 0, true)
      ctx.fill()

      // blush
      ctx.beginPath()
      ctx.fillStyle = mood==='tired' ? 'rgba(255,138,138,0.45)' : 'rgba(255,138,138,0.9)'
      ctx.arc(-18, 6, 6, 0, Math.PI*2)
      ctx.arc(18, 6, 6, 0, Math.PI*2)
      ctx.fill()

      // eyes and blink
      const eyeY = -4
      const eyeX = 16
      const eyeR = 6
      const BLINK_MS = 200
      const remaining = Math.max(0, state.blinkEnd - (ts || 0))
      const isBlinking = remaining > 0
      const progress = isBlinking ? (remaining / BLINK_MS) : 0
      let eyeScale = isBlinking ? Math.max(0.05, progress) : 1
      if(mood === 'tired' && !isBlinking) eyeScale = 0.5

      ctx.fillStyle = '#111'
      ctx.beginPath()
      ctx.ellipse(-eyeX, eyeY, eyeR, eyeR*eyeScale, 0, 0, Math.PI*2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(eyeX, eyeY, eyeR, eyeR*eyeScale, 0, 0, Math.PI*2)
      ctx.fill()

      // mouth
      ctx.strokeStyle = '#111'
      ctx.lineWidth = 2
      ctx.lineCap = 'round'
      ctx.beginPath()
      if(mood === 'happy'){
        ctx.moveTo(-12, 18)
        ctx.quadraticCurveTo(0, 28 + pulse*6, 12, 18)
      } else if(mood === 'sad'){
        ctx.moveTo(-12, 24)
        ctx.quadraticCurveTo(0, 14 - pulse*4, 12, 24)
      } else if(mood === 'tired'){
        ctx.moveTo(-8, 20)
        ctx.lineTo(8, 20)
      } else if(mood === 'hungry'){
        ctx.beginPath()
        ctx.arc(0, 20, 6, 0, Math.PI*2)
        ctx.stroke()
      } else {
        ctx.moveTo(-8, 20)
        ctx.quadraticCurveTo(0, 24, 8, 20)
      }
      ctx.stroke()

      // optional accessory when playing (small party hat)
      if(play){
        ctx.save()
        ctx.translate(0, -46 + -6*Math.sin(t/120))
        ctx.fillStyle = '#8b5cf6'
        ctx.beginPath()
        ctx.moveTo(0, -6)
        ctx.lineTo(10, 12)
        ctx.lineTo(-10, 12)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }

      ctx.restore()

      // small shine
      ctx.beginPath()
      ctx.fillStyle='rgba(255,255,255,0.45)'
      ctx.ellipse(cx - 18, cy - 22, 12, 6, -0.6, 0, Math.PI*2)
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
