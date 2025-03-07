import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-vite',
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]'
    }
  },
})
