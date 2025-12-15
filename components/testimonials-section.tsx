"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

const testimonials = [
  {
    name: "Michael Schmidt",
    role: "Hausbesitzer",
    rating: 5,
    text: "Außergewöhnliche Arbeit bei unserer Küchenverkabelung. Das Team war professionell, pünktlich und räumte nach jedem Tag perfekt auf. Sehr empfehlenswert!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Anna Weber",
    role: "Immobilienverwalterin",
    rating: 5,
    text: "Wir nutzen Handwerker Pro für alle unsere Immobilien. Ihre Zuverlässigkeit und Arbeitsqualität sind unübertroffen. Echte Profis in jeder Hinsicht.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Thomas Müller",
    role: "Restaurantbesitzer",
    rating: 5,
    text: "Sie haben unsere gewerbliche Sanitärrenovierung vor dem Zeitplan und unter dem Budget abgeschlossen. Die Liebe zum Detail war beeindruckend.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sarah Fischer",
    role: "Hausbesitzerin",
    rating: 5,
    text: "Die maßgefertigte Tischlerarbeit an unserer Treppe ist atemberaubend. Sie hat unser gesamtes Zuhause verwandelt. Jeden Euro wert!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Klaus Hoffmann",
    role: "Büroleiter",
    rating: 5,
    text: "Professionelle Klimaanlageninstallation mit minimaler Störung unseres Geschäftsbetriebs. Das Team war höflich und effizient.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Julia Becker",
    role: "Hausbesitzerin",
    rating: 5,
    text: "Wunderschöne Innenmalerei, die unsere Erwartungen übertroffen hat. Die Farbberatung war unschätzbar. Sehr talentierte Maler!",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Kundenbewertungen</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-foreground">
              Was unsere Kunden sagen
            </h2>
            <p className="text-lg text-muted-foreground font-mono leading-relaxed">
              {"Verlassen Sie sich nicht nur auf unser Wort—hier ist, was unsere zufriedenen Kunden sagen"}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper key={index} animation="scale-in">
              <Card className="border-border bg-card hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground font-mono leading-relaxed">{`"${testimonial.text}"`}</p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-card-foreground">{testimonial.name}</p>
                      <p className="text-sm font-mono text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
