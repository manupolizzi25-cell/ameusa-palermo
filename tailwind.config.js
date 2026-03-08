/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0faf9',
          100: '#cceeec',
          200: '#99dcd8',
          300: '#66cac4',
          400: '#33b8b0',
          500: '#009e97',
          600: '#006e6a',
          700: '#005754',
          800: '#00413f',
          900: '#002b2a',
        },
        gold: {
          50:  '#fdf8eb',
          100: '#f9edca',
          200: '#f2db95',
          300: '#ebca60',
          400: '#dfb733',
          500: '#c9a84c',
          600: '#a88a3c',
          700: '#876c2c',
          800: '#664e1c',
          900: '#45300c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
