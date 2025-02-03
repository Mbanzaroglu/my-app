"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Hakkimda() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 relative overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
                style={{ transform: "scale(1.05)" }}
              />
              <Image
                src="/me.JPG"
                alt="Profil Fotoğrafı"
                layout="fill"
                objectFit="cover"
                className="rounded-xl relative z-10 border-4 border-white/10"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Hakkımda
              </h1>
              <p className="text-gray-300 mb-6">
                Merhaba! Ben Muhammet Banzaroğlu, yazılım geliştirme konusunda tutkulu bir profesyonelim. Modern web
                teknolojileri ve kullanıcı deneyimi tasarımı konularında uzmanlaşmış durumdayım.
              </p>
              <p className="text-gray-300 mb-6">
                Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Yeni teknolojileri keşfetmeyi ve bunları
                projelerimde kullanmayı seviyorum.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
                <a
                  href="mailto:your@email.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Mail size={20} />
                  <span>E-posta</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Yeteneklerim
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker", "Git", "AWS"].map(
                (skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                  >
                    {skill}
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

