"use client"

import { motion } from "framer-motion"
import { Camera, Dumbbell, Book, Globe, Gamepad } from "lucide-react"
import { FaSwimmer, FaFistRaised } from "react-icons/fa"
import Image from "next/image"
import { useLocale } from "@/contexts/LocaleContext"
import SectionHeader from "../components/SectionHeader"
import { IconType } from "react-icons"
import { LucideIcon } from "lucide-react"

type IconComponent = LucideIcon | IconType

interface Hobby {
  key: string
  icon: IconComponent
  image: string
  symbol: string
}

export default function Hobiler() {
  const { t } = useLocale()

  const hobbies: Hobby[] = [
    { key: "photography", icon: Camera, image: "/Fotoğrafçılık.webp", symbol: "◆" },
    { key: "fitness", icon: Dumbbell, image: "/Gym.webp", symbol: "◇" },
    { key: "kickboxing", icon: FaFistRaised, image: "/Kick-boks.webp", symbol: "✦" },
    { key: "reading", icon: Book, image: "/Kitap.webp", symbol: "❋" },
    { key: "swimming", icon: FaSwimmer, image: "/Swimming.webp", symbol: "✧" },
    { key: "traveling", icon: Globe, image: "/Traveling.webp", symbol: "◈" },
    { key: "videogames", icon: Gamepad, image: "/Video-Games.webp", symbol: "❖" },
  ]

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      {/* Arka plan deseni */}
      <div className="fixed inset-0 geometric-pattern-bg opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader number="01" title={t("hobbies.hobbies")} ornament="✧" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative overflow-hidden border border-[var(--border-light)] hover:border-altin/30 transition-all duration-500 hover-lift"
            >
              {/* Görsel */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={t(`hobbies.${hobby.key}.title`)}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gece/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* İçerik */}
              <div className="relative p-6">
                {/* Köşe süslemesi */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 30 30">
                    <path d="M0,0 L30,0 L30,30" fill="none" stroke="#c9a227" strokeWidth="0.5" opacity="0.5"/>
                  </svg>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  {/* İkon */}
                  <div className="w-12 h-12 flex items-center justify-center border border-turkuaz/30 dark:border-altin/30 group-hover:border-altin/50 transition-colors">
                    <hobby.icon className="w-5 h-5 text-turkuaz dark:text-altin" />
                  </div>
                  
                  {/* Başlık */}
                  <div>
                    <span className="text-altin text-xs mr-2">{hobby.symbol}</span>
                    <h3 className="inline text-lg font-display font-normal tracking-wide group-hover:text-bordo dark:group-hover:text-altin transition-colors">
                      {t(`hobbies.${hobby.key}.title`)}
                    </h3>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-body">
                  {t(`hobbies.${hobby.key}.description`)}
                </p>
              </div>

              {/* Animasyonlu alt çizgi */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-turkuaz via-altin to-bordo transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
