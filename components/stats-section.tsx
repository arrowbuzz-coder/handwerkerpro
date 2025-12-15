"use client"

import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

export function StatsSection() {
  const stats = [
    {
      number: "2.500+",
      label: "Abgeschlossene Projekte",
      image: "/completed-projects-icon.jpg",
    },
    {
      number: "30+",
      label: "Jahre Erfahrung",
      image: "/experience-years-icon.jpg",
    },
    {
      number: "98%",
      label: "Kundenzufriedenheit",
      image: "/satisfaction-rating-icon.jpg",
    },
    {
      number: "45+",
      label: "Fachhandwerker",
      image: "/team-members-icon.png",
    },
  ]

  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <ScrollAnimationWrapper key={index} animation="scale-in">
              <div className="text-center space-y-2 group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={stat.image || "/placeholder.svg"}
                    alt={stat.label}
                    className="w-20 h-20 group-hover:rotate-12 transition-transform duration-500"
                  />
                </div>
                <p className="text-5xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-sm font-mono opacity-90">{stat.label}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
