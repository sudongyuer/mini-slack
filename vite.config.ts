import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: { pure: ['console.log'], minify: true },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/*': path.resolve(__dirname, './src/*'),
    },
  },
})
