import { createStore } from './state'
import { reducer } from './reducer'
import React, { useReducer, createContext } from 'react'

const state = createStore()
export const TodoContext = createContext({})

const TodoProvider: React.FC = (props) => {
	const [todoList, dispatch] = useReducer(reducer, state)
	const contextValue = [todoList, dispatch]

	return (
		<TodoContext.Provider value={contextValue}>
			{props.children}
		</TodoContext.Provider>
	)
}

export default TodoProvider
