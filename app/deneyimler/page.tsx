"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import GradientHeading from "../components/GradientHeading"

export default function Deneyimler() {
  const experiences = [
    {
      title: "Full Stack Yazılım Geliştirici",
      company: "Ziraat Teknoloji",
      period: "2024 Eylül - Günümüz",
      description: "Bankaya web tabanlı uygulamalar geliştirme ve bakım.",
      technologies: ["React", "Node.js", ".NET", "Git", "MySQL", "Intellij IDE", "Visual Studio Code"],
    },
    {
        title: "Yönetim Kurulu Üyesi - Otomasyon Yöneticisi",
        company: "itüöder (İTÜ Öğrencileri Derneği)",
        period: "2024 Mart - Günümüz",
        description: "İTÜ öğrencileri ve mezunları için sosyal, kültürel, psikolojik ve mesleki alanlarda hizmetler sunan derneğin yönetim kurulu üyeliği ve kullanılan sistemlerin otomasyon süreçlerinin yönetimi, yapay zeka modeli eğitimi.",
        technologies: ["AppScript", "Google Sheets", "Python", "Ekip Yönetimi", "İnsan Etkileşimi", "Kurumsal İletişim", "Canva", "GPT Model Eğitimi"],
      },
    {
      title: "ABAP Geliştirme Stajyeri",
      company: "NTT Data Bussines Solutions",
      period: "2024 Temmuz - 2024 Eylül",
      description: "SAP sistemler için ABAP programlama dili ile geliştirme ve algoritma dizaynı.",
      technologies: ["ABAP", "Open SQL", "Notion", "Jira", "SAP"],
    },
    {
        title: "Yazılım Stajyeri",
        company: "Senktron Software",
        period: "2023 Ocak - 2023 Mart",
        description: "Stajyer projesi kapsamında canlı açık artırma sitesinin Full Stack tasarımı ve implementasyonu.",
        technologies: ["Angular", "PostgreSQL", "Python", "Notion", "Vscode"],
      },
      {
        title: "Yazılım Stajyeri",
        company: "Garanti Technology",
        period: "2021 Haziran - 2021 Eylül",
        description: "Veri tabanı ve web tabanlı uygulamaların takibi ve süreç iyileştirmesi. Dokümantasyon hazırlama ve test süreçlerine katılım.",
        technologies: ["SQL", "Microsoft Excel", "Jenkins", "Vscode"],
      },
      {
        title: "İnsan Kaynakları Asistanı",
        company: "Öğrenci Kariyeri",
        period: "2020 Eylül - 2021 Haziran",
        description: "YEA mezunları olarak markanın işe alım süreçlerine dair eğitim ve sonrasında mülakat yürütme sürecinde aktif görev alma.",
        technologies: ["Microsoft Teams", "Microsoft Power Point", "Notion", "Google Sheets"],
      },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <GradientHeading className="text-3xl md:text-4xl font-bold mb-4 text-left">
          Deneyimler
        </GradientHeading>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
                {exp.technologies.map((tech) => (
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
