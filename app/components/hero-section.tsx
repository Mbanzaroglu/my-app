"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const navigationItems = [
    { title: "Hakkımda", href: "/hakkimda", color: "from-blue-700 to-blue-800" },
    { title: "Deneyimlerim", href: "/deneyimler", color: "from-emerald-700 to-emerald-800" },
    { title: "Eğitimim", href: "/egitim", color: "from-orange-700 to-orange-800" },
    { title: "Hobilerim", href: "/hobiler", color: "from-purple-700 to-purple-800" },
  ]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(15,23,42,0))]" />
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(99,102,241,0.15), transparent 25%)`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Profile section */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative w-40 h-40 mx-auto mb-8">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ transform: "scale(1.05)" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/me.JPG"
                alt="Profil Fotoğrafı"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Hoş Geldiniz!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            {"Merhaba, ben Muhammet Banzaroğlu. Bu web sitesinde kendimden ve tecrübelerimden bahsediyor olacağım..".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.01 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Navigation grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`group relative overflow-hidden block w-full p-4 rounded-xl bg-gradient-to-r ${item.color} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{item.title}</span>
                  <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          {[
            { href: "https://github.com/Mbanzaroglu", icon: <Github size={28} /> },
            { href: "https://www.linkedin.com/in/muhammet-banzaroglu/", icon: <Linkedin size={28} /> },
            { href: "https://www.instagram.com/muhammetbanzaroglu/", icon: <Instagram size={28} /> },
          ].map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200, damping: 10 }}
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
