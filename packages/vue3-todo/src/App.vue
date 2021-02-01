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
				This is a todo app built on vite, vue3, react, svelte, bluma, if you
				want to view the source code, please click
				<strong
					><a
						href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app"
						target="view_window"
						>Here</a
					></strong
				>
				.
			</p>
			<p>
				<strong
					><a href="https://github.com/xieyezi" target="view_window"
						>xieyezi</a
					></strong
				>
				all rights reserved.
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
	padding-top: 200px;
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
		padding-top: 100px;
		padding-bottom: 20px;
	}
}
</style>
