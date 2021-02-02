import React from 'react'
import { TodoItemType } from '../../store/state'
import './styles.scss'

interface IProps {
	todoItem: TodoItemType
}

const FinishItem: React.FC<IProps> = ({ todoItem }) => {
	return (
		<div className={'item'}>
			<div>
				<input type="checkbox" checked={todoItem.done} disabled />
				<label className="checkbox">{todoItem.content}</label>
			</div>
		</div>
	)
}

export default FinishItem
