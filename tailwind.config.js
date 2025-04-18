/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF4',
          100: '#BFD0E3',
          200: '#99B3D1',
          300: '#7296C0',
          400: '#4B7AAF',
          500: '#0A2463', // main primary color
          600: '#081E52',
          700: '#061741',
          800: '#041030',
          900: '#02081F',
        },
        accent: {
          50: '#FCDDDE',
          100: '#FABBBE',
          200: '#F7999D',
          300: '#F4777D',
          400: '#F1555C',
          500: '#ED1C24', // main accent color
          600: '#CE181F',
          700: '#AF141A',
          800: '#901015',
          900: '#710C10',
        },
        neutral: {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E4E4E4',
          300: '#D9D9D9',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        success: {
          500: '#4CAF50',
        },
        warning: {
          500: '#FFC107',
        },
        error: {
          500: '#F44336',
        }
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px',
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}