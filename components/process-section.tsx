"use client"

import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Erstberatung",
      description:
        "Teilen Sie uns Ihre Projektdetails und Anforderungen mit. Wir besprechen Ihre Vision, Zeitplan und Budget, um genau zu verstehen, was Sie brauchen.",
      image: "/animated-consultation-meeting-gif-style-profession.jpg",
    },
    {
      number: "02",
      title: "Detaillierte Bewertung",
      description:
        "Unsere Experten besuchen Ihren Standort, um die erforderlichen Arbeiten zu bewerten, Maße zu nehmen und potenzielle Herausforderungen zu identifizieren.",
      image: "/tradesperson-inspecting-and-measuring-work-site.jpg",
    },
    {
      number: "03",
      title: "Individuelles Angebot",
      description:
        "Erhalten Sie ein transparentes, detailliertes Angebot ohne versteckte Gebühren. Wir liefern einen klaren Zeitplan und detaillierten Arbeitsumfang.",
      image: "/professional-document-proposal-and-agreement.jpg",
    },
    {
      number: "04",
      title: "Fachgerechte Ausführung",
      description:
        "Unsere qualifizierten Handwerker führen Ihr Projekt mit Präzision und Sorgfalt aus und halten Sie bei jedem Schritt auf dem Laufenden.",
      image: "/animated-skilled-workers-completing-project-gif-st.jpg",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Wie wir arbeiten</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-foreground">
              Unser bewährter Prozess
            </h2>
            <p className="text-lg text-muted-foreground font-mono leading-relaxed">
              Von der Beratung bis zur Fertigstellung machen wir jedes Projekt nahtlos und stressfrei.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <ScrollAnimationWrapper key={index} animation={index % 2 === 0 ? "slide-right" : "slide-left"}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="inline-block">
                    <span className="text-6xl font-bold text-accent/20">{step.number}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-lg text-muted-foreground font-mono leading-relaxed">{step.description}</p>
                </div>
                <div
                  className={`relative h-80 rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
