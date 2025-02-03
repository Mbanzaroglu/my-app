"use client"

import { motion } from "framer-motion"

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientHeading({ children, className }: GradientHeadingProps) {
  return (
    <motion.h1
      className={`text-3xl md:text-4xl font-bold mb-4 gradient-text ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h1>
  )
}
