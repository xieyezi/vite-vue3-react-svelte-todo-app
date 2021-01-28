<script lang="ts">
	let name = 'vite + svelte'
	import logo from './assets/logo.svg'
</script>

<main>
	<img alt="Vue logo" src={logo} />
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 340px;
		margin: 0 auto;
		margin-top: 60px;
	}

	h1 {
		color: #2c3e50;
		font-size: 40px;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>