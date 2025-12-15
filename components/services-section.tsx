"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Droplet, Hammer, Wrench, Paintbrush } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { ParallaxSection } from "./parallax-section"

const services = [
  {
    icon: Zap,
    title: "Elektroinstallationen",
    description:
      "Komplette Elektroinstallationen, Reparaturen und Upgrades. Von Beleuchtung bis zur vollständigen Neuverkabelung sorgen wir für Sicherheit und Effizienz.",
    features: ["Wohn- & Gewerbeimmobilien", "Notfallreparaturen", "Smart Home Integration"],
  },
  {
    icon: Droplet,
    title: "Sanitärarbeiten",
    description:
      "Fachkundige Sanitärlösungen für alle Ihre Bedürfnisse. Leckreparaturen, Installationen und Wartung mit garantierter Qualität.",
    features: ["24/7 Notdienst", "Rohrinstallation", "Badezimmerrenovierungen"],
  },
  {
    icon: Hammer,
    title: "Tischlerarbeiten",
    description:
      "Maßgeschneiderte Holzarbeiten und Tischlerarbeiten. Von Möbeln bis zu kompletten Renovierungen bringen wir Ihre Vision zum Leben.",
    features: ["Maßgefertigte Möbel", "Tür- & Fensterinstallation", "Terrassenbau"],
  },
  {
    icon: Wrench,
    title: "Mechanische Arbeiten",
    description:
      "Professionelle mechanische Dienstleistungen für Wohn- und Gewerbebedürfnisse. Zuverlässige Reparaturen und Wartung.",
    features: ["Heizungs- & Klimaanlagen", "Gerätereparatur", "Vorbeugende Wartung"],
  },
  {
    icon: Paintbrush,
    title: "Malerarbeiten",
    description:
      "Hochwertige Malerdienstleistungen, die Räume verwandeln. Innen- und Außenprojekte mit akribischer Liebe zum Detail.",
    features: ["Innen & Außen", "Farbberatung", "Gewerbliche Projekte"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 bg-background relative overflow-hidden">
      <ParallaxSection speed={0.3} className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <ParallaxSection
        speed={0.4}
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Unsere Expertise</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-foreground px-4">
              Umfassende Handwerksleistungen
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-mono leading-relaxed px-4">
              Von Elektroarbeiten bis Malerarbeiten bieten wir Expertenlösungen für alle Ihre Wohn- und
              Geschäftsbedürfnisse.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={index} animation="scale-in">
              <Card className="group glass-card hover:shadow-2xl transition-all duration-500 border-white/10 hover:border-white/20 hover:-translate-y-3 hover:rotate-1 h-full cursor-pointer bg-white/5 backdrop-blur-2xl">
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/20 backdrop-blur-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border border-white/10">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-white transition-colors" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 font-mono leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-white/10">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/60 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 75}ms` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
