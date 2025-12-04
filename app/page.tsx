"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Instagram, ArrowRight, Mail, Briefcase, ChevronDown, Download, Code, Server, Database, Palette } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

// ═══════════════════════════════════════════════════════════
// DEKORATIF KOMPONENTLER
// ═══════════════════════════════════════════════════════════

// Selçuklu Yıldızı
const SeljukStar = ({ size = 100, opacity = 0.1, className = "" }: { size?: number; opacity?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100"
    style={{ opacity }}
    className={className}
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

// Lale Dekorasyonu
const TulipDecoration = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 120" className={`w-12 h-24 ${className}`}>
    <path 
      d="M30,20 Q20,30 25,50 Q20,55 30,80 Q40,55 35,50 Q40,30 30,20" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
    />
    <path d="M30,80 L30,115" stroke="currentColor" strokeWidth="0.5" />
    <path d="M30,95 Q20,90 15,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
  </svg>
)

// Bölüm Başlığı
const SectionTitle = ({ number, title, ornament = "✦" }: { number: string; title: string; ornament?: string }) => (
  <div className="flex items-center gap-4 mb-12">
    <span className="text-xs tracking-wide opacity-30 font-sans">{number}</span>
    <div className="flex items-center gap-3">
      <span className="text-altin text-sm">{ornament}</span>
      <h2 className="text-2xl md:text-4xl font-display font-normal tracking-wide">{title}</h2>
      <span className="text-altin text-sm">{ornament}</span>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-turkuaz/20 via-altin/20 to-transparent" />
  </div>
)

// ═══════════════════════════════════════════════════════════
// ANA SAYFA
// ═══════════════════════════════════════════════════════════

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { t, locale } = useLocale()
  
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Uzmanlık Alanları - Kategorize edilmiş
  const expertiseAreas = [
    {
      title: "Frontend",
      icon: Code,
      symbol: "◆",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      color: "turkuaz"
    },
    {
      title: "Backend",
      icon: Server,
      symbol: "◇",
      technologies: ["Node.js", ".NET", "Python", "REST API"],
      color: "altin"
    },
    {
      title: "Database",
      icon: Database,
      symbol: "✦",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
      color: "bordo"
    },
    {
      title: "UI/UX",
      icon: Palette,
      symbol: "❋",
      technologies: ["Figma", "Responsive Design", "Component Design"],
      color: "turkuaz"
    }
  ]

  // Deneyimler (son 3)
  interface Experience {
    title: string
    company: string
    period: string
    description: string
    technologies: string[]
  }
  
  const experiences = (t("experiences.experience_list") as unknown as Experience[]).slice(0, 3)

  // Sosyal linkler
  const socialLinks = [
    { href: "https://github.com/Mbanzaroglu", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/muhammet-banzaroglu/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/muhammetbanzaroglu/", icon: Instagram, label: "Instagram" },
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* Ebru Arka Plan */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-60 dark:opacity-30">
          <defs>
            <linearGradient id="ebruGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e5f74" stopOpacity="0.03"/>
              <stop offset="50%" stopColor="#c9a227" stopOpacity="0.02"/>
              <stop offset="100%" stopColor="#8b1538" stopOpacity="0.03"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="400" rx="350" ry="250" fill="url(#ebruGradient1)"/>
          <ellipse cx="700" cy="600" rx="300" ry="200" fill="url(#ebruGradient1)"/>
        </svg>
      </div>

      {/* Geometrik Arka Plan Deseni */}
      <div className="fixed inset-0 geometric-pattern-bg opacity-30 pointer-events-none z-0" />

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════ */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Floating Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: "10%", top: "20%", size: 60 },
            { left: "85%", top: "15%", size: 40 },
            { left: "75%", top: "70%", size: 80 },
            { left: "5%", top: "65%", size: 50 },
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="absolute text-turkuaz dark:text-altin"
              style={{ left: item.left, top: item.top }}
              animate={{ rotate: 360, y: [0, -10, 0] }}
              transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity } }}
            >
              <SeljukStar size={item.size} opacity={0.05} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl w-full text-center">
          {/* İsim - Elegant Reveal Animation */}
          <div className="mb-6 overflow-hidden">
            {/* MUHAMMET */}
            <motion.div 
              className="flex justify-center flex-wrap"
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-normal tracking-wide">
                MUHAMMET
              </h1>
            </motion.div>
            
            {/* BANZAROĞLU - Outline */}
            <motion.div 
              className="flex justify-center flex-wrap"
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-normal tracking-wide text-outline">
                BANZAROĞLU
              </h1>
            </motion.div>
          </div>

          {/* Alt Başlık */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-altin text-xl transform scale-x-[-1]">❧</span>
            <span className="text-base sm:text-lg tracking-wide font-normal">
              Fullstack Developer & Computer Engineer
            </span>
            <span className="text-altin text-xl">❧</span>
          </motion.div>

          {/* Konum */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-bordo dark:text-altin text-sm">◈</span>
            <span className="text-xs tracking-[0.2em] opacity-60 font-sans">İstanbul, Türkiye</span>
          </motion.div>

          {/* Sosyal Linkler */}
          <motion.div 
            className="flex justify-center gap-8 mb-16"
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[var(--text-muted)] hover:text-bordo dark:hover:text-altin transition-colors duration-300"
              >
                <span className="text-xs text-turkuaz dark:text-altin opacity-50 group-hover:opacity-100">◆</span>
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <span className="text-[0.6rem] tracking-[0.4em] opacity-50 font-sans uppercase">
              {locale === "tr" ? "Keşfet" : "Explore"}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 text-altin" />
            </motion.div>
          </motion.div>

          {/* Dekoratif Yıldız - Sağ */}
          <motion.div 
            className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-turkuaz dark:text-altin animate-rotate-slow">
              <SeljukStar size={250} opacity={0.08} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════
          HAKKIMDA SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionTitle number="01" title={t("about-me.about")} ornament="◇" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Fotoğraf */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
                {/* Dekoratif Çerçeve */}
                <div className="absolute -inset-4 border border-altin/30" />
                <div className="absolute -inset-2 border border-turkuaz/20" />
                
                {/* Köşe Süslemeleri */}
                <svg className="absolute -top-6 -left-6 w-10 h-10 text-altin" viewBox="0 0 40 40">
                  <path d="M0,40 L0,0 L40,0" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <svg className="absolute -bottom-6 -right-6 w-10 h-10 text-altin" viewBox="0 0 40 40">
                  <path d="M40,0 L40,40 L0,40" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>

                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/me6.jpeg"
                    alt="Muhammet Banzaroğlu"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Lale Dekorasyonu */}
              <div className="absolute -bottom-8 -left-8 text-bordo dark:text-altin opacity-20 hidden lg:block">
                <TulipDecoration />
              </div>
            </motion.div>

            {/* Metin */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-6 font-body">
                {t("about-me.introduction")}
              </p>
              
              <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-8 font-body">
                {t("about-me.ituoder.before")}
                <a 
                  href={t("about-me.ituoder.href")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-turkuaz dark:text-altin hover:underline"
                >
                  {t("about-me.ituoder.link_text")}
                </a>
                {t("about-me.ituoder.after")}
              </p>

              <Link 
                href="/hakkimda"
                className="group inline-flex items-center gap-3 text-sm font-sans tracking-wide text-bordo dark:text-altin hover:gap-4 transition-all"
              >
                <span>{locale === "tr" ? "Daha Fazla Bilgi" : "Learn More"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          UZMANLIK ALANLARI SECTION - Kompakt Kategorize Görünüm
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]">
        {/* Çini Deseni */}
        <div className="absolute inset-0 geometric-pattern-bg opacity-50" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle number="02" title={locale === "tr" ? "Uzmanlık Alanları" : "Expertise"} ornament="✦" />
          </motion.div>

          {/* 4 Kategori Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-6 border border-[var(--border-light)] hover:border-altin/40 transition-all duration-500 hover-lift overflow-hidden"
                >
                  {/* Hover Arka Plan */}
                  <div className="absolute inset-0 bg-gradient-to-br from-altin/5 to-turkuaz/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Köşe Süslemesi */}
                  <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 24 24"><path d="M0,0 L24,0 L24,24" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/></svg>
                  </div>

                  <div className="relative z-10">
                    {/* İkon ve Başlık */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center border border-turkuaz/30 dark:border-altin/30 group-hover:border-altin/50 transition-colors">
                        <Icon className="w-5 h-5 text-turkuaz dark:text-altin" />
                      </div>
                      <div>
                        <span className="text-altin text-xs mr-1">{area.symbol}</span>
                        <h3 className="inline text-lg font-display font-normal tracking-wide group-hover:text-bordo dark:group-hover:text-altin transition-colors">
                          {area.title}
                        </h3>
                      </div>
                    </div>

                    {/* Teknolojiler */}
                    <div className="flex flex-wrap gap-1.5">
                      {area.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-sans tracking-wide border border-[var(--border-light)] text-[var(--text-muted)] group-hover:border-altin/30 group-hover:text-[var(--text-secondary)] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Alt Gradient Çizgi */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-turkuaz via-altin to-bordo transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              )
            })}
          </div>
          
          {/* CV İndirme ve Daha Fazla */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* CV İndir Butonu */}
            <a 
              href="/cv.pdf"
              download="Muhammet_Banzaroglu_CV.pdf"
              className="group inline-flex items-center gap-3 px-6 py-3 border border-bordo dark:border-altin text-bordo dark:text-altin hover:bg-bordo hover:text-white dark:hover:bg-altin dark:hover:text-gece transition-all duration-300 font-sans text-sm tracking-wide"
            >
              <Download className="w-4 h-4" />
              <span>{locale === "tr" ? "CV İndir" : "Download CV"}</span>
            </a>

            {/* Daha Fazla Linki */}
            <Link 
              href="/hakkimda"
              className="group inline-flex items-center gap-3 text-sm font-sans tracking-wide text-[var(--text-muted)] hover:text-bordo dark:hover:text-altin hover:gap-4 transition-all"
            >
              <span>{locale === "tr" ? "Tüm Yetenekleri Gör" : "View All Skills"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Dekoratif Lale */}
          <div className="absolute right-10 bottom-10 text-bordo dark:text-altin opacity-10 hidden lg:block">
            <svg viewBox="0 0 100 200" className="w-24 h-48">
              <path d="M50,30 Q30,50 40,90 Q30,100 50,150 Q70,100 60,90 Q70,50 50,30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M50,150 L50,195" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DENEYİM SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 geometric-pattern-bg opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle number="03" title={t("experiences.experiences")} ornament="✧" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Çizgisi */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-altin via-turkuaz to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline Noktası */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                    <span className="text-altin text-lg">◈</span>
                  </div>

                  <div className="group p-6 border border-[var(--border-light)] hover:border-altin/30 transition-all duration-500 hover-lift relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-altin/5 to-turkuaz/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-display font-normal tracking-wide group-hover:text-bordo dark:group-hover:text-altin transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[var(--text-muted)] mt-1">
                            <Briefcase size={14} className="text-turkuaz dark:text-altin" />
                            <span className="text-sm font-sans">{exp.company}</span>
                          </div>
                        </div>
                        <span className="text-xs font-sans tracking-wide text-[var(--text-muted)]">{exp.period}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] font-body">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Daha Fazla Linki */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Link 
                href="/deneyimler"
                className="group inline-flex items-center gap-3 text-sm font-sans tracking-wide text-bordo dark:text-altin hover:gap-4 transition-all"
              >
                <span>{locale === "tr" ? "Tüm Deneyimleri Gör" : "View All Experience"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* İTÜ Tribute */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block opacity-10">
            <svg viewBox="0 0 120 120" className="w-32 h-32 text-turkuaz dark:text-altin">
              <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <text x="60" y="65" textAnchor="middle" fontSize="16" fill="currentColor" fontFamily="serif">İTÜ</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          İLETİŞİM CTA SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gece dark:bg-gece-dark text-krem overflow-hidden">
        {/* Ebru Arka Plan */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-30">
            <ellipse cx="200" cy="250" rx="300" ry="150" fill="#c9a227" opacity="0.03"/>
            <ellipse cx="800" cy="300" rx="250" ry="120" fill="#1e5f74" opacity="0.03"/>
          </svg>
        </div>

        {/* Dekoratif Yıldız */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-altin hidden lg:block">
          <SeljukStar size={300} opacity={0.03} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-altin">❋</span>
              <h2 className="text-3xl md:text-5xl font-display font-normal tracking-wide">
                {locale === "tr" ? "Birlikte Çalışalım" : "Let's Work Together"}
              </h2>
              <span className="text-altin">❋</span>
            </div>
            
            <p className="text-lg text-krem/60 mb-10 italic font-body">
              {locale === "tr" ? "Yeni projelere her zaman açığım" : "I'm always open to new projects"}
            </p>

            <a 
              href="mailto:muhammettbanzaroglu@gmail.com"
              className="group inline-flex items-center gap-4 text-lg font-sans tracking-wide border-b border-altin/30 pb-2 hover:border-altin transition-colors"
            >
              <Mail className="w-5 h-5 text-altin" />
              <span>muhammettbanzaroglu@gmail.com</span>
              <ArrowRight className="w-5 h-5 text-altin group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex justify-center gap-8 mt-12">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-krem/50 hover:text-altin transition-colors duration-300"
                >
                  <span className="text-xs text-turkuaz opacity-50 group-hover:opacity-100">◆</span>
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
