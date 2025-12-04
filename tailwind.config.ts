import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Türk Kültürü Renk Paleti
      colors: {
        // Ana renkler
        turkuaz: {
          DEFAULT: "#1e5f74",
          light: "#2a7a94",
          dark: "#164857",
        },
        altin: {
          DEFAULT: "#c9a227",
          light: "#dbb94a",
          dark: "#a6851e",
        },
        bordo: {
          DEFAULT: "#8b1538",
          light: "#a82050",
          dark: "#6b102b",
        },
        // Arka plan renkleri
        krem: {
          DEFAULT: "#faf8f5",
          dark: "#f5f0e8",
          darker: "#f0ebe3",
        },
        gece: {
          DEFAULT: "#1a1a2e",
          light: "#16213e",
          dark: "#0f1629",
        },
        // CSS değişkenleri için
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
      },
      // Özel fontlar
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Spectral", "Georgia", "serif"],
        sans: ["Source Sans 3", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      // Animasyonlar
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-down": "slideDown 2s ease-in-out infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
        "rotate-slow": "rotateGeometry 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        rotateGeometry: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
      },
      // Gölgeler
      boxShadow: {
        turkish: "0 20px 60px rgba(30, 95, 116, 0.08)",
        "turkish-dark": "0 20px 60px rgba(0, 0, 0, 0.3)",
        card: "0 10px 40px rgba(0, 0, 0, 0.05)",
      },
      // Spacing
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      // Transition timing
      transitionTimingFunction: {
        turkish: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      // Border radius
      borderRadius: {
        geometric: "0",
      },
      // Letter spacing
      letterSpacing: {
        turkish: "0.15em",
        wide: "0.2em",
        wider: "0.4em",
      },
    },
  },
  plugins: [],
} satisfies Config;
