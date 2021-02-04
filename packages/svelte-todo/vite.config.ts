import { defineConfig } from 'vite'
import svelte from 'rollup-plugin-svelte-hot'
import sveltePreprocess from 'svelte-preprocess'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess()
		})
	]
})
