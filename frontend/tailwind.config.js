/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#cad5c2',
        button: '#9fab97',
        border: '#9cbac6',
        text: '#2d2d2d',
        navbg: '#f2e5d2'
      }
    },
  },
  plugins: [],
}
