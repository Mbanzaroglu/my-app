"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import GradientHeading from "../components/GradientHeading"
import Link from "next/link"
import { useLocale } from "@/contexts/LocaleContext"

export default function Hakkimda() {
    const { t } = useLocale() // JSON'dan çevirileri çekiyoruz

    type SkillCategory = "software" | "technologies" | "documentation" | "social"
    const [activeTab, setActiveTab] = useState<SkillCategory>("software")

    const skills = t("about-me.skills_list")

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="self-start mt-2"
                >
                    {/* Profil ve Hakkımda Alanı */}
                    <div className="flex flex-col md:flex-row items-start md:items-start gap-8 mt-12">
                        {/* Profile section */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 mt-8 ml-4"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-8">
                                <motion.div
                                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500"
                                    style={{ transform: "scale(1.05)" }}
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                />
                                <motion.div
                                    className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white/10"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Image
                                        src="/me.JPG"
                                        alt={t("about-me.profile_image_alt")}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="flex-1 mt-2">
                            <GradientHeading className="text-3xl md:text-4xl font-bold mb-4 text-left">
                                {t("about-me.about")}
                            </GradientHeading>

                            <motion.p
                                className="text-gray-300 mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {t("about-me.introduction")}
                            </motion.p>

                            <motion.p
                                className="text-gray-300 mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {t("about-me.ituoder.before")}
                                <Link href={t("about-me.ituoder.href")} className="text-blue-600 dark:text-blue-400 hover:underline">
                                    {t("about-me.ituoder.link_text")}
                                </Link>
                                {t("about-me.ituoder.after")}
                            </motion.p>

                            {/* Sosyal Linkler */}
                            <div className="flex flex-wrap gap-4">
                                {Object.entries(t("about-me.links")).map(([key, link], index) => (
                                    <motion.a
                                        key={key}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                    >
                                        {link.icon === "Github" && <Github size={20} />}
                                        {link.icon === "LinkedIn" && <Linkedin size={20} />}
                                        {link.icon === "Instagram" && <Twitter size={20} />}
                                        {link.icon === "Email" && <Mail size={20} />}
                                        <span>{link.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Yetenekler Bölümü */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            {t("about-me.skills")}
                        </h2>

                        {/* Sekmeler */}
                        <div className="border-b border-gray-700 pb-4 mb-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-2">
                                {Object.keys(skills).map((tab) => (
                                    <motion.button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as SkillCategory)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                        className={`relative py-2 text-lg font-semibold transition-all duration-100 ${
                                            activeTab === tab
                                                ? "text-white font-bold after:w-full after:h-[3px] after:bg-gradient-to-r from-blue-400 to-blue-600 after:absolute after:left-0 after:bottom-[-6px]"
                                                : "text-gray-400 hover:text-gray-200"
                                        }`}
                                    >
                                        {t(`about-me.${tab}`)}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Seçilen Sekmeye Göre Yetenekler */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        >
                            {skills[activeTab].map((skill: string, index: number) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                    className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
