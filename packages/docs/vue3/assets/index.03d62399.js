import { q as t, s as o } from './vendor.9fed7037.js'
function d(t) {
	return (o) => {
		t.todoList = [...t.todoList, o]
	}
}
function e(t) {
	return (o) => {
		t.todoList = t.todoList.filter((t) => t.id !== o.id)
	}
}
function i(t) {
	return (o) => {
		let d = [...t.todoList]
		d.map((t) => (t.id === o.id && (t.done = !t.done), t)), (t.todoList = [...d])
	}
}
const n = t({ todoList: [{ id: 0, done: !1, content: 'your first todo' }] }),
	s = { addNewTodoItem: d((r = n)), delteTodoItem: e(r), changeTodoItemStatus: i(r) }
var r
const a = () => ({ state: o(n), action: o(s) })
export { a as u }
