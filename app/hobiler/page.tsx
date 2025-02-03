"use client"

import { motion } from "framer-motion"
import { Camera, Music, Book, Gamepad } from "lucide-react"
import Image from "next/image"

export default function Hobiler() {
  const hobbies = [
    {
      title: "Fotoğrafçılık",
      icon: Camera,
      description: "Doğa ve sokak fotoğrafçılığı ile ilgileniyorum.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Müzik",
      icon: Music,
      description: "Gitar çalıyorum ve müzik prodüksiyonu yapıyorum.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Okuma",
      icon: Book,
      description: "Bilim kurgu ve teknik kitaplar okumayı seviyorum.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Oyunlar",
      icon: Gamepad,
      description: "Strateji ve RPG oyunları oynamaktan keyif alıyorum.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Hobilerim
        </motion.h1>

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

