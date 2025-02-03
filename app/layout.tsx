import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/navbar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Muhammet Banzaroğlu - Kişisel Web Sitesi",
  description: "Muhammet Banzaroğlu'nun kişisel web sitesi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

