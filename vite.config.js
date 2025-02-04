import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mibio.aldairdominguez.tech',
  plugins: [vue()],
})
