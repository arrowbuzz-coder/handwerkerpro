"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { MacbookScroll } from "./ui/macbook-scroll"

const serviceAreas = [
  {
    region: "Berlin & Brandenburg",
    cities: ["Berlin", "Potsdam", "Brandenburg", "Cottbus"],
    responseTime: "< 2 Stunden",
  },
  {
    region: "Hamburg Metropolregion",
    cities: ["Hamburg", "Lübeck", "Kiel", "Neumünster"],
    responseTime: "< 3 Stunden",
  },
  {
    region: "München & Bayern",
    cities: ["München", "Nürnberg", "Augsburg", "Regensburg"],
    responseTime: "< 2 Stunden",
  },
  {
    region: "Rhein-Ruhr-Gebiet",
    cities: ["Köln", "Düsseldorf", "Essen", "Dortmund"],
    responseTime: "< 2 Stunden",
  },
]

export function ServiceAreasSection() {
  return (
    <section id="areas" className="py-16 sm:py-20 md:py-24 px-4 bg-background relative z-10">
      <div className="container mx-auto">
        <div className="mb-16 sm:mb-24 md:mb-32 relative z-0">
          <MacbookScroll
            title={
              <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Unsere Servicegebiete in ganz Deutschland <br className="hidden sm:block" />
                Professionelle Handwerker in Ihrer Nähe
              </span>
            }
            badge={
              <div className="flex gap-2 -rotate-12 transform">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            }
            src="/professional-tradespeople-at-work-construction-renovat.jpg"
            showGradient={false}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start relative z-20 bg-background">
          <div className="space-y-6 sm:space-y-8">
            <ScrollAnimationWrapper animation="fade-up">
              <div>
                <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Wo wir tätig sind</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-foreground">
                  Servicegebiete in ganz Deutschland
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-mono leading-relaxed">
                  Wir bedienen stolz große Metropolregionen und umliegende Gebiete mit schnellen Reaktionszeiten und
                  lokaler Expertise.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="space-y-4">
              {serviceAreas.map((area, index) => (
                <ScrollAnimationWrapper key={index} animation="slide-right">
                  <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                        <div className="space-y-2 flex-1 w-full">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                            <h3 className="text-lg sm:text-xl font-bold text-card-foreground">{area.region}</h3>
                          </div>
                          <p className="text-xs sm:text-sm font-mono text-muted-foreground break-words">
                            {area.cities.join(" · ")}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full flex-shrink-0">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                          <span className="text-xs font-mono text-accent font-semibold whitespace-nowrap">
                            {area.responseTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>

            <ScrollAnimationWrapper animation="scale-in">
              <Card className="bg-accent text-accent-foreground border-none hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold">Ihr Gebiet nicht dabei?</h3>
                      <p className="text-sm sm:text-base font-mono leading-relaxed opacity-90">
                        Wir erweitern ständig unsere Servicegebiete. Kontaktieren Sie uns, um Ihr Projekt zu
                        besprechen—wir können möglicherweise helfen!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          </div>

          <ScrollAnimationWrapper animation="slide-left">
            <div className="relative h-64 sm:h-96 md:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/map-of-germany-with-service-coverage-areas-highlig.jpg"
                alt="Service areas map"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 glass-card backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Service coverage"
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                  <div>
                    <p className="font-bold text-card-foreground mb-1 text-sm sm:text-base">24/7 Notdienst verfügbar</p>
                    <p className="text-xs sm:text-sm font-mono text-muted-foreground">
                      Schnelle Reaktion in allen Servicegebieten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
