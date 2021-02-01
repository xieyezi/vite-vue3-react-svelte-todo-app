import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Todo from '../pages/Todo'
import Finish from '../pages/Finish'

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/finish">
					<Finish />
				</Route>
				<Route path="/">
					<Todo />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Router
