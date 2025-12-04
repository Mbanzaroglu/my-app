"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/contexts/LocaleContext"
import { useTheme } from "@/contexts/ThemeContext"

// Selçuklu Yıldızı Logo SVG
const SeljukLogo = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <polygon 
      points="20,5 35,30 5,30" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1"
      className="text-bordo"
    />
    <circle 
      cx="20" 
      cy="20" 
      r="5" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
      className="text-altin"
    />
  </svg>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()
  const { locale, setLocale, t } = useLocale()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLocaleChange = () => {
    const newLocale = locale === "tr" ? "en" : "tr"
    setLocale(newLocale)
  }

  // Navigasyon sembolleri
  const navSymbols = ["◆", "◇", "✦", "❋", "✧", "◈"]

  const navItems = [
    { name: t("navbar.home"), href: "/", symbol: navSymbols[0] },
    { name: t("navbar.about"), href: "/hakkimda", symbol: navSymbols[1] },
    { name: t("navbar.experience"), href: "/deneyimler", symbol: navSymbols[2] },
    { name: t("navbar.education"), href: "/egitim", symbol: navSymbols[3] },
    { name: t("navbar.hobbies"), href: "/hobiler", symbol: navSymbols[4] },
    { name: t("navbar.contact"), href: "/iletisim", symbol: navSymbols[5] },
  ]

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass shadow-card" 
          : "bg-transparent"
      }`}
      style={{ top: "4px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center gap-3 transition-all duration-800 ease-turkish ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            <SeljukLogo />
            <span className="text-xs tracking-[0.4em] font-sans font-medium text-[var(--text-primary)]">
              BANZAROĞLU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-2 transition-all duration-800 ease-turkish ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                }`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <span 
                  className={`text-[0.7rem] transition-all duration-300 ${
                    pathname === item.href 
                      ? "text-altin" 
                      : "text-turkuaz group-hover:text-altin group-hover:rotate-45"
                  }`}
                >
                  {item.symbol}
                </span>
                <span 
                  className={`text-xs tracking-turkish font-sans font-normal transition-colors duration-300 ${
                    pathname === item.href 
                      ? "text-bordo dark:text-altin" 
                      : "text-[var(--text-primary)] group-hover:text-bordo dark:group-hover:text-altin"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-500 ease-turkish hover:bg-turkuaz/10 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
              style={{ transitionDelay: "0.7s" }}
              aria-label={theme === "dark" ? "Açık tema" : "Koyu tema"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-altin" />
              ) : (
                <Moon className="w-4 h-4 text-turkuaz" />
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={handleLocaleChange}
              className={`text-xs font-sans font-medium tracking-wide px-3 py-1.5 border border-turkuaz/30 hover:border-altin hover:text-altin transition-all duration-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              {locale === "tr" ? "EN" : "TR"}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-turkuaz/10 transition-colors"
              aria-label={theme === "dark" ? "Açık tema" : "Koyu tema"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-altin" />
              ) : (
                <Moon className="w-5 h-5 text-turkuaz" />
              )}
            </button>

            {/* Language Toggle Mobile */}
            <button
              onClick={handleLocaleChange}
              className="text-xs font-sans font-medium px-2 py-1 border border-turkuaz/30"
            >
              {locale === "tr" ? "EN" : "TR"}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-[var(--text-primary)] hover:text-bordo transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass border-t border-[var(--border-light)]"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 py-2 transition-colors ${
                      pathname === item.href 
                        ? "text-bordo dark:text-altin" 
                        : "text-[var(--text-primary)] hover:text-bordo dark:hover:text-altin"
                    }`}
                  >
                    <span className="text-turkuaz text-sm">{item.symbol}</span>
                    <span className="text-sm font-sans tracking-wide">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
