// "use client"

// import { ArrowRight, Sparkles, Shield, Award } from "lucide-react"
// import { Button } from "./ui/button"
// import { motion } from "framer-motion"

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="metadata"
//           className="absolute inset-0 w-full h-full object-cover opacity-30"
//           style={{ willChange: "transform" }}
//         >
//           <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_new_bg-Q4Vr0mHkp6CsKpJPo1EVHZTvUky5jk.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Soft Glowing Background Elements */}
//       <div className="absolute inset-0 z-[1] pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
//         <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-8">
//           {/* Badge - Hidden on mobile for cleaner look */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl animate-pulse"
//             style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
//           >
//             <Sparkles className="w-4 h-4 text-accent" />
//             <span className="text-sm font-mono text-white font-semibold drop-shadow-lg">
//               Premium Handwerker Services Since 1995
//             </span>
//             <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
//           </motion.div>

//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="space-y-6 md:space-y-8"
//           >
//             <h1
//               className="text-6xl md:text-8xl lg:text-9xl font-bold text-balance leading-[0.95] animate-slide-up opacity-0"
//               style={{
//                 animationDelay: "0.2s",
//                 animationFillMode: "forwards",
//                 textShadow: "0 4px 30px rgba(0,0,0,0.9)",
//               }}
//             >
//               <span className="block text-white drop-shadow-2xl" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}>
//                 Meisterhafte
//               </span>
//               <span
//                 className="block bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent animate-gradient drop-shadow-2xl"
//                 style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
//               >
//                 Handwerkskunst
//               </span>
//             </h1>

//             <p
//               className="text-xl md:text-2xl lg:text-3xl text-white/90 font-mono max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 drop-shadow-xl backdrop-blur-sm"
//               style={{
//                 animationDelay: "0.4s",
//                 animationFillMode: "forwards",
//                 textShadow: "0 2px 20px rgba(0,0,0,0.9)",
//               }}
//             >
//               Professionelle Elektriker, Installateure, Schreiner, Mechaniker und Maler für Ihr Zuhause und Geschäft
//             </p>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-slide-up opacity-0"
//             style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
//           >
//             {[
//               { icon: Shield, value: "30+", label: "Jahre Erfahrung" },
//               { icon: Award, value: "2,500+", label: "Projekte" },
//               { icon: Sparkles, value: "98%", label: "Zufriedenheit" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="backdrop-blur-md bg-white/10 border border-white/20 px-6 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:bg-white/15"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-accent/30 backdrop-blur-xl rounded-xl flex items-center justify-center">
//                     <item.icon className="w-6 h-6 text-white drop-shadow-lg" />
//                   </div>
//                   <div className="text-left">
//                     <p className="text-2xl font-bold text-white drop-shadow-lg">{item.value}</p>
//                     <p className="text-xs font-mono text-white/80 drop-shadow">{item.label}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-4 animate-slide-up opacity-0"
//             style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
//           >
//             <Button
//               size="lg"
//               className="relative bg-accent text-white hover:bg-accent/90 text-base md:text-lg px-8 md:px-12 py-6 md:py-8 rounded-2xl font-semibold group overflow-hidden transition-all duration-300 shadow-2xl border border-white/20"
//               onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Termin Vereinbaren
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </Button>

//             <Button
//               size="lg"
//               variant="outline"
//               className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white text-base md:text-lg px-8 md:px-12 py-6 md:py-8 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 shadow-2xl"
//               onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//             >
//               Portfolio Ansehen
//             </Button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Minimal Grid Overlay */}
//       <div className="absolute inset-0 z-[1] pointer-events-none opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
//                                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>
//     </section>
//   )
// }


// "use client"

// import { ArrowRight, Sparkles, Shield, Award } from "lucide-react"
// import { Button } from "./ui/button"
// import { motion } from "framer-motion"

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="metadata"
//           className="absolute inset-0 w-full h-full object-cover opacity-30"
//           style={{ willChange: "transform" }}
//         >
//           <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_new_bg-Q4Vr0mHkp6CsKpJPo1EVHZTvUky5jk.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Soft Glowing Background Elements */}
//       <div className="absolute inset-0 z-[1] pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl" />
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
//         <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-8 md:space-y-10">

//           {/* Badge (hidden on mobile) */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border-none shadow-none backdrop-blur-0  mt-12"

//           >
            
//           </motion.div>

//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="space-y-5 md:space-y-6"
//           >
//             <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] text-white drop-shadow-lg">
//               <span className="block">Meisterhafte</span>
//               <span className="block bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
//                 Handwerkskunst
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-mono max-w-3xl mx-auto leading-relaxed backdrop-blur-md px-5 py-4 rounded-2xl">
//               Professionelle Elektriker, Installateure, Schreiner, Mechaniker und Maler
//               für Ihr Zuhause und Geschäft
//             </p>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
//           >
//             {[
//               { icon: Shield, value: "30+", label: "Jahre Erfahrung" },
//               { icon: Award, value: "2,500+", label: "Projekte" },
//               { icon: Sparkles, value: "98%", label: "Zufriedenheit" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="backdrop-blur-md bg-white/10 border border-white/20 px-5 py-4 rounded-2xl shadow-xl transition-all hover:bg-white/15"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 md:w-12 md:h-12 bg-accent/30 rounded-xl flex items-center justify-center">
//                     <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
//                   </div>
//                   <div className="text-left">
//                     <p className="text-xl md:text-2xl font-bold text-white">{item.value}</p>
//                     <p className="text-xs font-mono text-white/80">{item.label}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-4"
//           >
//             <Button
//               size="lg"
//               className="bg-accent text-white hover:bg-accent/90 text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-2xl font-semibold shadow-xl"
//               onClick={() =>
//                 document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               Termin Vereinbaren <ArrowRight className="w-5 h-5 ml-2" />
//             </Button>

//             <Button
//               size="lg"
//               variant="outline"
//               className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-2xl font-semibold shadow-xl hover:bg-white/20"
//               onClick={() =>
//                 document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               Portfolio Ansehen
//             </Button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Subtle Grid Overlay */}
//       <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>
//     </section>
//   )
// }

"use client"

import { ArrowRight, Sparkles, Shield, Award } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_new_bg-Q4Vr0mHkp6CsKpJPo1EVHZTvUky5jk.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Soft glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] right-[10%] w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 text-center">
        <div className="space-y-10 md:space-y-12">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h1 className="
              font-bold text-white leading-[0.95]
              text-[clamp(2.8rem,7vw,6.5rem)]
            ">
              <span className="block">Meisterhafte</span>
              <span className="block bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
                Handwerkskunst
              </span>
            </h1>

            <p className="
              mx-auto max-w-3xl
              text-sm sm:text-base md:text-lg lg:text-xl
              text-white/90 font-mono leading-relaxed
              px-4 sm:px-6
            ">
              Professionelle Elektriker, Installateure, Schreiner, Mechaniker und Maler
              für Ihr Zuhause und Geschäft
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6
            "
          >
            {[
              { icon: Shield, value: "30+", label: "Jahre Erfahrung" },
              { icon: Award, value: "2,500+", label: "Projekte" },
              { icon: Sparkles, value: "98%", label: "Zufriedenheit" },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  w-[150px] sm:w-[180px]
                  backdrop-blur-md bg-white/10 border border-white/20
                  px-4 py-3 rounded-xl shadow-lg
                "
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/30 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg sm:text-xl font-bold text-white">{item.value}</p>
                    <p className="text-xs font-mono text-white/80">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              flex flex-col sm:flex-row justify-center
              gap-4 pt-4
            "
          >
            <Button
              size="lg"
              className="
                bg-accent text-white
                px-7 py-5
                text-base sm:text-lg
                rounded-xl shadow-xl
              "
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Termin Vereinbaren <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
                bg-white/10 backdrop-blur-md
                border border-white/30 text-white
                px-7 py-5
                text-base sm:text-lg
                rounded-xl shadow-xl
              "
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Portfolio Ansehen
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </section>
  )
}
