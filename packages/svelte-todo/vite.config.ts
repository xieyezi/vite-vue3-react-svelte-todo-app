import { defineConfig } from 'vite'
import svelte from 'vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
			compilerOptions: {
				dev: true // should be disabled for production build
			},
			hot: true,
			emitCss: false
		})
	]
})
