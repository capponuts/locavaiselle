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
          light: '#FF8533',
          dark: '#CC5500',
        },
        white: '#FFFFFF',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    {
      pattern: /^(bg|text|border|hover:bg|hover:text|focus:ring|focus:border)-(white|primary|primary-light|primary-dark|gray-[1-9]00)$/,
    },
    {
      pattern: /^(text|font|mb|mt|ml|mr|p|px|py|m|mx|my|w|h|max-w|min-w|max-h|min-h|rounded|transition|container|grid|flex|items|justify|gap|space|opacity|shadow|transform|scale|rotate|translate|skew|blur|filter|backdrop|ring|outline|border|divide|divide-y|divide-x|space-y|space-x|first|last|odd|even|hover|focus|active|disabled|checked|required|valid|invalid|placeholder|selection|marker|list|table|caption|col|row|cell|header|footer|group|peer|motion|animate|scroll|overflow|z|inset|object|float|clear|isolate|mix|blend)$/,
    },
  ],
} 