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
        paper: {
          DEFAULT: "#F7F1E8", // Main Background
          50: "#FFFDF8",     // Surface / Cards
          100: "#F7F1E8",    // Main Background
          200: "#EFE4D3",    // Secondary Background
          300: "#E2D4C2",    // Default District Map Color
          400: "#DDD0BF",    // Border
          500: "#BDAF9D",    // District Borders
        },
        ivory: {
          DEFAULT: "#F7F1E8",
          50: "#FFFDF8",
          100: "#F7F1E8",
          200: "#EFE4D3",
          300: "#DDD0BF",
          400: "#BDAF9D",
        },
        charcoal: {
          DEFAULT: "#302A25", // Primary Text
          950: "#181512",
          900: "#221D18",
          850: "#29231E",
          800: "#302A25",     // Soft Charcoal Primary Text
          700: "#4D433B",
          600: "#5E534A",
          500: "#756A5F",     // Secondary Text
          400: "#8E8276",
        },
        terracotta: {
          DEFAULT: "#B86B52", // Primary Accent
          300: "#D7A98C",     // Light Accent
          400: "#C4775F",
          500: "#B86B52",     // Primary Accent
          600: "#A85E47",     // Selected District Accent
          700: "#914B36",
        },
        brass: {
          DEFAULT: "#B99A68", // Heritage Accent
          300: "#CEB58C",
          400: "#C3A77A",
          500: "#B99A68",     // Heritage Accent
          600: "#A38453",
          700: "#8C6F40",
        },
        borderSand: {
          DEFAULT: "#DDD0BF",
          subtle: "rgba(221, 208, 191, 0.6)",
        },
        mapDistrict: {
          DEFAULT: "#E2D4C2",
          border: "#BDAF9D",
          hover: "#B86B52",
          selected: "#A85E47",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        marathi: ["var(--font-noto-marathi)", "sans-serif"],
      },
      backgroundImage: {
        'grain': "radial-gradient(rgba(48, 42, 37, 0.04) 1px, transparent 0)",
        'subtle-glow': 'radial-gradient(circle at 50% 50%, rgba(185, 154, 104, 0.08) 0%, transparent 70%)',
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'heritage': '0.35em',
      },
      boxShadow: {
        'soft-paper': '0 4px 20px -2px rgba(48, 42, 37, 0.06), 0 2px 6px -1px rgba(48, 42, 37, 0.04)',
        'editorial-light': '0 16px 36px -12px rgba(48, 42, 37, 0.08), 0 4px 12px -2px rgba(48, 42, 37, 0.04)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slow-zoom 25s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
};

export default config;
