"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    console.log("isDark state changed:", isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
      console.log("Dark mode enabled")
    } else {
      document.documentElement.classList.remove("dark")
      console.log("Dark mode disabled")
    }
  }, [isDark])

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimda", label: "Hakkımda" },
    { href: "/deneyimler", label: "Deneyimler" },
    { href: "/egitim", label: "Eğitim" },
    { href: "/hobiler", label: "Hobiler" },
    { href: "/iletisim", label: "İletişim" },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Muhammet Banzaroğlu
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

