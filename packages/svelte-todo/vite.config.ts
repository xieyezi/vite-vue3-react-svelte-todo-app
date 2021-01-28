import { defineConfig } from 'vite'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    })
  ]
})
