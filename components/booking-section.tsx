"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Send, MapPin, Phone, Mail } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { IPhoneChatMockup } from "./iphone-chat-mockup"

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Kontakt</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-white px-4">
              Starten Sie Ihr Projekt heute
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-mono leading-relaxed max-w-2xl mx-auto px-4">
              Bereit anzufangen? Füllen Sie das Formular aus oder rufen Sie uns an. Wir antworten innerhalb von 2
              Stunden.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto items-center lg:items-start justify-center">
          <ScrollAnimationWrapper
            animation="slide-right"
            className="w-full lg:w-[45%] flex-shrink-0 order-1 lg:order-1"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="relative overflow-visible flex justify-center lg:justify-start">
                <IPhoneChatMockup />
              </div>

              <div className="hidden sm:grid sm:grid-cols-1 gap-4">
                <Card className="border-white/10 glass-card bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-mono">Rufen Sie uns an</p>
                      <a
                        href="tel:+491234567890"
                        className="text-white font-semibold hover:text-accent transition-colors"
                      >
                        +49 123 456 7890
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-white/10 glass-card bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-mono">E-Mail senden</p>
                      <a
                        href="mailto:info@handwerkerpro.de"
                        className="text-white font-semibold hover:text-accent transition-colors"
                      >
                        info@handwerkerpro.de
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-white/10 glass-card bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-mono">Besuchen Sie uns</p>
                      <p className="text-white font-semibold">Musterstraße 123, 10115 Berlin</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-left" className="w-full lg:w-[55%] flex-shrink-0 order-2 lg:order-2">
            <Card className="border-white/10 glass-card shadow-2xl bg-white/5 backdrop-blur-2xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-scale-in">
                    <div className="w-16 h-16 bg-accent/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto animate-float border border-white/10">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Vielen Dank!</h3>
                    <p className="text-white/70 font-mono">
                      Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 2 Stunden bei Ihnen melden.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-white text-sm">
                        Vollständiger Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Max Mustermann"
                        required
                        className="font-mono glass-card bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11 sm:h-12 focus:border-accent focus:ring-accent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-mono text-white text-sm">
                          E-Mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="max@beispiel.de"
                          required
                          className="font-mono glass-card bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11 sm:h-12 focus:border-accent focus:ring-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-mono text-white text-sm">
                          Telefon *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+49 123 456 7890"
                          required
                          className="font-mono glass-card bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11 sm:h-12 focus:border-accent focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-mono text-white text-sm">
                        Benötigter Service *
                      </Label>
                      <select
                        id="service"
                        className="w-full h-11 sm:h-12 px-3 rounded-md border glass-card bg-white/5 border-white/10 font-mono text-sm text-white focus:border-accent focus:ring-accent"
                        required
                      >
                        <option value="" className="bg-background">
                          Service auswählen
                        </option>
                        <option value="electrical" className="bg-background">
                          Elektriker
                        </option>
                        <option value="plumbing" className="bg-background">
                          Klempner
                        </option>
                        <option value="carpentry" className="bg-background">
                          Tischler
                        </option>
                        <option value="mechanics" className="bg-background">
                          Mechaniker
                        </option>
                        <option value="painting" className="bg-background">
                          Maler
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-mono text-white text-sm">
                        Projektdetails *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Bitte beschreiben Sie Ihr Projekt..."
                        rows={5}
                        required
                        className="font-mono glass-card bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none focus:border-accent focus:ring-accent"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-white hover:bg-accent/90 hover:scale-[1.02] transition-all duration-300 border border-white/20 shadow-xl h-11 sm:h-12 font-semibold group"
                    >
                      Anfrage senden
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="sm:hidden mt-6 space-y-4">
              <Card className="border-white/10 glass-card bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-mono">Rufen Sie uns an</p>
                    <a
                      href="tel:+491234567890"
                      className="text-white font-semibold hover:text-accent transition-colors"
                    >
                      +49 123 456 7890
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 glass-card bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-mono">E-Mail senden</p>
                    <a
                      href="mailto:info@handwerkerpro.de"
                      className="text-white font-semibold hover:text-accent transition-colors break-all"
                    >
                      info@handwerkerpro.de
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 glass-card bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-mono">Besuchen Sie uns</p>
                    <p className="text-white font-semibold">Musterstraße 123, 10115 Berlin</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
