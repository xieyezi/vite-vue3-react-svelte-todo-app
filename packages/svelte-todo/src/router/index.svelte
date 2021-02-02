<script>
	import { Router, Link, Route } from 'svelte-routing'
	import Todo from '../pages/Todo.svelte'
	import Finish from '../pages/Finish.svelte'

	export let url = ''
</script>

<Router {url}>
	<div id="nav">
		<Link to="/">Todo List</Link>
		<span>|</span>
		<Link to="/finish">Finish List</Link>
	</div>
	<div>
		<Route path="finish" component={Finish} />
		<Route path="/"><Todo /></Route>
	</div>
</Router>

<style lang="scss">
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
	@media screen and (max-width: 500px) {
		#nav {
			padding-top: 40px;
			padding-bottom: 20px;
		}
	}
</style>
