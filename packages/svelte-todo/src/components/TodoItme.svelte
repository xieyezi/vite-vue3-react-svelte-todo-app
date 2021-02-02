<script lang="ts">
	import type { TodoItemType } from '../store'
	export let todoItem: TodoItemType

	function statusChage() {
		console.log(todoItem)
	}
	function deleteTodoItem() {
		console.log(todoItem)
	}
</script>

<div class={todoItem.done ? 'item done' : 'item'}>
	<div>
		<label class="checkbox">
			<input type="checkbox" bind:checked={todoItem.done} on:change={statusChage} />
			{todoItem.content}
		</label>
	</div>
	<button class="delete is-small" on:click={deleteTodoItem} />
</div>

<style lang="scss" scoped>
	.item {
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		background: #fff;
		padding: 10px;
		border-radius: 5px;
		input {
			margin-right: 10px;
		}
	}
	.done {
		background: #f6f6f6;
		label {
			text-decoration: line-through;
		}
	}
</style>
