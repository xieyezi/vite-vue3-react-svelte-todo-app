import { defineConfig } from 'vite'
import svelte from 'rollup-plugin-svelte-hot'

import sveltePreprocess from 'svelte-preprocess'

const hot = true

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		svelte({
			preprocess: sveltePreprocess()
		})
	]
})
