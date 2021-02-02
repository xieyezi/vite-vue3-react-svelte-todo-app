import { VuexState, TodoItemType } from './state'

function addNewTodoItem(state: VuexState) {
	return (newItem: TodoItemType) => {
		state.todoList = [...state.todoList, newItem]
	}
}

function delteTodoItem(state: VuexState) {
	return (item: TodoItemType) => {
		state.todoList = state.todoList.filter((e) => e.id !== item.id)
	}
}

function changeTodoItemStatus(state: VuexState) {
	return (todoItem: TodoItemType) => {
		let list = [...state.todoList]
		list.map((item) => {
			if (item.id === todoItem.id) item.done = !item.done
			return item
		})
		state.todoList = [...list]
	}
}

export function createAction(state: VuexState) {
	return {
		addNewTodoItem: addNewTodoItem(state),
		delteTodoItem: delteTodoItem(state),
		changeTodoItemStatus: changeTodoItemStatus(state)
	}
}
