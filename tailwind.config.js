/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          50: '#FFF5EB',
          100: '#FFE6D1',
          200: '#FFD0A3',
          300: '#FFB475',
          400: '#FF9847',
          500: '#FF6B00',
          600: '#E65A00',
          700: '#CC4900',
          800: '#B33800',
          900: '#992700',
        },
        secondary: '#1E293B',
        'gray-light': '#F3F4F6',
        'gray-dark': '#1F2937',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F2937',
            a: {
              color: '#FF6B00',
              '&:hover': {
                color: '#E65A00',
              },
            },
            h1: {
              color: '#1E293B',
            },
            h2: {
              color: '#1E293B',
            },
            h3: {
              color: '#1E293B',
            },
          },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    preflight: true,
  },
  important: false,
} 