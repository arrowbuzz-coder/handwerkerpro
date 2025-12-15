"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-4">
              <Image
                src="/images/hanwerker-2-removebg-preview.png"
                alt="Handwerker Pro Logo"
                width={280}
                height={100}
                className="h-24 w-auto mb-4"
              />
              <p className="text-sm font-mono opacity-90 leading-relaxed">
                Professionelle Handwerker liefern außergewöhnliche Qualität seit 1995.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Dienstleistungen</h4>
              <ul className="space-y-2 text-sm font-mono opacity-90">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    Elektro
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    Sanitär
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    Tischlerei
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    Mechanik
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    Malerei
                  </button>
                </li>
              </ul>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Unternehmen</h4>
              <ul className="space-y-2 text-sm font-mono opacity-90">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    Über uns
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    Unser Team
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 hover:translate-x-1 transition-all duration-300">
                    Karriere
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    Kontakt
                  </button>
                </li>
              </ul>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Kontakt</h4>
              <ul className="space-y-2 text-sm font-mono opacity-90">
                <li>Hauptstraße 123</li>
                <li>10115 Berlin, Deutschland</li>
                <li className="pt-2">
                  <a
                    href="tel:+491234567890"
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    +49 123 456 7890
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@handwerker-pro.de"
                    className="hover:opacity-100 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    info@handwerker-pro.de
                  </a>
                </li>
              </ul>
            </div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper animation="fade-in">
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono opacity-75">
              <p>&copy; 2025 Handwerker Pro. Alle Rechte vorbehalten.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Datenschutz
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  AGB
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Impressum
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </footer>
  )
}
