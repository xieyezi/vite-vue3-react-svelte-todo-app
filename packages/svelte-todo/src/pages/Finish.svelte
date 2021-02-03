<script lang="ts">
	import { useStore } from '../store'
	import type { TodoItemType } from '../store/state'
	import FinishItem from '../components/FinishItem.svelte'

	const store = useStore()
	const { state } = store
	let finishList: Array<TodoItemType> = []

	state.subscribe((state) => {
		finishList = state.todoList.filter((e) => e.done)
	})
</script>

<div class="todo">
	<div class="card">
		<div class="card-content">
			{#each finishList as item}
				<FinishItem finishItem={item} />
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
