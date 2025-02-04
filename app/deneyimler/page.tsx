"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import GradientHeading from "../components/GradientHeading"
import { useLocale } from "@/contexts/LocaleContext"

export default function Deneyimler() {
  const { t } = useLocale() // JSON'dan çeviri verilerini alıyoruz

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <GradientHeading className="text-3xl md:text-4xl font-bold mb-4 text-left">
          {t("experiences.experiences")}
        </GradientHeading>

        <div className="space-y-8">
          {t("experiences.experience_list").map((exp, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.4, type: "spring", stiffness: 80, damping: 10 }}
              className="relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              {/* Deneyim Kartı */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="mt-4 text-gray-300">{exp.description}</p>
                </div>
              </div>

              {/* Teknolojiler - Dalga Animasyonu ile */}
              <motion.div 
                className="mt-4 flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delayChildren: 0.6 + index * 0.3, // Deneyim kartı animasyonundan sonra başlar
                      staggerChildren: 0.1, // Teknolojiler sırayla gelir
                    }
                  }
                }}
              >
                {exp.technologies.map((tech: string) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 10 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 8 }}
                    className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
