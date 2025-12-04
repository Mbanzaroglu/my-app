"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import { useLocale } from "@/contexts/LocaleContext"
import SectionHeader from "../components/SectionHeader"

// Selçuklu Yıldızı Dekorasyon
const SeljukStar = ({ size = 200, opacity = 0.05 }: { size?: number; opacity?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100"
    style={{ opacity }}
    className="text-altin"
  >
    <polygon 
      points="50,5 61,35 95,35 68,57 79,90 50,70 21,90 32,57 5,35 39,35" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
    />
    <polygon 
      points="50,20 56,40 78,40 60,52 67,73 50,60 33,73 40,52 22,40 44,40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
    />
  </svg>
)

export default function Iletisim() {
  const { t, locale } = useLocale()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_my-app",
      "template_51ts5xa",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      "MwugMpf0gCBPr8Pqo"
    ).then(
      () => {
        setFormData({ name: "", email: "", message: "" })
        setStatus("success")
      },
      () => {
        setStatus("error")
      }
    ).finally(() => {
      setLoading(false)
    })
  }

  const contactInfo = [
    { 
      icon: Mail, 
      label: t("contact.email"), 
      value: t("contact.email_address"),
      symbol: "◆"
    },
    { 
      icon: Phone, 
      label: t("contact.phone"), 
      value: t("contact.phone_number"),
      symbol: "◇"
    },
    { 
      icon: MapPin, 
      label: t("contact.location"), 
      value: t("contact.location_address"),
      symbol: "✦"
    },
  ]

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      {/* Arka plan deseni */}
      <div className="fixed inset-0 geometric-pattern-bg opacity-50 pointer-events-none" />
      
      {/* Dekoratif yıldız */}
      <div className="absolute right-10 top-40 pointer-events-none hidden lg:block">
        <SeljukStar size={300} opacity={0.03} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader number="01" title={t("contact.contact")} ornament="❋" />
          
          {/* Alt başlık */}
          <p className="text-[var(--text-muted)] text-lg font-body italic mb-12">
            {locale === "tr" ? "Yeni projelere her zaman açığım" : "I'm always open to new projects"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl font-display font-normal tracking-wide mb-8">
              {t("contact.contact_info")}
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 border border-[var(--border-light)] hover:border-altin/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-turkuaz/30 dark:border-altin/30 group-hover:border-altin/50 transition-colors">
                    <info.icon className="w-5 h-5 text-turkuaz dark:text-altin" />
                  </div>
                  <div>
                    <p className="text-xs font-sans tracking-wide text-[var(--text-muted)] mb-1">
                      <span className="text-altin mr-2">{info.symbol}</span>
                      {info.label}
                    </p>
                    <p className="font-body">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email CTA */}
            <motion.a
              href={`mailto:${t("contact.email_address")}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="group inline-flex items-center gap-3 mt-8 py-3 border-b border-altin/30 hover:border-altin transition-colors"
            >
              <span className="text-altin">✉</span>
              <span className="font-sans tracking-wide">{t("contact.email_address")}</span>
              <span className="text-altin group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* İsim */}
              <div>
                <label htmlFor="name" className="block text-sm font-sans tracking-wide text-[var(--text-muted)] mb-2">
                  <span className="text-turkuaz dark:text-altin mr-2">◆</span>
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-[var(--border-light)] focus:border-altin outline-none transition-colors font-body"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-sans tracking-wide text-[var(--text-muted)] mb-2">
                  <span className="text-turkuaz dark:text-altin mr-2">◇</span>
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-[var(--border-light)] focus:border-altin outline-none transition-colors font-body"
                  required
                />
              </div>

              {/* Mesaj */}
              <div>
                <label htmlFor="message" className="block text-sm font-sans tracking-wide text-[var(--text-muted)] mb-2">
                  <span className="text-turkuaz dark:text-altin mr-2">✦</span>
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-[var(--border-light)] focus:border-altin outline-none transition-colors font-body resize-none"
                  required
                />
              </div>

              {/* Gönder Butonu */}
              <button
                type="submit"
                disabled={loading}
                className="group w-full px-6 py-4 border border-bordo hover:bg-bordo text-bordo hover:text-white dark:border-altin dark:text-altin dark:hover:bg-altin dark:hover:text-gece transition-all duration-300 flex items-center justify-center gap-3 font-sans tracking-wide disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                )}
                {t("contact.send")}
              </button>
            </form>

            {/* Durum Mesajı */}
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-6 p-4 border flex items-center gap-3 ${
                    status === "success"
                      ? "border-turkuaz/30 text-turkuaz bg-turkuaz/5"
                      : "border-bordo/30 text-bordo bg-bordo/5"
                  }`}
                >
                  {status === "success" ? <CheckCircle size={18} /> : <XCircle size={18} />}
                  <span className="text-sm font-sans">
                    {status === "success" ? t("contact.success_message") : t("contact.error_message")}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
