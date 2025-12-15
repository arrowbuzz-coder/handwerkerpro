"use client"

import { useEffect, useRef } from "react"

interface DotGridProps {
  dotSize?: number
  gap?: number
  baseColor?: string
  activeColor?: string
  proximity?: number
  shockRadius?: number
  shockStrength?: number
  resistance?: number
  returnDuration?: number
}

export default function DotGrid({
  dotSize = 10,
  gap = 15,
  baseColor = "#D97735",
  activeColor = "#D97735",
  proximity = 120,
  shockRadius = 250,
  shockStrength = 5,
  resistance = 750,
  returnDuration = 1.5,
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<any[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      initDots()
    }

    const initDots = () => {
      dotsRef.current = []
      const cols = Math.floor(canvas.width / gap)
      const rows = Math.floor(canvas.height / gap)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dotsRef.current.push({
            x: i * gap + gap / 2,
            y: j * gap + gap / 2,
            originalX: i * gap + gap / 2,
            originalY: j * gap + gap / 2,
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach((dot) => {
        const dx = mouseRef.current.x - dot.x
        const dy = mouseRef.current.y - dot.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < shockRadius) {
          const angle = Math.atan2(dy, dx)
          const force = (shockRadius - distance) / shockRadius
          dot.vx -= Math.cos(angle) * force * shockStrength
          dot.vy -= Math.sin(angle) * force * shockStrength
        }

        // Apply resistance
        dot.vx *= 1 - resistance / 1000
        dot.vy *= 1 - resistance / 1000

        // Return to original position
        const returnForce = 0.1 * returnDuration
        dot.vx += (dot.originalX - dot.x) * returnForce
        dot.vy += (dot.originalY - dot.y) * returnForce

        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Draw dot
        const distanceFromOriginal = Math.sqrt(Math.pow(dot.x - dot.originalX, 2) + Math.pow(dot.y - dot.originalY, 2))
        const alpha = Math.min(1, distanceFromOriginal / proximity)

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2)
        ctx.fillStyle = alpha > 0.1 ? activeColor : baseColor
        ctx.globalAlpha = alpha > 0.1 ? alpha : 0.3
        ctx.fill()
        ctx.globalAlpha = 1
      })

      animationFrameRef.current = requestAnimationFrame(drawDots)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    drawDots()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ pointerEvents: "auto" }} />
}
