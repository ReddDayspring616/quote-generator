import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/quote-generator/',   // 🔥 IMPORTANT (repo name)
  plugins: [svelte()]
})