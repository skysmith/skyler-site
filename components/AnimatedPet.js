import {useEffect, useRef} from 'react'

export default function AnimatedPet({mood='neutral', play=false, size=180}){
  const id = Math.random().toString(36).slice(2,8)
  const blinkRef = useRef(null)

  useEffect(()=>{
    const el = blinkRef.current
    if(!el) return
    let timeout
    function blink(){
      el.beginElement()
      timeout = setTimeout(()=>{ // schedule next blink randomly between 2-6s
        setTimeout(blink, 2000 + Math.random()*4000)
      }, 200)
    }
    blink()
    return ()=>clearTimeout(timeout)
  },[])

  const fill = mood === 'happy' ? '#ffd166' : mood === 'sad' ? '#a0c4ff' : '#ffd9b3'

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-label="Pocket Pal">
      <defs>
        <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" />
        </filter>
      </defs>

      <g transform="translate(10,10)">
        {/* body */}
        <g filter={`url(#shadow-${id})`}>
          <ellipse cx="50" cy="50" rx="40" ry="36" fill={fill} />
        </g>

        {/* cheeks */}
        <circle cx="30" cy="60" r="6" fill="#ff9aa2" opacity="0.9" />
        <circle cx="70" cy="60" r="6" fill="#ff9aa2" opacity="0.9" />

        {/* eyes with blink animation */}
        <g>
          <ellipse cx="35" cy="45" rx="6" ry="6" fill="#111" />
          <ellipse cx="65" cy="45" rx="6" ry="6" fill="#111" />

          <rect x="29" y="42" width="12" height="0" fill="#ffd9b3">
            <animate ref={blinkRef} attributeName="height" values="0;8;0" dur="0.2s" begin="indefinite" fill="freeze" />
          </rect>
          <rect x="59" y="42" width="12" height="0" fill="#ffd9b3">
            <animate attributeName="height" values="0;8;0" dur="0.2s" begin="indefinite" fill="freeze" />
          </rect>
        </g>

        {/* mouth */}
        {mood === 'happy' ? (
          <path d="M38 68 Q50 78 62 68" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />
        ) : mood === 'sad' ? (
          <path d="M38 74 Q50 64 62 74" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />
        ) : (
          <path d="M44 70 Q50 74 56 70" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />
        )}

        {/* simple ear/antenna that bobs when play=true */}
        <g transform={play ? 'translate(0,-4)' : 'translate(0,0)'} style={{transition:'transform 0.15s ease'}}>
          <path d="M20 30 Q24 18 34 26" stroke="#d8a86b" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>

      </g>

    </svg>
  )
}
