"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function Egitim() {
  const education = [
    {
      degree: "Bilgisayar Mühendisliği",
      school: "Örnek Üniversitesi",
      period: "2016 - 2020",
      description: "Yazılım geliştirme, algoritma analizi ve veri yapıları üzerine yoğunlaştım.",
      achievements: ["Yüksek Onur Öğrencisi", "Bölüm Birinciliği"],
    },
    {
      degree: "Veri Bilimi Sertifikası",
      school: "Online Akademi",
      period: "2021",
      description: "Makine öğrenimi ve veri analizi üzerine kapsamlı eğitim.",
      achievements: ["En İyi Proje Ödülü"],
    },
    // Diğer eğitimler buraya eklenebilir
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Eğitim
        </motion.h1>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white">{edu.degree}</h2>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{edu.school}</p>
                  <p className="text-gray-400 mt-4">{edu.description}</p>

                  {edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        <Award size={16} />
                        Başarılar
                      </h3>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

