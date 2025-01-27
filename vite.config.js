import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: 'frontend', // Racine du projet
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './frontend/src'), // Alias pour simplifier les imports
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss, // Importé via ES Modules
        autoprefixer, // Importé via ES Modules
      ],
    },
  },
  server: {
    open: true, // Ouvre automatiquement le navigateur
    port: 3000, // Définit le port du serveur
  },
  build: {
    outDir: '../dist', // Répertoire de sortie pour le build
    sourcemap: true, // Active les sourcemaps pour le débogage
  },
});
