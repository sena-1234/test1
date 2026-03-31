/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#ED1C24',
          dark: '#111827',
          gray: '#F3F4F6',
        },
      },
    },
  },
  plugins: [],
};
