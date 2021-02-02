import React, { useState, useContext } from 'react'
import TodoItem from '../../components/TodoItem'
import { TodoContext, TodoContextType } from '../../store'
import { TodoItemType } from '../../store/state'
import './styles.scss'

const Todo: React.FC = () => {
	const [newItemContent, setNewItemContet] = useState('')
	const { state, dispatch } = useContext<TodoContextType>(TodoContext)

	function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value) setNewItemContet(e.target.value)
	}
	function addNewTodoItem(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.code === 'Enter' && newItemContent !== '') {
			dispatch({
				type: 'NEW_TODO_ITEM',
				todoItem: {
					done: false,
					id: state.todoList.length,
					content: newItemContent
				}
			})
			setNewItemContet('')
		}
	}
	function changeTodoItem(todoItem: TodoItemType) {
		dispatch({
			type: 'UPDATE_TODO_ITEM',
			todoItem
		})
	}
	function delteTodoItem(todoItem: TodoItemType) {
		dispatch({
			type: 'DELETE_TODO_ITEM',
			todoItem
		})
	}

	return (
		<div className="todo">
			<div className="card">
				<input
					className="input"
					type="text"
					placeholder="your new todo"
					onChange={inputChange}
					onKeyUp={addNewTodoItem}
				/>
				<div className="card-content">
					{state.todoList.map((item: TodoItemType) => {
						return (
							<TodoItem key={item.id} todoItem={item} changeTodoItem={changeTodoItem} delteTodoItem={delteTodoItem} />
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Todo
