import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          900: '#1E3A8A', // Bleu profond (stabilité)
          800: '#2563EB', // Bleu légèrement plus clair
        },
        'purple': {
          800: '#7C3AED', // Violet électrique (transformation)
          900: '#5B21B6', // Violet plus profond
        },
        'gold': {
          200: '#FDE68A', // Doré pâle (sagesse)
          300: '#FCD34D', // Doré un peu plus soutenu
        },
        'green': {
          600: '#22C55E', // Vert mousse (croissance)
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config;
