"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ChatMessage {
  id: number
  text: string
  sender: "user" | "business"
  delay: number
}

const messages: ChatMessage[] = [
  { id: 1, text: "Hallo, ich brauche einen Elektriker für meine Wohnung", sender: "user", delay: 500 },
  { id: 2, text: "Guten Tag! Gerne helfen wir Ihnen. Wann passt es Ihnen?", sender: "business", delay: 2000 },
  { id: 3, text: "Morgen um 10 Uhr wäre perfekt", sender: "user", delay: 3500 },
  { id: 4, text: "Perfekt! Termin ist bestätigt. Bis morgen um 10 Uhr :)", sender: "business", delay: 5000 },
]

export function IPhoneChatMockup() {
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    messages.forEach((m) => {
      setTimeout(() => {
        setVisible((p) => [...p, m.id])
      }, m.delay)
    })
  }, [])

  return (
    <div className="mx-auto w-[280px] sm:w-[320px] md:w-[360px] scale-90 sm:scale-95 md:scale-100">
      {/* iPhone frame */}
      <div className="relative rounded-[3rem] bg-black p-3 shadow-2xl overflow-visible">
        {/* NOTCH – sits ABOVE the screen */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[60] h-8 sm:h-10 w-[140px] sm:w-[160px] rounded-b-3xl bg-black shadow-lg" />

        {/* Screen */}
        <div className="relative h-[550px] sm:h-[650px] md:h-[720px] rounded-[2.6rem] overflow-visible bg-[#0b0b0b]">
          {/* Status bar */}
          <div className="absolute top-2 z-50 flex w-full justify-between px-4 sm:px-6 text-[10px] sm:text-xs text-white">
            <span>11:41</span>
            <span>85%</span>
          </div>

          {/* Header */}
          <div className="absolute top-12 sm:top-14 z-40 flex h-14 sm:h-16 w-full items-center gap-2 sm:gap-3 bg-black backdrop-blur-xl px-3 sm:px-4 border-b border-white/10">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center font-semibold text-sm sm:text-base">
              D
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-white">DANIELA</div>
              <div className="text-[10px] sm:text-xs text-emerald-400">Online</div>
            </div>
          </div>

          {/* CHAT */}
          <div
            className="absolute top-28 sm:top-32 bottom-6 w-full px-4 sm:px-6 space-y-6 sm:space-y-8 overflow-visible"
            style={{ perspective: "1200px" }}
          >
            <AnimatePresence>
              {messages.map(
                (m, i) =>
                  visible.includes(m.id) && (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 40, rotateX: -15, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className={`relative flex ${m.sender === "user" ? "justify-end -mr-10 sm:-mr-14" : "justify-start -ml-10 sm:-ml-14"}`}
                      style={{
                        transformStyle: "preserve-3d",
                        zIndex: 20 + i,
                      }}
                    >
                      {/* FLOATING BUBBLE */}
                      <div
                        className={`
                          relative max-w-[78%] px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm text-white
                          rounded-2xl
                          ${m.sender === "user" ? "bg-[#2a2a2c] rounded-br-md" : "bg-[#8B1E1E] rounded-bl-md"}
                        `}
                        style={{
                          transform: "translateZ(40px)",
                          boxShadow: `
                            0 20px 40px rgba(0,0,0,0.6),
                            0 8px 16px rgba(0,0,0,0.4),
                            inset 0 1px 1px rgba(255,255,255,0.15)
                          `,
                        }}
                      >
                        {m.text}
                      </div>

                      {/* AVATAR (overlapping bubble & bezel) */}
                      <div
                        className={`absolute top-2 sm:top-3 z-50 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black flex items-center justify-center text-white shadow-xl text-xs sm:text-base ${
                          m.sender === "user" ? "-right-5 sm:-right-6" : "-left-5 sm:-left-6"
                        }`}
                        style={{
                          transform: "translateZ(60px)",
                        }}
                      >
                        {m.sender === "user" ? "👤" : "D"}
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 sm:h-1.5 w-24 sm:w-32 rounded-full bg-white/40 z-50" />
        </div>
      </div>
    </div>
  )
}
