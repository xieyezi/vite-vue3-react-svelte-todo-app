import React, { useContext } from 'react'
import { TodoItemType } from '../../store/state'
import FinishItem from '../../components/FinishItem'
import { TodoContext, TodoContextType } from '../../store'

const Finish: React.FC = () => {
	const { state } = useContext<TodoContextType>(TodoContext)
	const finishList = state.todoList.filter((item) => item.done)

	return (
		<div className="todo">
			<div className="card">
				<div className="card-content">
					{finishList.map((item: TodoItemType) => {
						return <FinishItem key={item.id} todoItem={item} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Finish
