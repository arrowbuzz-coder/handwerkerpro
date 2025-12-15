"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouchScreen =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth < 900

      setIsTouchDevice(hasTouchScreen)
    }

    checkTouchDevice()
    window.addEventListener("resize", checkTouchDevice)

    if (isTouchDevice) {
      return
    }

    let rafId: number

    const updatePosition = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })

        const target = e.target as HTMLElement
        setIsPointer(
          window.getComputedStyle(target).cursor === "pointer" ||
            target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.closest("button") !== null ||
            target.closest("a") !== null,
        )
      })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("resize", checkTouchDevice)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isTouchDevice])

  if (isTouchDevice || !isVisible) return null

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`w-full h-full rounded-full bg-white transition-transform duration-150 ${
            isPointer ? "scale-150" : "scale-100"
          }`}
        />
      </div>

      <div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998] mix-blend-difference will-change-transform"
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 border-white transition-all duration-150 ${
            isPointer ? "scale-125 opacity-60" : "scale-100 opacity-40"
          }`}
        />
      </div>
    </>
  )
}
