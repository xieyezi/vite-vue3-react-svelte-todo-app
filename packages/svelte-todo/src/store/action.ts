import type { Writable } from 'svelte/store'
import type { StateType, TodoItemType } from './state'

function addNewTodoItem(state: Writable<StateType>) {
	return (newItem: TodoItemType) => {
		state.update((state) => {
			return {
				...state,
				todoList: [...state.todoList, newItem]
			}
		})
	}
}

function delteTodoItem(state: Writable<StateType>) {
	return (item: TodoItemType) => {
		state.update((state) => {
			return {
				...state,
				todoList: state.todoList.filter((e) => e.id !== item.id)
			}
		})
	}
}

function changeTodoItemStatus(state: Writable<StateType>) {
	return (todoItem: TodoItemType) => {
		state.update((state) => {
			let list = [...state.todoList]
			list.map((item) => {
				if (item.id === todoItem.id) item.done = !item.done
				return item
			})
			return {
				...state,
				todoList: [...list]
			}
		})
	}
}

export function createAction(state: Writable<StateType>) {
	return {
		addNewTodoItem: addNewTodoItem(state),
		delteTodoItem: delteTodoItem(state),
		changeTodoItemStatus: changeTodoItemStatus(state)
	}
}
