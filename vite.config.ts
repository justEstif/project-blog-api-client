import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    server: {
      cors: true
    },
    plugins: [react()]
  }
})
