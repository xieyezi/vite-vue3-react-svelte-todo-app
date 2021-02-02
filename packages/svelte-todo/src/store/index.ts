import { writable } from 'svelte/store'

export interface TodoItemType {
	id: number
	done: boolean
	content: string
}

export type StateType = {
	todoList: Array<TodoItemType>
}

const state: StateType = {
	todoList: [
		{
			id: 0,
			done: false,
			content: 'your first todo'
		}
	]
}

export const store = writable(state)
