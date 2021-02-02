<script lang="ts">
	import Router from './router/index.svelte'
</script>

<div id="app">
	<Router />
	<div id="notification" class="notification is-primary">
		<p>
			This is a todo app built on vite, vue3, react, svelte, bluma, if you want to view the source code, please click
			<strong><a href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app" target="view_window">Here</a></strong
			>
			.
		</p>
		<p>
			<strong><a href="https://github.com/xieyezi" target="view_window">xieyezi</a></strong>
			all rights reserved.
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
</style>
