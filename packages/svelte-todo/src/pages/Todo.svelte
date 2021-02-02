<script lang="ts">
	import { store } from '../store'
	import TodoItem from '../components/TodoItme.svelte'
	import type { TodoItemType } from '../store'
	import TodoItme from '../components/TodoItme.svelte'

	let todoList: Array<TodoItemType> = []
	store.subscribe((state) => {
		todoList = state.todoList
	})
</script>

<div class="todo">
	<div class="card">
		<input class="input" type="text" placeholder="your new todo" />
		<div class="card-content">
			{#each todoList as item}
				<TodoItme todoItem={item} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.todo {
		max-width: 600px;
		padding: 15px;
		margin: 0 auto;
		.card {
			min-height: 400px;
			padding: 15px;
			background: #ededed;
			box-shadow: 0 0 30px -5px #2c3e50;
			-webkit-box-shadow: 0 0 30px -5px #2c3e50;
		}
	}
	@media screen and (max-width: 500px) {
		.todo .card {
			min-height: 260px;
		}
	}
</style>
