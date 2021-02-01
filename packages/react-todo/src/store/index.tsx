import { createStore, StateType } from './state'
import { ActionType, reducer } from './reducer'
import React, { useReducer, createContext } from 'react'

const store = createStore()

export type TodoContextType = {
	state: StateType
	dispatch: React.Dispatch<ActionType>
}

export const TodoContext = createContext<any>({})

const TodoProvider: React.FC = (props) => {
	const [state, dispatch] = useReducer(reducer, store)
	const contextValue = { state, dispatch }

	return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
}

export default TodoProvider
