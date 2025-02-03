"use client"

import { motion } from "framer-motion"
import { Camera, Dumbbell, Book, Globe, Gamepad } from "lucide-react";
import { FaSwimmer, FaFistRaised } from "react-icons/fa"; // FontAwesome kullanımı
import Image from "next/image"
import GradientHeading from "../components/GradientHeading"

export default function Hobiler() {
    const hobbies = [
        {
          title: "Fotoğrafçılık",
          icon: Camera,
          description: "Sokak ve Portre Fotoğrafçılığı yaparak hikaye anlatıcılığı yapıyorum",
          image: "/Fotoğrafçılık.webp",
        },
        {
          title: "Fitness & Gym",
          icon: Dumbbell,
          description: "2+ yıldır düzenli olarak orta tempo vücut geliştirme yapıyorum.",
          image: "/Gym.webp",
        },
        {
          title: "Kick Boks",
          icon: FaFistRaised,
          description: "2 yıllık orta-segment kick boks eğitimi aldım. Öğrenci kulüplerinde eğitmenlik yaptım.",
          image: "/Kick-boks.webp",
        },
        {
          title: "Kitap Okuma",
          icon: Book,
          description: "Teknik, Türk Romanı ve Deneme türlerindeki kitapları okurum.",
          image: "/Kitap.webp",
        },
        {
          title: "Yüzme",
          icon: FaSwimmer,
          description: "Belirli periyotlarda bir kardiyo olarak serbest stil yüzüyorum.",
          image: "/Swimming.webp",
        },
        {
          title: "Seyahat",
          icon: Globe,
          description: "Yeni yerleri farklı gruptan insanlarla, bazen tek başıma keşfederim ve eşsiz spotları bulmaya çalışırım.",
          image: "/Traveling.webp",
        },
        {
          title: "Video Oyunları",
          icon: Gamepad,
          description: "AOE2, CS:GO, LOL, L4D2 gibi hem fps hem de strateji oyunlarını vakit buldukça arkadaşlarımla beraber oynarım.",
          image: "/Video-Games.webp",
        },
      ]
      

  return (
<div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800">
    <div className="max-w-4xl mx-auto px-4 py-12">
        <GradientHeading className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Hobiler
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
                  alt={hobby.title}
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
                  <h2 className="text-xl font-semibold text-white">{hobby.title}</h2>
                </div>
                <p className="text-gray-300">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

