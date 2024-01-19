import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-App-shows-Pak-Uni-List/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://universities.hipolabs.com', // Replace with your actual API URL
    },
  },
})
