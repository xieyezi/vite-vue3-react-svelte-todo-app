import React from 'react'
import { Link } from 'react-router-dom'
import TodoProvier from './store'
import Router from './router'
import './App.scss'
import 'bulma/bulma.sass'

function App() {
	return (
		<div className="App">
			<TodoProvier>
				<Router />
			</TodoProvier>
			<div id="notification" className="notification is-primary">
				<p>
					This is a todo app built on vite, vue3, react, svelte, bluma, if you want to view the source code, please
					click
					<strong>
						<a href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app" target="view_window">
							Here
						</a>
					</strong>
					.
				</p>
				<p>
					<strong>
						<a href="https://github.com/xieyezi" target="view_window">
							xieyezi
						</a>
					</strong>
					all rights reserved.
				</p>
			</div>
		</div>
	)
}

export default App
