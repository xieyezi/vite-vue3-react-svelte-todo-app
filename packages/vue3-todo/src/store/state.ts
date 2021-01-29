import { reactive } from 'vue'

export interface TodoItemType {
	id: number
	done: false
	content: string
}

export type VuexState = {
	todoList: Array<TodoItemType>
}

const state: VuexState = {
	todoList: [
		{
			id: 0,
			done: false,
			content: 'your first todo'
		}
	]
}

export const createStore = () => {
	return reactive(state)
}
