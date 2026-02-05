import {useEffect, useState} from 'react'

export default function VectorPet({mood='neutral', play=false, size=180}){
  const [blink, setBlink] = useState(false)
  useEffect(()=>{
    const t = setInterval(()=>{
      setBlink(true)
      setTimeout(()=>setBlink(false),220)
    }, 3800 + Math.random()*3000)
    return ()=>clearInterval(t)
  },[])

  const wagClass = play ? 'wag' : ''

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
      <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bodyGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffebd2" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        {/* tail */}
        <g transform="translate(150,90)" className={wagClass}>
          <path d="M0 0 c25 -10 40 10 10 40" fill="#ffb380" stroke="#ff8a00" strokeWidth="4" strokeLinecap="round" />
        </g>
        {/* body */}
        <ellipse cx="95" cy="110" rx="48" ry="36" fill="url(#bodyGrad)" stroke="#ff8a00" strokeWidth="3" />
        {/* head */}
        <g transform="translate(50,50)">
          <path d="M60 10 C30 10 12 40 12 66 C12 92 38 110 60 110 C82 110 108 92 108 66 C108 40 90 10 60 10 Z" fill="#ffddb3" stroke="#ff8a00" strokeWidth="3" />
          {/* ears */}
          <path d="M20 28 L6 4 L34 18 Z" fill="#ffb380" stroke="#ff8a00" strokeWidth="2" />
          <path d="M100 28 L114 4 L86 18 Z" fill="#ffb380" stroke="#ff8a00" strokeWidth="2" />

          {/* cheeks */}
          <circle cx="34" cy="78" r="6" fill="#ffd9b3" />
          <circle cx="86" cy="78" r="6" fill="#ffd9b3" />

          {/* eyes */}
          {blink ? (
            <>
              <rect x="44" y="58" width="12" height="4" rx="2" fill="#3b3b3b" />
              <rect x="68" y="58" width="12" height="4" rx="2" fill="#3b3b3b" />
            </>
          ) : (
            <>
              <circle cx="50" cy="56" r="6" fill="#111" />
              <circle cx="74" cy="56" r="6" fill="#111" />
              <circle cx="48" cy="54" r="2" fill="#fff" />
              <circle cx="72" cy="54" r="2" fill="#fff" />
            </>
          )}

          {/* nose & mouth */}
          <path d="M64 74 q-4 6 -8 0" stroke="#7a2e00" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <style jsx>{`
          .wag { transform-origin: 0px 0px; animation: tailwag 0.6s ease-in-out 0s 3; }
          @keyframes tailwag { 0%{ transform: rotate(0deg);} 25%{ transform: rotate(18deg);} 50%{ transform: rotate(-12deg);} 75%{ transform: rotate(8deg);} 100%{ transform: rotate(0deg);} }
        `}</style>
      </svg>
    </div>
  )
}
