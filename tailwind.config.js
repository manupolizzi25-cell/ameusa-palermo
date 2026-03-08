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
          50:  '#fff7f0',
          100: '#ffedd8',
          200: '#fdd9b0',
          300: '#fbbf80',
          400: '#f89a4a',
          500: '#f57c24',
          600: '#e66010',
          700: '#bf480c',
          800: '#993a11',
          900: '#7c3011',
        },
        terra: {
          50:  '#fdf8f4',
          100: '#f7ede2',
          200: '#efd9c4',
          300: '#e3be9e',
          400: '#d49b72',
          500: '#c97e50',
          600: '#b86640',
          700: '#9a5136',
          800: '#7d4231',
          900: '#66372b',
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
