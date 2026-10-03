import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sandstone: {
          50: "#FAF6F0",
          100: "#F1E8DA", // Primary Warm Ivory / Sandstone
          200: "#E8DDCB",
          300: "#D8C9B8", // Soft Border
          400: "#C5B29E",
        },
        ivory: {
          50: "#FAF6F0",
          100: "#F1E8DA",
          200: "#E8DDCB",
          300: "#D8C9B8",
          400: "#C5B29E",
        },
        charcoal: {
          950: "#11100D",
          900: "#171512", // Primary Dark: Deep Charcoal
          850: "#1F1C18",
          800: "#29231F", // Secondary Dark: Warm Brown-Charcoal
          700: "#3D352F",
          600: "#544941",
          500: "#75685D", // Muted Text
        },
        terracotta: {
          300: "#C7735B",
          400: "#B66046",
          500: "#A6533B", // Primary Accent: Muted Terracotta
          600: "#8E432E",
          700: "#733422",
        },
        brass: {
          300: "#CBB07E",
          400: "#BE9B63",
          500: "#B08A52", // Secondary Accent: Antique Brass / Muted Gold
          600: "#97723E",
          700: "#7B5B2E",
        },
        antiqueGold: {
          300: "#CBB07E",
          400: "#BE9B63",
          500: "#B08A52",
          600: "#97723E",
          700: "#7B5B2E",
        },
        earth: {
          400: "#8B7A6C",
          500: "#75685D",
          600: "#5C5046",
          700: "#443930",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        marathi: ["var(--font-noto-marathi)", "sans-serif"],
      },
      backgroundImage: {
        'grain': "radial-gradient(rgba(216, 201, 184, 0.06) 1px, transparent 0)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(circle at 50% 50%, rgba(176, 138, 82, 0.08) 0%, transparent 70%)',
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'heritage': '0.35em',
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(23, 21, 18, 0.6)',
        'subtle': '0 4px 20px -2px rgba(23, 21, 18, 0.3)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

export default config;
