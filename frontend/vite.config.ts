import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(distDir, 'index.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, path.join(distDir, '404.html'))
      }
    },
  }
}

export default defineConfig({
  appType: 'spa',
  plugins: [react(), tailwindcss(), spaFallback()],
  preview: {
    port: 4173,
  },
})
