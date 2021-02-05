<script lang="ts">
	import Router from './router/index.svelte'
</script>

<div id="app">
	<Router />
	<div id="notification" class="notification is-primary">
		<p>
			<strong
				><a href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app" target="view_window">vue3 version</a
				></strong
			>,
			<strong
				><a href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app" target="view_window">react version</a
				></strong
			>,
			<strong
				><a href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app" target="view_window">svelte version</a
				></strong
			>
		</p>
		<p>
			This is one Todo App build With Vite and Svelte,if you want to view the source code, please click<strong
				><a href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app" target="view_window">Here</a></strong
			>.
		</p>
	</div>
</div>

<style>
	#app {
		min-height: 100vh;
		background: linear-gradient(to bottom, #2ebf91, #8360c3);
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	#notification {
		position: absolute;
		bottom: 10px;
		font-size: 18px;
		width: 100%;
	}
	:global(a:hover) {
		color: gray;
	}
</style>
