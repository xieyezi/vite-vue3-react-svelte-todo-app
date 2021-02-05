import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import Todo from '../pages/Todo'
import Finish from '../pages/Finish'
import './styles.scss'


const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<div id="nav">
				<NavLink to="/" exact activeClassName="active">Todo List</NavLink>
				<span>|</span>
				<NavLink to="/finish" exact activeClassName="active">Finish List</NavLink>
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
