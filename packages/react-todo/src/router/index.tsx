import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Todo from '../pages/Todo'
import Finish from '../pages/Finish'
import './styles.scss'

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<div id="nav">
				<Link to="/">Todo List</Link>
				<span>|</span>
				<Link to="/finish">Finish List</Link>
			</div>

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
