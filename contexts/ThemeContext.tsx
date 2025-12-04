// Decision: Context wrapper (local subtree state - UI theme preference)
"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  // İlk yüklemede localStorage'dan tema tercihini al
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem("theme") as Theme | null
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (storedTheme) {
      setThemeState(storedTheme)
    } else if (systemPrefersDark) {
      setThemeState("dark")
    }
  }, [])

  // Tema değiştiğinde localStorage'a kaydet ve HTML class'ını güncelle
  useEffect(() => {
    if (!mounted) return
    
    localStorage.setItem("theme", theme)
    const root = document.documentElement
    
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setThemeState(prev => prev === "light" ? "dark" : "light")
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  // Hydration hatalarını önlemek için mounted olana kadar bekle
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {}, setTheme: () => {} }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

