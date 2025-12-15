"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { ParallaxSection } from "./parallax-section"

const categories = ["Alle", "Elektro", "Sanitär", "Tischlerei", "Mechanik", "Malerei"]

const projects = [
  {
    title: "Moderne Küchenverkabelung",
    category: "Elektro",
    image: "/modern-kitchen-with-new-electrical-wiring-and-ligh.jpg",
    description: "Komplette Elektroüberholung mit Smart Home Integration",
  },
  {
    title: "Luxus-Badezimmerrenovierung",
    category: "Sanitär",
    image: "/luxury-bathroom-with-modern-plumbing-fixtures.jpg",
    description: "Premium-Armaturen und maßgeschneiderte Sanitärinstallation",
  },
  {
    title: "Maßgefertigte Eichentreppe",
    category: "Tischlerei",
    image: "/beautiful-custom-oak-wood-staircase.jpg",
    description: "Handgefertigte Massiveiche mit modernem Design",
  },
  {
    title: "Gewerbe-Klimaanlage",
    category: "Mechanik",
    image: "/modern-hvac-system-installation-commercial-buildin.jpg",
    description: "Energieeffiziente Klimatisierungslösung",
  },
  {
    title: "Historisches Hausäußeres",
    category: "Malerei",
    image: "/beautifully-painted-heritage-home-exterior.jpg",
    description: "Zeitgemäße Restaurationsmalerei",
  },
  {
    title: "Büro Smart-Beleuchtung",
    category: "Elektro",
    image: "/modern-office-with-smart-lighting-system.jpg",
    description: "Automatisierte Beleuchtung mit Bewegungssensoren",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Alle")

  const filteredProjects =
    activeCategory === "Alle" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <ParallaxSection
        speed={0.35}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Unsere Arbeit</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-foreground">Aktuelle Projekte</h2>
            <p className="text-lg text-muted-foreground font-mono leading-relaxed">
              Entdecken Sie unser Portfolio abgeschlossener Projekte, die hochwertige Handwerkskunst zeigen
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-in">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground scale-110"
                    : "glass-card font-mono hover:scale-110"
                } transition-all duration-300 hover:-translate-y-1`}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimationWrapper key={index} animation="scale-in">
              <Card className="group overflow-hidden border-border glass-card hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:rotate-1 h-full cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 animate-slide-in-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 glass-card text-accent-foreground text-xs font-mono rounded-full backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2 bg-card/80 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground group-hover:translate-x-1 transition-transform duration-300">
                    {project.description}
                  </p>
                </div>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper animation="fade-in">
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="font-mono glass-card hover:scale-110 hover:-translate-y-1 transition-all duration-300 bg-transparent"
            >
              Vollständiges Portfolio ansehen
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
