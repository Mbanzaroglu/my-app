"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"
import SectionHeader from "../components/SectionHeader"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export default function Deneyimler() {
  const { t } = useLocale()
  const experiences = t("experiences.experience_list") as unknown as Experience[]

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      {/* Arka plan deseni */}
      <div className="fixed inset-0 geometric-pattern-bg opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader number="01" title={t("experiences.experiences")} ornament="✦" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Timeline çizgisi */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-altin via-turkuaz to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline noktası */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 flex items-center justify-center">
                  <span className="text-altin text-lg">◈</span>
                </div>

                {/* Deneyim Kartı */}
                <div className="group p-6 border border-[var(--border-light)] hover:border-altin/30 transition-all duration-500 hover-lift relative overflow-hidden">
                  {/* Hover arka planı */}
                  <div className="absolute inset-0 bg-gradient-to-br from-altin/5 to-turkuaz/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Köşe süslemeleri */}
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 30 30">
                      <path d="M0,0 L30,0 L30,30" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 30 30">
                      <path d="M0,30 L0,0 L30,0" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                    </svg>
                  </div>

                  <div className="relative z-10">
                    {/* Başlık ve Tarih */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-display font-normal tracking-wide group-hover:text-bordo dark:group-hover:text-altin transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[var(--text-muted)] mt-1">
                          <Briefcase size={14} className="text-turkuaz" />
                          <span className="text-sm font-sans">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <Calendar size={14} className="text-altin" />
                        <span className="text-xs font-sans tracking-wide">{exp.period}</span>
                      </div>
                    </div>

                    {/* Açıklama */}
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 font-body">
                      {exp.description}
                    </p>

                    {/* Teknolojiler */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            delayChildren: 0.3 + index * 0.1,
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                          }}
                          className="px-3 py-1 text-xs font-sans tracking-wide border border-turkuaz/20 text-turkuaz dark:border-altin/20 dark:text-altin/80 group-hover:border-altin/40 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
