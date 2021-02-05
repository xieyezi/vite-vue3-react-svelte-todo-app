<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Todo List</router-link>
			<span>|</span>
			<router-link to="/finish">Finish List</router-link>
		</div>
		<router-view />
		<div id="notification" class="notification is-primary">
			<p>
				<strong>
					<a href="https://vite-vue3-todo.netlify.app" target="view_window"> Vue3 Version </a>
				</strong>
				,
				<strong>
					<a href="https://vite-react-todo.netlify.app" target="view_window"> React Version </a>
				</strong>
				,
				<strong>
					<a href="https://vite-svelte-todo.netlify.app" target="view_window"> Svelte Version </a>
				</strong>
			</p>
			<p>
				This is one Todo App build With Vite and Vue3,if you want to view the source code, please click
				<strong>
					<a href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app" target="view_window"> Here </a>
				</strong>
				.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'App'
})
</script>

<style lang="scss">
html,
body {
	width: 100%;
	height: 100%;
	margin: 0;
}
#app {
	min-height: 100vh;
	background: linear-gradient(to bottom, #2ebf91, #8360c3);
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding-top: 60px;
	padding-bottom: 20px;
	span {
		padding-left: 15px;
		padding-right: 15px;
	}
	a {
		font-size: 20px;
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: white;
		}
	}
}
#notification {
	position: absolute;
	bottom: 10px;
	font-size: 18px;
	width: 100%;
}
@media screen and (max-width: 500px) {
	#nav {
		padding-top: 40px;
		padding-bottom: 20px;
	}
}
</style>
