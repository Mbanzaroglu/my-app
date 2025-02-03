"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export default function Deneyimler() {
  const experiences = [
    {
      title: "Kıdemli Yazılım Geliştirici",
      company: "Tech Company",
      period: "2021 - Günümüz",
      description: "Modern web uygulamaları geliştirme, teknik liderlik ve mentorluk.",
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "Yazılım Geliştirici",
      company: "Software Inc.",
      period: "2019 - 2021",
      description: "Full-stack web uygulamaları geliştirme ve API tasarımı.",
      technologies: ["React", "Express.js", "PostgreSQL"],
    },
    // Diğer deneyimler buraya eklenebilir
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Deneyimler
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
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
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

