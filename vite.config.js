import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep the entry bundle lean: the hero ships first and the below-fold
    // sections are lazy-loaded from App.jsx. Vite 8 runs on Rolldown, which
    // only accepts manualChunks as a function, never an object map.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) {
            return 'motion'
          }
          return undefined
        },
      },
    },
  },
})

