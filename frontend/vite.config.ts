import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow external access
    port: 80
  },
  preview: {
    allowedHosts: ['patricktech.site'] // allow your host for preview
  }
})