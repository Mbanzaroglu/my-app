"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import GradientHeading from "../components/GradientHeading"
import emailjs from "emailjs-com"
import { useLocale } from "@/contexts/LocaleContext"

export default function Iletisim() {
  const { t } = useLocale() // Çeviri için LocaleContext kullanımı

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs.send(
      "service_my-app", // EmailJS servis ID
      "template_51ts5xa", // EmailJS şablon ID
      formData,
      "MwugMpf0gCBPr8Pqo" // EmailJS kullanıcı ID
    ).then(
      (result) => {
        console.log(result.text)
        setFormData({ name: "", email: "", message: "" })
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <GradientHeading className="text-3xl md:text-4xl font-bold mb-4 text-left">
          {t("contact.contact")}
        </GradientHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* İletişim Bilgileri */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl font-semibold mb-6">{t("contact.contact_info")}</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t("contact.email")}</p>
                  <p className="text-white">{t("contact.email_address")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t("contact.phone")}</p>
                  <p className="text-white">{t("contact.phone_number")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t("contact.location")}</p>
                  <p className="text-white">{t("contact.location_address")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={20} />
                {t("contact.send")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
