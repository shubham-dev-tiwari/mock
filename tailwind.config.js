/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Black & White Base
        black: "#000000",
        white: "#FFFFFF",
        
        // Gray Scale
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        
        // Emerald Accent (Success/Growth)
        accent: {
          light: "#6EE7B7",    // Emerald 300
          DEFAULT: "#10B981",  // Emerald 500
          dark: "#047857",     // Emerald 700
        },
        
        // UI Colors
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#10B981",
        background: "#FFFFFF",
        foreground: "#111827",
        
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        
        secondary: {
          DEFAULT: "#F3F4F6",
          foreground: "#111827",
        },
        
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.625rem",
        sm: "0.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: 1 },
          "100%": { transform: "scale(1.5)", opacity: 0 },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "draw": {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "shimmer": "shimmer 2s infinite",
        "draw": "draw 2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
