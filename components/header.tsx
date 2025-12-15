// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone } from "lucide-react"
// import Image from "next/image"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <header
//       className={`fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 transition-all duration-500 ${
//         isScrolled ? "backdrop-blur-2xl bg-black/30 border border-white/10 shadow-2xl rounded-full" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2">
//         <nav className="flex items-center justify-between">
//           <div className="flex items-center gap-2 animate-slide-in-left">
//             <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
//               <Image
//                 src="/images/handwerker_bg_removelite.png"
//                 alt="Handwerker Pro Logo"
//                 width={280}
//                 height={100}
//                 className="h-12 sm:h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-300"
//                 priority
//               />
//             </div>
//           </div>

//           <div className="hidden md:flex items-center gap-8 animate-fade-in">
//             <button
//               onClick={() => scrollToSection("services")}
//               className="text-sm font-mono text-white hover:text-accent transition-all duration-300 hover:scale-110 drop-shadow-lg"
//             >
//               Dienstleistungen
//             </button>
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-sm font-mono text-white hover:text-accent transition-all duration-300 hover:scale-110 drop-shadow-lg"
//             >
//               Über uns
//             </button>
//             <button
//               onClick={() => scrollToSection("portfolio")}
//               className="text-sm font-mono text-white hover:text-accent transition-all duration-300 hover:scale-110 drop-shadow-lg"
//             >
//               Portfolio
//             </button>
//             <button
//               onClick={() => scrollToSection("areas")}
//               className="text-sm font-mono text-white hover:text-accent transition-all duration-300 hover:scale-110 drop-shadow-lg"
//             >
//               Servicegebiete
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="text-sm font-mono text-white hover:text-accent transition-all duration-300 hover:scale-110 drop-shadow-lg"
//             >
//               Kontakt
//             </button>
//           </div>

//           <div className="hidden md:flex items-center gap-4 animate-slide-in-right">
//             <a
//               href="tel:+491234567890"
//               className="flex items-center gap-2 text-sm font-mono text-white/80 hover:text-accent transition-colors drop-shadow"
//             >
//               <Phone className="w-4 h-4" />
//               +49 123 456 7890
//             </a>
//             <Button
//               className="bg-accent text-white hover:bg-accent/90 hover:scale-105 transition-all duration-300 border border-white/20 shadow-xl"
//               onClick={() => scrollToSection("contact")}
//             >
//               Jetzt Buchen
//             </Button>
//           </div>

//           <button
//             className="md:hidden transition-transform hover:scale-110 text-white p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </nav>

//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up backdrop-blur-2xl bg-black/60 rounded-2xl p-4 border border-white/10">
//             <button
//               onClick={() => scrollToSection("services")}
//               className="block text-base font-mono text-white hover:text-accent transition-colors w-full text-left py-2"
//             >
//               Dienstleistungen
//             </button>
//             <button
//               onClick={() => scrollToSection("about")}
//               className="block text-base font-mono text-white hover:text-accent transition-colors w-full text-left py-2"
//             >
//               Über uns
//             </button>
//             <button
//               onClick={() => scrollToSection("portfolio")}
//               className="block text-base font-mono text-white hover:text-accent transition-colors w-full text-left py-2"
//             >
//               Portfolio
//             </button>
//             <button
//               onClick={() => scrollToSection("areas")}
//               className="block text-base font-mono text-white hover:text-accent transition-colors w-full text-left py-2"
//             >
//               Servicegebiete
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="block text-base font-mono text-white hover:text-accent transition-colors w-full text-left py-2"
//             >
//               Kontakt
//             </button>
//             <Button
//               className="w-full bg-accent text-white hover:bg-accent/90 mt-2"
//               onClick={() => scrollToSection("contact")}
//             >
//               Jetzt Buchen
//             </Button>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }


// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone } from "lucide-react"
// import Image from "next/image"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
//     setIsMenuOpen(false)
//   }

//   return (
//     <header
//       className={`fixed z-50 transition-all duration-500
//         top-2 left-2 right-2
//         sm:top-3 sm:left-3 sm:right-3
//         lg:top-4 lg:left-4 lg:right-4
//         ${
//           isScrolled
//             ? "backdrop-blur-2xl bg-black/40 border border-white/10 shadow-2xl rounded-full"
//             : "bg-transparent"
//         }
//       `}
//     >
//       <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-2">
//         <nav className="flex items-center justify-between gap-3">

//           {/* LOGO */}
//           <div
//             className="cursor-pointer flex-shrink-0"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           >
//             <Image
//               src="/images/handwerker_bg_removelite.png"
//               alt="Handwerker Pro"
//               width={240}
//               height={90}
//               priority
//               className="
//                 h-10 sm:h-12 md:h-14 lg:h-16
//                 w-auto
//                 transition-transform duration-300 hover:scale-105
//               "
//             />
//           </div>

//           {/* DESKTOP NAV */}
//           <div className="hidden lg:flex items-center gap-8">
//             {[
//               ["services", "Dienstleistungen"],
//               ["about", "Über uns"],
//               ["portfolio", "Portfolio"],
//               ["areas", "Servicegebiete"],
//               ["contact", "Kontakt"],
//             ].map(([id, label]) => (
//               <button
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className="text-sm font-mono text-white hover:text-accent transition-all hover:scale-110"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

//           {/* DESKTOP CTA */}
//           <div className="hidden lg:flex items-center gap-4">
//             <a
//               href="tel:+491234567890"
//               className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition"
//             >
//               <Phone className="w-4 h-4" />
//               +49 123 456 7890
//             </a>
//             <Button
//               onClick={() => scrollToSection("contact")}
//               className="bg-accent text-white hover:bg-accent/90 px-5 shadow-xl"
//             >
//               Jetzt Buchen
//             </Button>
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </nav>

//         {/* MOBILE MENU */}
//         {isMenuOpen && (
//           <div
//             className="
//               lg:hidden mt-3
//               rounded-2xl
//               bg-black/70 backdrop-blur-2xl
//               border border-white/10
//               shadow-2xl
//               p-4
//               space-y-2
//             "
//           >
//             {[
//               ["services", "Dienstleistungen"],
//               ["about", "Über uns"],
//               ["portfolio", "Portfolio"],
//               ["areas", "Servicegebiete"],
//               ["contact", "Kontakt"],
//             ].map(([id, label]) => (
//               <button
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className="
//                   block w-full text-left
//                   py-2 px-2
//                   text-base font-mono
//                   text-white hover:text-accent
//                   transition
//                 "
//               >
//                 {label}
//               </button>
//             ))}

//             <Button
//               className="w-full mt-3 bg-accent text-white hover:bg-accent/90"
//               onClick={() => scrollToSection("contact")}
//             >
//               Jetzt Buchen
//             </Button>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full px-3">
      <div
        className={`
          mx-auto
          max-w-6xl
          transition-all duration-500
          ${
            isScrolled
              ? "backdrop-blur-2xl bg-black/40 border border-white/10 shadow-2xl rounded-full"
              : "bg-transparent"
          }
        `}
      >
        <div className="px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between gap-3">

            {/* LOGO */}
            <div
              className="cursor-pointer flex-shrink-0"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/images/handwerker_bg_removelite.png"
                alt="Handwerker Pro"
                width={220}
                height={80}
                priority
                className="
                  h-10 sm:h-12 md:h-14
                  w-auto
                  transition-transform duration-300 hover:scale-105
                "
              />
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-7">
              {[
                ["services", "Dienstleistungen"],
                ["about", "Über uns"],
                ["portfolio", "Portfolio"],
                ["areas", "Servicegebiete"],
                ["contact", "Kontakt"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-sm font-mono text-white hover:text-accent transition hover:scale-110"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+491234567890"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition"
              >
                <Phone className="w-4 h-4" />
                +49 123 456 7890
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent text-white hover:bg-accent/90 px-5 shadow-xl"
              >
                Jetzt Buchen
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 rounded-2xl bg-black/70 backdrop-blur-2xl border border-white/10 shadow-2xl p-4 space-y-2">
              {[
                ["services", "Dienstleistungen"],
                ["about", "Über uns"],
                ["portfolio", "Portfolio"],
                ["areas", "Servicegebiete"],
                ["contact", "Kontakt"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left py-2 px-2 text-base font-mono text-white hover:text-accent transition"
                >
                  {label}
                </button>
              ))}

              <Button
                className="w-full mt-3 bg-accent text-white hover:bg-accent/90"
                onClick={() => scrollToSection("contact")}
              >
                Jetzt Buchen
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
