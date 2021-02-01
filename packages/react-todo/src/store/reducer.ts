import { StateType, TodoItemType } from './state'

export type ActionType =
	| { type: 'NEW_TODO_ITEM'; todoItem: TodoItemType }
	| { type: 'DELETE_TODO_ITEM'; todoItem: TodoItemType }
	| { type: 'UPDATE_TODO_ITEM'; todoItem: TodoItemType }

export const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case 'NEW_TODO_ITEM':
			return {
				...state,
				todoList: [...state.todoList, action.todoItem]
			}
		case 'DELETE_TODO_ITEM':
			return {
				...state,
				todoList: state.todoList.filter((e) => e.id !== action.todoItem.id)
			}
		case 'UPDATE_TODO_ITEM':
			let list = [...state.todoList]
			list.map((item) => {
				if (item.id === action.todoItem.id) {
					item.done = !item.done
					console.log(item)
				}
				return item
			})
			console.log(list)
			return {
				...state,
				todoList: list
			}
	}
}
