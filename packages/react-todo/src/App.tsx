import React from 'react'
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
					<strong>
						<a href="https://vite-vue3-todo.netlify.app" target="view_window">
							Vue3 Version
						</a>
					</strong>
					,
					<strong>
						<a href="https://vite-react-todo.netlify.app" target="view_window">
							React Version
						</a>
					</strong>
					,
					<strong>
						<a href="https://vite-svelte-todo.netlify.app" target="view_window">
							Svelte Version
						</a>
					</strong>
				</p>
				<p>
					This is one Todo App build With Vite and React,if you want to view the source code, please click
					<strong>
						<a href="https://github.com/xieyezi/vite-vue3-react-svelte-todo-app" target="view_window">
							Here
						</a>
					</strong>
					.
				</p>
			</div>
		</div>
	)
}

export default App
