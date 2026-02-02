import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  // カスタムドメイン使用時はbase='/'
  return {
    plugins: [react()],
    base: '/',
  }
})
