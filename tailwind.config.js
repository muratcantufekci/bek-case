/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { 
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '0.5rem',
        '2xl': '0rem'
      },
      screens: {
        '2xl': '1244px',
      }
    },
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      screens: {
        '3xl': '1800px'
      },
      colors: {
        'primary': {
          default: '#EC1A29',
          hover: '#D80312',
        },
        'green': {
          default: '#046E08',
        },
        'gray': {
          default: '#525252',
          base: '#656565',
          light: '#DFDEDE',
          50: '#6B7280',
          30: '#939393',
          800: '#1F2937'
        },
        'dark': {
          default: 'rgba(255, 255, 255, 0.08)',
          gray: 'rgba(75, 73, 73, 0.6)'
        },
        'neutral': {
          900:'#07090D',
          50: '#FAFAFA'
        },
        'black-bg': {
          default: 'rgba(0, 0, 0, 0.8)',
          light: 'rgba(1, 1, 1, 0.20);'
        }
      }
    },
  },
  plugins: [],
}
