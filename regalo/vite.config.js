import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Si necesitas rutas relativas, ajusta esto
  build: {
    outDir: 'dist', // Asegúrate de que Netlify espere este directorio
  },
});