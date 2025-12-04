"use client"

interface SectionHeaderProps {
  number: string
  title: string
  ornament?: string
}

// Türk temalı bölüm başlığı bileşeni
export default function SectionHeader({ number, title, ornament = "✦" }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-xs tracking-wide opacity-30 font-sans">{number}</span>
      <div className="flex items-center gap-3">
        <span className="text-altin text-sm">{ornament}</span>
        <h2 className="text-2xl md:text-3xl font-display font-normal tracking-wide">
          {title}
        </h2>
        <span className="text-altin text-sm">{ornament}</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-turkuaz/20 via-altin/20 to-transparent" />
    </div>
  )
}

