"use client"

import { createContext, useContext, useState, useEffect } from "react"
import tr from "@/locales/tr.json"
import en from "@/locales/en.json"

// Çeviri JSON'larının yapısını çıkarıyoruz
type Translations = typeof tr | typeof en

interface LocaleContextType {
  locale: string
  setLocale: (locale: string) => void
  t: (key: string) => string
}

// Context oluşturuyoruz
const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<string>("tr") // Varsayılan dil Türkçe

  // Kullanıcının seçtiği dili `localStorage`'dan al
  useEffect(() => {
    const storedLocale = localStorage.getItem("locale")
    if (storedLocale && storedLocale !== locale) {
      setLocale(storedLocale)
    }
  }, [])

  // Seçili dili `localStorage`'a kaydet
  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  // Doğru çeviri nesnesini belirliyoruz
  const translations: Translations = locale === "tr" ? tr : en

  const t = <T,>(key: string): T => {
    const result = key.split(".").reduce<unknown>((obj, part) => {
      if (obj && typeof obj === "object" && part in obj) {
        return (obj as Record<string, unknown>)[part]
      }
      return undefined
    }, translations)
  
    return (result as T) ?? (key as T)
  }
  


  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

// Context Hook'u
export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
