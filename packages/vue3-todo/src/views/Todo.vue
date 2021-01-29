<template>
	<div class="todo">
		<div class="card">
			<input
				class="input"
				type="text"
				placeholder="your new todo"
				v-model="newItemContent"
				@keyup.enter="addNewTodoItem"
			/>
			<div class="card-content">
				<TodoItem
					v-for="item in todoList"
					:key="item.id"
					:todoItem="item"
					@changeTodoItem="changeTodoItem"
					@delteTodoItem="delteTodoItem"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import TodoItem from '../components/TodoItem.vue'
import { useStore } from '../store/index'
import { TodoItemType } from '../store/state'

export default defineComponent({
	name: 'Todo',
	components: {
		TodoItem
	},
	setup() {
		let newItemContent = ref('')
		const store = useStore()
		const todoList = computed(() => store.state.todoList)

		function addNewTodoItem() {
			store.action.addNewTodoItem({
				done: false,
				id: todoList.value.length + 1,
				content: newItemContent.value
			})
			newItemContent.value = ''
		}

		function changeTodoItem(todoItem: TodoItemType) {
			store.action.changeTodoItemStatus(todoItem)
		}

		function delteTodoItem(todoItem: TodoItemType) {
			store.action.delteTodoItem(todoItem)
		}

		return {
			todoList,
			newItemContent,
			addNewTodoItem,
			delteTodoItem,
			changeTodoItem
		}
	}
})
</script>

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
