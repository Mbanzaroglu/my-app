import "./globals.css"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { LocaleProvider } from "@/contexts/LocaleContext"
import { ThemeProvider } from "@/contexts/ThemeContext"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

// Türk temalı fontlar
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

export const metadata = {
  title: "Muhammet Banzaroğlu | Yazılım Mühendisi",
  description: "İstanbul Teknik Üniversitesi Bilgisayar Mühendisliği mezunu, Fullstack Developer",
  keywords: ["Muhammet Banzaroğlu", "Yazılım Mühendisi", "Fullstack Developer", "React", "Next.js", "İstanbul"],
  authors: [{ name: "Muhammet Banzaroğlu" }],
  openGraph: {
    title: "Muhammet Banzaroğlu | Yazılım Mühendisi",
    description: "İstanbul Teknik Üniversitesi Bilgisayar Mühendisliği mezunu, Fullstack Developer",
    type: "website",
    locale: "tr_TR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="tr" 
      className={`${playfair.variable} ${sourceSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <ThemeProvider>
          <LocaleProvider>
            {/* Çini Üst Bordür */}
            <div className="cini-border-top" />
            
            {/* Navigation */}
            <Navbar />
            
            {/* Main Content */}
            <main className="relative min-h-screen">
              {children}
            </main>
            
            {/* Footer */}
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
