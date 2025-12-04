"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

// Selçuklu Yıldızı SVG Component
const SeljukStar = ({ size = 100, opacity = 0.1, rotation = 0 }: { size?: number; opacity?: number; rotation?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100"
    style={{ opacity, transform: `rotate(${rotation}deg)` }}
    className="transition-transform duration-300"
  >
    <polygon 
      points="50,5 61,35 95,35 68,57 79,90 50,70 21,90 32,57 5,35 39,35" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
    />
    <polygon 
      points="50,20 56,40 78,40 60,52 67,73 50,60 33,73 40,52 22,40 44,40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
    />
  </svg>
)

// Lale (Tulip) SVG Component
const TulipDecoration = () => (
  <svg viewBox="0 0 60 120" className="w-16 h-32 text-bordo dark:text-altin opacity-20">
    <path 
      d="M30,20 Q20,30 25,50 Q20,55 30,80 Q40,55 35,50 Q40,30 30,20" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
    />
    <path 
      d="M30,80 L30,115" 
      stroke="currentColor" 
      strokeWidth="0.5"
      className="text-turkuaz"
    />
    <path 
      d="M30,95 Q20,90 15,100" 
      fill="none"
      stroke="currentColor" 
      strokeWidth="0.5"
      className="text-turkuaz"
    />
  </svg>
)

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { t, locale } = useLocale()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigationItems = [
    { 
      title: t("navbar.about"), 
      href: "/hakkimda", 
      symbol: "◆",
      desc: locale === "tr" ? "Kim olduğumu keşfedin" : "Discover who I am"
    },
    { 
      title: t("navbar.experience"), 
      href: "/deneyimler", 
      symbol: "✦",
      desc: locale === "tr" ? "Profesyonel yolculuğum" : "My professional journey"
    },
    { 
      title: t("navbar.education"), 
      href: "/egitim", 
      symbol: "❋",
      desc: locale === "tr" ? "Akademik geçmişim" : "My academic background"
    },
    { 
      title: t("navbar.hobbies"), 
      href: "/hobiler", 
      symbol: "✧",
      desc: locale === "tr" ? "Tutkularım ve ilgi alanlarım" : "My passions and interests"
    },
  ]

  const socialLinks = [
    { href: "https://github.com/Mbanzaroglu", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/muhammet-banzaroglu/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/muhammetbanzaroglu/", icon: Instagram, label: "Instagram" },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Ebru Background Effect */}
      <div className="ebru-background">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            <linearGradient id="ebruGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e5f74" stopOpacity="0.03"/>
              <stop offset="50%" stopColor="#c9a227" stopOpacity="0.02"/>
              <stop offset="100%" stopColor="#8b1538" stopOpacity="0.03"/>
            </linearGradient>
            <linearGradient id="ebruGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c9a227" stopOpacity="0.02"/>
              <stop offset="100%" stopColor="#1e5f74" stopOpacity="0.02"/>
            </linearGradient>
          </defs>
          <ellipse 
            cx={300 + Math.sin(scrollY * 0.01) * 50} 
            cy="400" 
            rx={200 + scrollY * 0.1} 
            ry={150 + scrollY * 0.05} 
            fill="url(#ebruGradient1)"
          />
          <ellipse 
            cx={700 - Math.sin(scrollY * 0.01) * 30} 
            cy="600" 
            rx={180 + scrollY * 0.08} 
            ry={120 + scrollY * 0.04} 
            fill="url(#ebruGradient2)"
          />
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div className="floating-elements">
        {[
          { left: "10%", top: "15%", size: 60, delay: 0 },
          { left: "85%", top: "25%", size: 40, delay: 0.2 },
          { left: "75%", top: "70%", size: 80, delay: 0.4 },
          { left: "15%", top: "60%", size: 50, delay: 0.6 },
          { left: "50%", top: "85%", size: 45, delay: 0.8 },
        ].map((item, i) => (
          <div 
            key={i}
            className="floating-star"
            style={{
              left: item.left,
              top: item.top,
              transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
            }}
          >
            <SeljukStar size={item.size} opacity={0.04 + i * 0.01} rotation={scrollY * 0.05} />
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl w-full">
          {/* Vertical Text - Desktop Only */}
          <motion.div 
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="text-sm tracking-[0.4em] text-turkuaz font-light">
              {locale === "tr" ? "Yazılım Mühendisi" : "Software Engineer"}
            </span>
            <span className="text-xs tracking-[0.3em] opacity-50 font-sans">
              İstanbul
            </span>
          </motion.div>

          {/* Hero Main Content */}
          <div className="text-center">
            {/* Name - Large Typography */}
            <div className="mb-4">
              <div className="flex justify-center flex-wrap">
                {"MUHAMMET".split("").map((letter, i) => (
                  <motion.span 
                    key={i}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-normal tracking-wide"
                    initial={{ opacity: 0, y: 100, rotate: 5 }}
                    animate={isLoaded ? { opacity: 1, y: 0, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.5 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-center flex-wrap">
                {"BANZAROĞLU".split("").map((letter, i) => (
                  <motion.span 
                    key={i}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-normal tracking-wide text-outline"
                    initial={{ opacity: 0, y: 100 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Subtitle with Ornaments */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-altin text-xl transform scale-x-[-1]">❧</span>
              <span className="text-base sm:text-lg tracking-wide font-light">
                Fullstack Developer & Computer Engineer
              </span>
              <span className="text-altin text-xl">❧</span>
            </motion.div>

            {/* Location Badge */}
            <motion.div 
              className="flex items-center justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-bordo text-sm">◈</span>
              <span className="text-xs tracking-[0.2em] opacity-60 font-sans">
                İstanbul, Türkiye
              </span>
            </motion.div>

            {/* Navigation Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {navigationItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative p-6 border border-[var(--border-light)] hover:border-altin/50 transition-all duration-500 hover-lift overflow-hidden"
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-altin/5 to-turkuaz/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner Decorations */}
                  <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 30 30">
                      <path d="M0,0 L30,0 L30,30" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 30 30">
                      <path d="M0,30 L0,0 L30,0" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <span className="text-turkuaz dark:text-altin text-lg mb-2 block group-hover:rotate-45 transition-transform duration-300">
                      {item.symbol}
                    </span>
                    <h3 className="font-display text-lg mb-1 group-hover:text-bordo dark:group-hover:text-altin transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-bordo dark:text-altin opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </Link>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[var(--text-muted)] hover:text-bordo dark:hover:text-altin transition-colors duration-300"
                  aria-label={link.label}
                >
                  <span className="text-xs text-turkuaz dark:text-altin opacity-50 group-hover:opacity-100">◆</span>
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <div className="w-px h-12 bg-gradient-to-b from-turkuaz to-transparent animate-slide-down" />
            <span className="text-[0.6rem] tracking-[0.4em] opacity-50 font-sans">
              {locale === "tr" ? "KEŞFET" : "EXPLORE"}
            </span>
            <span className="text-altin animate-bounce-slow">↓</span>
          </motion.div>

          {/* Decorative Star - Right Side */}
          <motion.div 
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={isLoaded ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg viewBox="0 0 200 200" className="w-64 h-64 text-turkuaz dark:text-altin">
              <defs>
                <linearGradient id="heroStarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor"/>
                  <stop offset="100%" stopColor="#c9a227"/>
                </linearGradient>
              </defs>
              <g style={{ transform: `rotate(${scrollY * 0.1}deg)`, transformOrigin: "center" }}>
                <polygon 
                  points="100,10 120,70 180,80 135,120 150,180 100,145 50,180 65,120 20,80 80,70" 
                  fill="none" 
                  stroke="url(#heroStarGradient)" 
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <polygon 
                  points="100,30 112,70 150,75 125,100 135,140 100,120 65,140 75,100 50,75 88,70" 
                  fill="none" 
                  stroke="url(#heroStarGradient)" 
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <circle cx="100" cy="100" r="20" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.2"/>
              </g>
            </svg>
          </motion.div>

          {/* Tulip Decoration - Left Side */}
          <motion.div 
            className="hidden lg:block absolute left-20 bottom-32"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <TulipDecoration />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
