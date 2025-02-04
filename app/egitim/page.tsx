"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"
import GradientHeading from "../components/GradientHeading"

export default function Egitim() {
    const education = [
        {
            degree: "Bilgisayar Mühendisliği",
            school: "İstanbul Teknik Üniversitesi",
            period: "2020 - 2025",
            description: "Yazılım geliştirme, algoritma analizi ve veri yapıları üzerine yoğunlaştım. Bilgisayar organizasyonu ve Mikroişlemciler alanındaki derslerde üstün başarı gösterdim.",
            achievements: ["Onur Öğrencisi [3.01 GPA]"],
        },
        {
            degree: "Değişim Öğrencisi",
            school: "West Attica Üniversitesi - Yunanistan",
            period: "2023 Ocak - 2023 Temmuz",
            description: "35 AKTS kredilik dönemde, Yunan kültürü ve dilini öğrenme fırsatı buldum. Aynı zamanda 10'dan fazla ülkeyi uluslararası öğrenci topluluğu ile ziyaret ettim.",
            achievements: ["En İyi Kısa Film Ödülü"],
        },
    ]

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <GradientHeading className="text-3xl md:text-4xl font-bold mb-4 text-left">
                    Eğitim
                </GradientHeading>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, type: "spring", stiffness: 80, damping: 10 }}
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                        >
                            {/* Eğitim Kartı */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-600/10">
                                    <GraduationCap className="w-6 h-6 text-blue-500" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-white">{edu.degree}</h2>
                                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                                        <Calendar size={16} />
                                        <span>{edu.period}</span>
                                    </div>
                                    <p className="text-gray-400 mt-2">{edu.school}</p>
                                    <p className="text-gray-300 mt-4">{edu.description}</p>

                                    {/* Başarılar - Animasyonlu Liste */}
                                    {edu.achievements.length > 0 && (
                                        <motion.div
                                            className="mt-4"
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        delayChildren: 0.6 + index * 0.3, // Eğitim kartı açıldıktan sonra başlar
                                                        staggerChildren: 0.4, // Başarılar sırayla belirir
                                                    },
                                                },
                                            }}
                                        >
                                            <h3 className="text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                                                <Award size={16} />
                                                Başarılar
                                            </h3>
                                            <motion.ul className="list-disc list-inside text-gray-300 space-y-1">
                                                {edu.achievements.map((achievement, i) => (
                                                    <motion.li
                                                        key={i}
                                                        variants={{
                                                            hidden: { opacity: 0, y: 10 },
                                                            visible: { opacity: 1, y: 0 },
                                                        }}
                                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                                    >
                                                        {achievement}
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        </motion.div>
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
