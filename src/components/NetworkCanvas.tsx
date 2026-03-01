'use client'
import { useEffect, useRef } from 'react'

interface Node {
  x: number; y: number; vx: number; vy: number
  r: number; pulse: number; pulseSpeed: number; isHub: boolean
}

export default function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let id: number
    let nodes: Node[] = []

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      build()
    }

    const build = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight
      const count = Math.min(24, Math.floor((w * h) / 16000))
      nodes = []
      // Hub nodes at strategic positions
      ;[{ x: w*.5, y: h*.35 }, { x: w*.22, y: h*.62 }, { x: w*.78, y: h*.58 }].forEach(p => {
        nodes.push({ ...p, vx: (Math.random()-.5)*.18, vy: (Math.random()-.5)*.18, r: 4.5, pulse: Math.random()*Math.PI*2, pulseSpeed: .007+Math.random()*.005, isHub: true })
      })
      for (let i = 0; i < count - 3; i++) {
        nodes.push({ x: w*.08+Math.random()*w*.84, y: h*.08+Math.random()*h*.84, vx: (Math.random()-.5)*.22, vy: (Math.random()-.5)*.22, r: 1.8+Math.random()*1.6, pulse: Math.random()*Math.PI*2, pulseSpeed: .009+Math.random()*.009, isHub: false })
      }
    }

    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += n.pulseSpeed
        if (n.x < 16 || n.x > w - 16) n.vx *= -1
        if (n.y < 16 || n.y > h - 16) n.vy *= -1
      })

      const MAX = 160, MAX_HUB = 220
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x-b.x, dy = a.y-b.y
          const dist = Math.sqrt(dx*dx+dy*dy)
          const max = (a.isHub||b.isHub) ? MAX_HUB : MAX
          if (dist < max) {
            const alpha = (1-dist/max) * ((a.isHub||b.isHub) ? 0.3 : 0.18)
            const g = ctx.createLinearGradient(a.x,a.y,b.x,b.y)
            g.addColorStop(0, `rgba(99,102,241,${alpha})`)
            g.addColorStop(.5, `rgba(139,92,246,${alpha*.8})`)
            g.addColorStop(1, `rgba(34,211,238,${alpha*.6})`)
            ctx.beginPath()
            ctx.strokeStyle = g
            ctx.lineWidth = (a.isHub||b.isHub) ? 1 : 0.6
            ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke()
          }
        }
      }

      nodes.forEach(n => {
        const p = Math.sin(n.pulse)*.28+.72
        const r = n.r * p
        if (n.isHub) {
          const gr = r*4
          const glow = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,gr)
          glow.addColorStop(0,'rgba(99,102,241,0.16)')
          glow.addColorStop(1,'rgba(99,102,241,0)')
          ctx.beginPath(); ctx.fillStyle=glow; ctx.arc(n.x,n.y,gr,0,Math.PI*2); ctx.fill()
          ctx.beginPath(); ctx.strokeStyle=`rgba(139,92,246,${.25*p})`; ctx.lineWidth=.8
          ctx.arc(n.x,n.y,r*2.4,0,Math.PI*2); ctx.stroke()
        }
        const dot = ctx.createRadialGradient(n.x-r*.25,n.y-r*.25,0,n.x,n.y,r)
        dot.addColorStop(0,'rgba(196,181,253,0.95)')
        dot.addColorStop(.5,'rgba(99,102,241,0.85)')
        dot.addColorStop(1,'rgba(67,56,202,0.5)')
        ctx.beginPath(); ctx.fillStyle=dot; ctx.arc(n.x,n.y,r,0,Math.PI*2); ctx.fill()
      })
      id = requestAnimationFrame(draw)
    }

    resize(); draw()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    return () => { cancelAnimationFrame(id); ro.disconnect() }
  }, [])

  return <canvas ref={ref} className="w-full h-full block" />
}
