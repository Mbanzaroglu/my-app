"use client"

import { createContext, useContext, useState, useEffect } from "react"
import tr from "@/locales/tr.json"
import en from "@/locales/en.json"

const LocaleContext = createContext<{ locale: string; setLocale: (locale: string) => void; t: (key: string) => string } | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("tr") // Varsayılan Türkçe

  // Kullanıcının seçtiği dili `localStorage`'dan al ve state'e aktar
  useEffect(() => {
    const storedLocale = localStorage.getItem("locale")
    if (storedLocale && storedLocale !== locale) {
      setLocale(storedLocale)
    }
  }, [])

  // Kullanıcının seçtiği dili `localStorage`'a kaydet
  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  // Çeviri nesnesini belirle
  const translations = locale === "tr" ? tr : en

  // `t(key)` fonksiyonunu geliştirerek iç içe çeviri desteği ekliyoruz
  const t = (key: string) => {
    return key.split(".").reduce((obj, part) => obj?.[part], translations) || key
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
