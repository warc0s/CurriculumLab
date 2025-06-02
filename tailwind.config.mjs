/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': {
          DEFAULT: '#1E3A8A',
          50: '#E8EFFC',
          100: '#D1DFF9',
          200: '#A3BFF3',
          300: '#759FED',
          400: '#477FE7',
          500: '#1E3A8A',
          600: '#18306F',
          700: '#122654',
          800: '#0C1C39',
          900: '#06121E',
        },
        'text': {
          DEFAULT: '#2E2E2E',
          light: '#64748B',
        },
        'background': '#FFFFFF',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(30, 58, 138, 0.08)',
        'medium': '0 4px 25px rgba(30, 58, 138, 0.12)',
        'hard': '0 10px 40px rgba(30, 58, 138, 0.15)',
      },
    },
  },
  plugins: [],
}