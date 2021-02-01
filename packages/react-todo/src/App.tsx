import React from 'react'
import TodoProvier from './store'
import Router from './router'
import './App.css'

function App() {
	return (
		<div className="App">
			<TodoProvier>
				<Router />
			</TodoProvier>
		</div>
	)
}

export default App
