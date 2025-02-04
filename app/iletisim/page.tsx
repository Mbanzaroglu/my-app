"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import GradientHeading from "../components/GradientHeading"
import emailjs from "emailjs-com"
import { useLocale } from "@/contexts/LocaleContext"

export default function Iletisim() {
  const { t } = useLocale()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000) // 3 saniye sonra mesaj kaybolur
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
              <ContactInfo icon={Mail} label={t("contact.email")} value={t("contact.email_address")} />
              <ContactInfo icon={Phone} label={t("contact.phone")} value={t("contact.phone_number")} />
              <ContactInfo icon={MapPin} label={t("contact.location")} value={t("contact.location_address")} />
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextInput label={t("contact.name")} id="name" value={formData.name} onChange={(val) => setFormData({ ...formData, name: val })} />
              <TextInput label={t("contact.email")} id="email" type="email" value={formData.email} onChange={(val) => setFormData({ ...formData, email: val })} />
              <TextArea label={t("contact.message")} id="message" value={formData.message} onChange={(val) => setFormData({ ...formData, message: val })} />

              <button
                type="submit"
                className="relative w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send size={20} />}
                {t("contact.send")}
              </button>
            </form>

            {/* Başarı veya Hata Mesajı */}
            {/* Başarı veya Hata Mesajı */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 p-3 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg ${
                      status === "success"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {status === "success" ? <CheckCircle size={18} /> : <XCircle size={18} />}
                    {status === "success" ? t("contact.success_message") : t("contact.error_message")}
                  </motion.div>
                )}
              </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// ✅ **Bileşenler: Daha Temiz Kod İçin Yardımcı Fonksiyonlar**
function ContactInfo({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-blue-500/10">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  )
}

function TextInput({ label, id, value, onChange, type = "text" }: { label: string; id: string; value: string; onChange: (val: string) => void; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
        required
      />
    </div>
  )
}

function TextArea({ label, id, value, onChange }: { label: string; id: string; value: string; onChange: (val: string) => void }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
        required
      />
    </div>
  )
}
