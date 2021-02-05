import React, { useContext } from 'react'
import { TodoItemType } from '../../store/state'
import './styles.scss'

interface IProps {
	todoItem: TodoItemType
	changeTodoItem: (todoItem: TodoItemType) => void
	delteTodoItem: (todoItem: TodoItemType) => void
}

const TodoItem: React.FC<IProps> = ({ todoItem, changeTodoItem, delteTodoItem }) => {
	function statusChage() {
		changeTodoItem(todoItem)
	}
	function deleteTodoItem() {
		delteTodoItem(todoItem)
	}
	return (
		<div className={todoItem.done ? 'todo-item done' : 'todo-item'}>
			<div>
				<input type="checkbox" checked={todoItem.done} onChange={statusChage} />
				<label className="checkbox">{todoItem.content}</label>
			</div>
			<button className="delete is-small" onClick={deleteTodoItem} />
		</div>
	)
}

export default TodoItem
