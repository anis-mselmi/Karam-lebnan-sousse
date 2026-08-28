/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a1714',
          soft: '#3c362e',
          mute: '#78716a',
        },
        canvas: {
          DEFAULT: '#f8f6f1',
          card: '#ffffff',
          sand: '#f3e7cf',
          deep: '#171310',
        },
        // Famille chaude : rouge profond (dominant) → flamme plus claire (gradient).
        rouge: {
          DEFAULT: '#d21f28',
          deep: '#a5141c',
          dark: '#7c0f16',
          soft: '#fbe9e8',
        },
        flame: {
          DEFAULT: '#e8632b',
          light: '#f2823f',
        },
        // Accent vif, réservé (CTA, détails du logo).
        or: {
          DEFAULT: '#f0b429',
          light: '#f8cf5a',
          deep: '#c88a12',
        },
        cedre: {
          DEFAULT: '#2f6b3b',
          deep: '#235730',
          soft: '#e8efe7',
        },
      },
      fontFamily: {
        // Une seule famille géométrique/humaniste pour titres et corps.
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        arabic: ['Amiri', 'serif'],
      },
      borderColor: {
        line: 'rgba(26,23,20,0.09)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
    },
  },
  plugins: [],
}
