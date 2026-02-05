import {useEffect, useState} from 'react'

// 16x16 pixel pet SVG. Palette selectable via prop.
export default function PixelPet({palette='warm', animate=false}){
  const palettes = {
    warm:['#ffedd5','#f97316','#ffb380','#ffffff','#1f2937'], // warm fox palette
    retro:['#e6ffed','#16a34a','#10b981','#ffffff','#011627']
  }
  const colors = palettes[palette] || palettes.warm
  const [blink, setBlink] = useState(false)
  useEffect(()=>{
    const t = setInterval(()=>{
      setBlink(true)
      setTimeout(()=>setBlink(false),200)
    }, 4000 + Math.random()*3000)
    return ()=>clearInterval(t)
  },[])

  // simple animation state: bob when animate true
  const bob = animate ? {transform:'translateY(-4px)'} : {}

  // pixel map is a 16x16 array of indices into colors or null
  // Updated map for a fox-like sprite (16x16). Indexes: 0 background,1 body,2 ear,3 cheek,4 eye/dark
  const map = [
    [null,null,null,null,null,null,1,1,1,1,null,null,null,null,null,null],
    [null,null,null,null,1,1,1,1,1,1,1,null,null,null,null,null],
    [null,null,null,1,1,2,1,1,1,1,1,1,1,null,null,null],
    [null,null,1,1,3,1,1,1,1,1,1,3,1,1,null,null],
    [null,1,1,3,3,1,1,1,1,1,1,3,3,1,null,null],
    [null,1,1,1,1,1,1,1,1,1,1,1,1,1,1,null],
    [null,1,1,1,1,1,1,4,4,1,1,1,1,1,1,null],
    [null,1,1,1,1,1,1,4,4,1,1,1,1,1,1,null],
    [null,null,1,1,1,1,1,1,1,1,1,1,1,null,null,null],
    [null,null,null,1,1,1,1,1,1,1,1,1,1,null,null,null],
    [null,null,null,null,1,1,1,1,1,1,1,1,null,null,null,null],
    [null,null,null,null,null,1,1,1,1,1,1,null,null,null,null,null],
    [null,null,null,null,null,null,1,1,1,1,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
  ]

  // eyes positions to allow blinking
  const eyePositions = [{r:2,c:6},{r:2,c:9}]

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
      <svg width="200" height="200" viewBox="0 0 16 16" style={bob} xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" fill={colors[3]} />
        {map.map((row,rIdx)=>row.map((cell,cIdx)=>{
          if(cell==null) return null
          // handle blink: replace eye pixels with bg
          const isEye = eyePositions.some(p=>p.r===rIdx && p.c===cIdx)
          const fill = (blink && isEye) ? colors[3] : colors[cell]
          return <rect key={`${rIdx}-${cIdx}`} x={cIdx} y={rIdx} width={1} height={1} fill={fill} />
        }))}
      </svg>
    </div>
  )
}
