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
          sand: '#efeadd',
          deep: '#171310',
        },
        rouge: {
          DEFAULT: '#d21f28',
          deep: '#a5141c',
          dark: '#7c0f16',
          soft: '#fbe9e8',
        },
        cedre: {
          DEFAULT: '#2f6b3b',
          deep: '#235730',
          soft: '#e8efe7',
        },
        or: {
          DEFAULT: '#f0b429',
          light: '#f8cf5a',
          deep: '#c88a12',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        arabic: ['Amiri', 'serif'],
      },
      borderColor: {
        line: 'rgba(26,23,20,0.09)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(26,23,20,0.04), 0 8px 24px -12px rgba(26,23,20,0.14)',
        float: '0 24px 60px -24px rgba(26,23,20,0.30)',
        hero: '0 50px 120px -40px rgba(26,23,20,0.45)',
        chip: '0 6px 20px -8px rgba(26,23,20,0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
        '6xl': '3.25rem',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
