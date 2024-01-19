import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://httpshahan.github.io/React-App-shows-Pak-Uni-List/',
  plugins: [react()],
})
