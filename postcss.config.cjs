import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const base = process.env.VITE_BASE ?? "/"

export default defineConfig({
  plugins: [svelte()],
  base,
})
