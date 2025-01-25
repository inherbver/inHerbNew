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
        background: '#cad5c2',    // Arrière-plans sections
        primary: '#9fab97',       // Boutons principaux
        secondary: '#f2e5d2',     // Zones texte informatif
        border: '#9cbac6',        // Bordures & séparateurs
        text: '#2d2d2d'           // Texte principal
      }
    },
  },
  plugins: [],
}
