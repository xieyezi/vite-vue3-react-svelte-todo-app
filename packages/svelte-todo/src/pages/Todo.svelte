<script lang="ts">
	import { useStore } from '../store'
	import TodoItem from '../components/TodoItme.svelte'
	import type { TodoItemType } from '../store/state'

	const store = useStore()
	const { state, action } = store
	let newItemContent = ''
	let todoList: Array<TodoItemType> = []

	state.subscribe((state) => {
		todoList = state.todoList
	})

	function addNewTodoItem(e:KeyboardEvent) {
		console.log(e.key)
		// if (newItemContent !== '') {
		// 	action.addNewTodoItem({
		// 		done: false,
		// 		id: todoList.length,
		// 		content: newItemContent
		// 	})
		// }
	}

	function changeTodoItem(e: CustomEvent) {
		console.log(e.detail)
	}

	function delteTodoItem(e: CustomEvent) {
		console.log(e.detail)
	}
</script>

<div class="todo">
	<div class="card">
		<input
			class="input"
			type="text"
			placeholder="your new todo"
			bind:value={newItemContent}
			on:keyup={addNewTodoItem}
		/>
		<div class="card-content">
			{#each todoList as item}
				<TodoItem todoItem={item} on:changeTodoItem={changeTodoItem} on:delteTodoItem={delteTodoItem} />
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
