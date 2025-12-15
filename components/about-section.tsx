"use client"

import { Button } from "@/components/ui/button"
import { Award, Shield, Users } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimationWrapper animation="slide-right">
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/professional-tradesperson-team-portrait.jpg"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animated badge */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/animated-quality-badge-gif-style-certification.jpg"
                  alt="Certified professionals"
                  className="w-20 h-20 mb-3"
                />
                <p className="text-accent-foreground font-bold text-center text-sm">Certified Professionals</p>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-left">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Über uns</p>
                <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-foreground">
                  Drei Jahrzehnte Exzellenz
                </h2>
                <p className="text-lg text-muted-foreground font-mono leading-relaxed mb-6">
                  Seit 1995 liefern wir außergewöhnliche Handwerkskunst in allen Gewerken. Unser Team zertifizierter
                  Fachleute bringt Expertise, Zuverlässigkeit und ein Engagement für Qualität, das uns auszeichnet.
                </p>
                <p className="text-lg text-muted-foreground font-mono leading-relaxed">
                  Wir glauben daran, dauerhafte Beziehungen zu unseren Kunden aufzubauen durch ehrliche Kommunikation,
                  transparente Preisgestaltung und Arbeit, die jedes Mal die Erwartungen übertrifft.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-card-foreground">Lizenziert</h3>
                  <p className="text-sm font-mono text-muted-foreground">Vollständig zertifiziert und versichert</p>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-card-foreground">Garantiert</h3>
                  <p className="text-sm font-mono text-muted-foreground">Alle Arbeiten mit Garantie</p>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-card-foreground">Erfahren</h3>
                  <p className="text-sm font-mono text-muted-foreground">30+ Jahre im Geschäft</p>
                </div>
              </div>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Unser Team kennenlernen
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
