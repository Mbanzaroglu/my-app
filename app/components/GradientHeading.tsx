"use client"

import { ReactNode } from "react"

interface GradientHeadingProps {
  children: ReactNode
  className?: string
}

// Türk temalı gradient başlık bileşeni
export default function GradientHeading({ children, className = "" }: GradientHeadingProps) {
  return (
    <h1 
      className={`font-display font-normal bg-gradient-to-r from-turkuaz via-altin to-bordo bg-clip-text text-transparent ${className}`}
    >
      {children}
    </h1>
  )
}
