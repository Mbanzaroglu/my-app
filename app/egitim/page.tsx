"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"
import SectionHeader from "../components/SectionHeader"

interface Education {
  degree: string
  school: string
  period: string
  description: string
  achievements: string[]
}

export default function Egitim() {
  const { t } = useLocale()
  const degrees = t("education.degrees") as unknown as Education[]

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
          <SectionHeader number="01" title={t("education.education")} ornament="❋" />
        </motion.div>

        <div className="space-y-8 mt-12">
          {degrees.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative"
            >
              {/* Eğitim Kartı */}
              <div className="p-8 border border-[var(--border-light)] hover:border-altin/30 transition-all duration-500 hover-lift relative overflow-hidden">
                {/* Hover arka planı */}
                <div className="absolute inset-0 bg-gradient-to-br from-turkuaz/5 to-altin/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Köşe süslemeleri */}
                <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 40 40">
                    <path d="M0,0 L40,0 L40,40" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 40 40">
                    <path d="M0,40 L0,0 L40,0" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  {/* İkon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center border border-turkuaz/30 dark:border-altin/30 group-hover:border-altin/50 transition-colors">
                      <GraduationCap className="w-8 h-8 text-turkuaz dark:text-altin" />
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-normal tracking-wide group-hover:text-bordo dark:group-hover:text-altin transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-turkuaz dark:text-altin/80 text-sm font-sans mt-1">
                          {edu.school}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <Calendar size={14} className="text-altin" />
                        <span className="text-xs font-sans tracking-wide">{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6 font-body">
                      {edu.description}
                    </p>

                    {/* Başarılar */}
                    {edu.achievements.length > 0 && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              delayChildren: 0.4 + index * 0.2,
                              staggerChildren: 0.1
                            }
                          }
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Award size={16} className="text-altin" />
                          <h4 className="text-sm font-sans tracking-wide text-[var(--text-muted)]">
                            {t("education.achievements")}
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 }
                              }}
                              className="flex items-center gap-3"
                            >
                              <span className="text-altin text-xs">✦</span>
                              <span className="text-sm text-[var(--text-secondary)]">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* İTÜ Tribute - Sadece ilk eğitim için */}
              {index === 0 && (
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:block opacity-10">
                  <svg viewBox="0 0 100 100" className="w-40 h-40 text-turkuaz dark:text-altin">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    <text x="50" y="55" textAnchor="middle" fontSize="14" fill="currentColor" fontFamily="serif">İTÜ</text>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
