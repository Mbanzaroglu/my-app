"use client"

import { motion } from "framer-motion"
import { Camera, Dumbbell, Book, Globe, Gamepad } from "lucide-react"
import { FaSwimmer, FaFistRaised } from "react-icons/fa" // FontAwesome kullanımı
import Image from "next/image"
import GradientHeading from "../components/GradientHeading"
import { useLocale } from "@/contexts/LocaleContext" // Locale Context

export default function Hobiler() {
  const { t } = useLocale() // Dil değişkenlerini çekiyoruz

  const hobbies = [
    {
      key: "photography",
      icon: Camera,
      image: "/Fotoğrafçılık.webp",
    },
    {
      key: "fitness",
      icon: Dumbbell,
      image: "/Gym.webp",
    },
    {
      key: "kickboxing",
      icon: FaFistRaised,
      image: "/Kick-boks.webp",
    },
    {
      key: "reading",
      icon: Book,
      image: "/Kitap.webp",
    },
    {
      key: "swimming",
      icon: FaSwimmer,
      image: "/Swimming.webp",
    },
    {
      key: "traveling",
      icon: Globe,
      image: "/Traveling.webp",
    },
    {
      key: "videogames",
      icon: Gamepad,
      image: "/Video-Games.webp",
    },
  ]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <GradientHeading className="text-3xl md:text-4xl font-bold mb-4 text-left">
          {t("hobbies.hobbies")}
        </GradientHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={hobby.image || "/placeholder.svg"}
                  alt={t(`hobbies.${hobby.key}.title`)}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <hobby.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {t(`hobbies.${hobby.key}.title`)}
                  </h2>
                </div>
                <p className="text-gray-300">{t(`hobbies.${hobby.key}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
