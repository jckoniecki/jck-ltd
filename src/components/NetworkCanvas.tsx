'use client'
import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  pulse: number
  pulseSpeed: number
  brightness: number
  isHub: boolean
}

export default function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let nodes: Node[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      init()
    }

    const init = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const count = Math.min(28, Math.floor((w * h) / 18000))
      nodes = []

      // Place hub nodes at meaningful positions
      const hubs = [
        { x: w * 0.5, y: h * 0.35 },
        { x: w * 0.25, y: h * 0.6 },
        { x: w * 0.75, y: h * 0.55 },
      ]

      hubs.forEach(({ x, y }) => {
        nodes.push({
          x, y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          r: 5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.006,
          brightness: 1,
          isHub: true,
        })
      })

      // Regular nodes scattered around
      for (let i = 0; i < count - hubs.length; i++) {
        nodes.push({
          x: w * 0.1 + Math.random() * w * 0.8,
          y: h * 0.1 + Math.random() * h * 0.8,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: 2 + Math.random() * 2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.01,
          brightness: 0.4 + Math.random() * 0.6,
          isHub: false,
        })
      }
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)

      // Update nodes
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += n.pulseSpeed

        // Bounce softly
        if (n.x < 20 || n.x > w - 20) n.vx *= -1
        if (n.y < 20 || n.y > h - 20) n.vy *= -1
      })

      const MAX_DIST = 180
      const MAX_DIST_HUB = 240

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxD = (a.isHub || b.isHub) ? MAX_DIST_HUB : MAX_DIST

          if (dist < maxD) {
            const alpha = (1 - dist / maxD) * 0.35
            const isHubConn = a.isHub || b.isHub

            // Line gradient: amber
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            grad.addColorStop(0, `rgba(245, 158, 11, ${alpha * (isHubConn ? 1 : 0.6)})`)
            grad.addColorStop(0.5, `rgba(251, 191, 36, ${alpha * 0.8})`)
            grad.addColorStop(1, `rgba(217, 119, 6, ${alpha * (isHubConn ? 1 : 0.6)})`)

            ctx.beginPath()
            ctx.strokeStyle = grad
            ctx.lineWidth = isHubConn ? 1.2 : 0.7
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulseFactor = Math.sin(n.pulse) * 0.3 + 0.7 // 0.4–1.0
        const r = n.r * pulseFactor

        if (n.isHub) {
          // Outer glow ring
          const glowR = r * 3.5
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR)
          glow.addColorStop(0, 'rgba(245, 158, 11, 0.18)')
          glow.addColorStop(1, 'rgba(245, 158, 11, 0)')
          ctx.beginPath()
          ctx.fillStyle = glow
          ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2)
          ctx.fill()

          // Inner pulse ring
          ctx.beginPath()
          ctx.strokeStyle = `rgba(251, 191, 36, ${0.3 * pulseFactor})`
          ctx.lineWidth = 1
          ctx.arc(n.x, n.y, r * 2.2, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Core dot
        const dotGrad = ctx.createRadialGradient(n.x - r * 0.3, n.y - r * 0.3, 0, n.x, n.y, r)
        dotGrad.addColorStop(0, `rgba(253, 224, 140, ${n.brightness})`)
        dotGrad.addColorStop(0.6, `rgba(245, 158, 11, ${n.brightness * 0.9})`)
        dotGrad.addColorStop(1, `rgba(180, 83, 9, ${n.brightness * 0.5})`)

        ctx.beginPath()
        ctx.fillStyle = dotGrad
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
