"use client"

import { useLocale } from "@/contexts/LocaleContext"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

// Selçuklu üçgen logo
const FooterMark = () => (
  <svg viewBox="0 0 30 30" className="w-8 h-8">
    <polygon 
      points="15,3 27,24 3,24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
      className="text-altin"
    />
  </svg>
)

export default function Footer() {
  const { locale } = useLocale()

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/Mbanzaroglu", 
      icon: Github 
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/muhammet-banzaroglu/", 
      icon: Linkedin 
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/muhammetbanzaroglu/", 
      icon: Instagram 
    },
    { 
      name: "Email", 
      href: "mailto:muhammettbanzaroglu@gmail.com", 
      icon: Mail 
    },
  ]

  return (
    <footer className="relative bg-gece dark:bg-gece-dark text-krem overflow-hidden">
      {/* Ebru Arka Plan Efekti */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1000 400" className="w-full h-full opacity-30">
          <ellipse cx="200" cy="200" rx="300" ry="150" fill="#c9a227" opacity="0.03"/>
          <ellipse cx="800" cy="300" rx="250" ry="120" fill="#1e5f74" opacity="0.03"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Üst Kısım */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo ve İsim */}
          <div className="flex items-center gap-4">
            <FooterMark />
            <div>
              <span className="text-sm font-sans tracking-turkish opacity-70">
                Muhammet Banzaroğlu
              </span>
            </div>
          </div>

          {/* Sosyal Linkler */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-krem/50 hover:text-altin transition-colors duration-300"
                aria-label={link.name}
              >
                <span className="text-turkuaz text-xs">◆</span>
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Çizgi */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-altin/20 to-transparent mb-8" />

        {/* Alt Kısım */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans tracking-wide opacity-50">
            {locale === "tr" ? "İstanbul'dan sevgilerle" : "With love from Istanbul"}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-xs font-sans tracking-wide opacity-40">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
