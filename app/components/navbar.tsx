"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/contexts/LocaleContext"


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { locale, t } = useLocale() // Dil verilerini çekiyoruz


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const handleLocaleChange = () => {
    const newLocale = locale === "tr" ? "en" : "tr";
  
    localStorage.setItem("locale", newLocale); // Locale bilgisini kaydet
    window.location.reload(); // Sayfayı yenile
  };
  

  const navItems = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.about"), href: "/hakkimda" },
    { name: t("navbar.experience"), href: "/deneyimler" },
    { name: t("navbar.education"), href: "/egitim" },
    { name: t("navbar.hobbies"), href: "/hobiler" },
    { name: t("navbar.contact"), href: "/iletisim" },
  ]

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-white font-bold text-xl hover:text-blue-400 transition-colors">MB</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-transform transform ${pathname === item.href ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"} hover:scale-110`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dil Değiştirme Butonu */}
              <button
                onClick={handleLocaleChange}
                className="text-sm font-semibold text-white bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 transition-all"
              >
                {locale === "tr" ? "EN" : "TR"}
              </button>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden bg-gray-900/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-transform transform ${pathname === item.href ? "text-blue-400 bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-700"} hover:scale-110`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
