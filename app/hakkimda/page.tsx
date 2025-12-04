"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, Instagram, Code, Wrench, FileText, Users } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/contexts/LocaleContext"
import SectionHeader from "../components/SectionHeader"

// Desteklenen yetenek kategorileri
type SkillCategory = "software" | "technologies" | "documentation" | "social"

// Kategori bilgileri
const categoryInfo: Record<SkillCategory, { symbol: string; icon: React.ElementType; color: string }> = {
  software: { symbol: "◆", icon: Code, color: "turkuaz" },
  technologies: { symbol: "◇", icon: Wrench, color: "altin" },
  documentation: { symbol: "✦", icon: FileText, color: "bordo" },
  social: { symbol: "❋", icon: Users, color: "turkuaz" }
}

const iconMap = {
  Github: <Github size={18} />,
  LinkedIn: <Linkedin size={18} />,
  Instagram: <Instagram size={18} />,
  Email: <Mail size={18} />
} as const

interface SocialLink {
  label: string
  href: string
  icon: keyof typeof iconMap
}

export default function Hakkimda() {
  const { t, locale } = useLocale()
  const links = t("about-me.links") as unknown as Record<string, SocialLink>
  const [activeTab, setActiveTab] = useState<SkillCategory>("software")
  const skills = t("about-me.skills_list") as unknown as Record<SkillCategory, string[]>

  const categories = Object.keys(skills) as SkillCategory[]

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      {/* Arka plan deseni */}
      <div className="fixed inset-0 geometric-pattern-bg opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profil ve Hakkımda Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader number="01" title={t("about-me.about")} ornament="◇" />

          <div className="flex flex-col lg:flex-row items-start gap-12 mt-8">
            {/* Profil Fotoğrafı */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-56 h-56 lg:w-72 lg:h-72">
                {/* Dekoratif çerçeve */}
                <div className="absolute -inset-3 border border-altin/30" />
                <div className="absolute -inset-1.5 border border-turkuaz/20" />
                
                {/* Köşe süslemeleri */}
                <svg className="absolute -top-4 -left-4 w-8 h-8 text-altin" viewBox="0 0 30 30">
                  <path d="M0,30 L0,0 L30,0" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <svg className="absolute -bottom-4 -right-4 w-8 h-8 text-altin" viewBox="0 0 30 30">
                  <path d="M30,0 L30,30 L0,30" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>

                {/* Fotoğraf */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/me6.jpeg"
                    alt={t("about-me.profile_image_alt")}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Hakkımda Metni */}
            <div className="flex-1">
              <motion.p
                className="text-[var(--text-secondary)] text-base leading-relaxed mb-6 font-body"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t("about-me.introduction")}
              </motion.p>

              <motion.p
                className="text-[var(--text-secondary)] text-base leading-relaxed mb-8 font-body"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("about-me.ituoder.before")}
                <Link 
                  href={t("about-me.ituoder.href")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-turkuaz dark:text-altin hover:underline link-underline"
                >
                  {t("about-me.ituoder.link_text")}
                </Link>
                {t("about-me.ituoder.after")}
              </motion.p>

              {/* Sosyal Linkler */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {Object.entries(links).map(([key, link]) => (
                  <a
                    key={key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 border border-[var(--border-light)] hover:border-altin/50 transition-all duration-300 hover-lift"
                  >
                    <span className="text-turkuaz dark:text-altin text-xs group-hover:rotate-45 transition-transform">◆</span>
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                      {iconMap[link.icon] ?? null}
                    </span>
                    <span className="text-sm font-sans tracking-wide">{link.label}</span>
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════
            YENİ YETENEKLER BÖLÜMÜ - KART TABLI LAYOUT
            ═══════════════════════════════════════════════════════════ */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SectionHeader number="02" title={t("about-me.skills")} ornament="✦" />

          {/* Kategori Kartları - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, categoryIndex) => {
              const info = categoryInfo[category]
              const Icon = info.icon
              const isActive = activeTab === category
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                  onClick={() => setActiveTab(category)}
                  className={`group relative p-6 border cursor-pointer transition-all duration-500 hover-lift overflow-hidden ${
                    isActive 
                      ? "border-altin/50 bg-gradient-to-br from-altin/5 to-turkuaz/5" 
                      : "border-[var(--border-light)] hover:border-altin/30"
                  }`}
                >
                  {/* Köşe Süslemeleri */}
                  <div className={`absolute top-0 right-0 w-8 h-8 transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    <svg viewBox="0 0 30 30">
                      <path d="M0,0 L30,0 L30,30" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                    </svg>
                  </div>
                  <div className={`absolute bottom-0 left-0 w-8 h-8 transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    <svg viewBox="0 0 30 30">
                      <path d="M0,30 L0,0 L30,0" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                    </svg>
                  </div>

                  {/* Başlık */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center border transition-colors ${
                      isActive 
                        ? "border-altin bg-altin/10" 
                        : "border-turkuaz/30 dark:border-altin/30 group-hover:border-altin/50"
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? "text-altin" : "text-turkuaz dark:text-altin"}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${isActive ? "text-altin" : "text-turkuaz dark:text-altin"}`}>
                          {info.symbol}
                        </span>
                        <h3 className={`text-lg font-display font-normal tracking-wide transition-colors ${
                          isActive ? "text-bordo dark:text-altin" : "group-hover:text-bordo dark:group-hover:text-altin"
                        }`}>
                          {t(`about-me.${category}`)}
                        </h3>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] font-sans mt-1">
                        {skills[category].length} {locale === "tr" ? "yetenek" : "skills"}
                      </p>
                    </div>
                  </div>

                  {/* Yetenekler Listesi */}
                  <div className="flex flex-wrap gap-2">
                    {skills[category].slice(0, isActive ? undefined : 6).map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={isActive ? { opacity: 0, scale: 0.8 } : false}
                        animate={isActive ? { opacity: 1, scale: 1 } : false}
                        transition={{ delay: index * 0.03 }}
                        className={`px-3 py-1.5 text-xs font-sans tracking-wide border transition-all ${
                          isActive 
                            ? "border-altin/30 bg-altin/5 text-[var(--text-primary)]" 
                            : "border-[var(--border-light)] text-[var(--text-muted)]"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                    
                    {/* Daha fazla göster */}
                    {!isActive && skills[category].length > 6 && (
                      <span className="px-3 py-1.5 text-xs font-sans tracking-wide text-turkuaz dark:text-altin">
                        +{skills[category].length - 6}
                      </span>
                    )}
                  </div>

                  {/* Aktif Göstergesi */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-turkuaz via-altin to-bordo"
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
