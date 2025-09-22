import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Explicitly externalize main.tsx so Netlify doesn’t choke
      external: ['/src/main.tsx'],
    },
  },
})
