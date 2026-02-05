import {useEffect, useState} from 'react'

export default function PetAvatar({mood='neutral', animatePlay=false}){
  const [blink, setBlink] = useState(false)
  useEffect(()=>{
    const t = setInterval(()=>{
      setBlink(true)
      setTimeout(()=>setBlink(false),200)
    }, 4000 + Math.random()*3000)
    return ()=>clearInterval(t)
  },[])

  const tailClass = animatePlay ? 'tail wag' : 'tail'

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:16}}>
      <svg width="180" height="160" viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffd" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        {/* body */}
        <ellipse cx="90" cy="90" rx="56" ry="44" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" />
        {/* head */}
        <circle cx="54" cy="66" r="28" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" />
        {/* ears */}
        <path d="M42 48 q-12 -8 -18 2 q8 8 18 6" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M66 44 q12 -8 18 2 q-8 8 -18 6" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1"/>
        {/* eyes */}
        {blink ? (
          <>
            <rect x="44" y="68" width="10" height="3" fill="#333" rx="1" />
            <rect x="60" y="68" width="10" height="3" fill="#333" rx="1" />
          </>
        ) : (
          <>
            <circle cx="49" cy="66" r="5" fill="#111" />
            <circle cx="65" cy="66" r="5" fill="#111" />
            <circle cx="47" cy="64" r="2" fill="#fff" />
            <circle cx="63" cy="64" r="2" fill="#fff" />
          </>
        )}
        {/* mouth */}
        <path d="M54 78 q6 8 12 0" stroke="#b45309" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* tail */}
        <g transform="translate(140,90)">
          <path className={tailClass} d="M0 0 q18 -10 28 6 q6 10 -4 18" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>
        <style jsx>{`
          .tail { transform-origin: 0px 0px; }
          .wag { animation: wag 0.6s ease-in-out 0s 3; }
          @keyframes wag { 0%{ transform: rotate(0deg);} 25%{ transform: rotate(18deg);} 50%{ transform: rotate(-12deg);} 75%{ transform: rotate(8deg);} 100%{ transform: rotate(0deg);} }
        `}</style>
      </svg>
    </div>
  )
}
