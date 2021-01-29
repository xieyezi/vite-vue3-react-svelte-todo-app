import {
	d as e,
	p as t,
	h as o,
	o as d,
	b as n,
	e as a,
	t as s,
	i as m,
	j as c,
	k as l,
	l as I,
	v as u,
	m as i,
	F as r,
	n as T,
	r as p
} from './vendor.9fed7037.js'
import { u as h } from './index.03d62399.js'
var v = e({
	name: 'TodoItem',
	props: { todoItem: { type: Object, required: !0 } },
	setup(e, t) {
		const { todoItem: o } = e
		return {
			todoItem: o,
			statusChage: function () {
				t.emit('changeTodoItem', o)
			},
			deleteTodoItem: function () {
				t.emit('delteTodoItem', o)
			}
		}
	}
})
const g = m('data-v-4ab52148')
t('data-v-4ab52148')
const f = { class: 'checkbox' }
o()
const C = g(
	(e, t, o, m, c, l) => (
		d(),
		n(
			'div',
			{ class: ['item', { done: e.todoItem.done }] },
			[
				a('div', null, [
					a(
						'input',
						{
							type: 'checkbox',
							checked: e.todoItem.done,
							onChange: t[1] || (t[1] = (...t) => e.statusChage && e.statusChage(...t))
						},
						null,
						40,
						['checked']
					),
					a('label', f, s(e.todoItem.content), 1)
				]),
				a('button', {
					class: 'delete is-small',
					onClick: t[2] || (t[2] = (...t) => e.deleteTodoItem && e.deleteTodoItem(...t))
				})
			],
			2
		)
	)
)
;(v.render = C), (v.__scopeId = 'data-v-4ab52148')
var b = e({
	name: 'Todo',
	components: { TodoItem: v },
	setup() {
		let e = c('')
		const t = h(),
			o = l(() => t.state.todoList)
		return {
			todoList: o,
			newItemContent: e,
			addNewTodoItem: function () {
				t.action.addNewTodoItem({ done: !1, id: o.value.length + 1, content: e.value }), (e.value = '')
			},
			delteTodoItem: function (e) {
				t.action.delteTodoItem(e)
			},
			changeTodoItem: function (e) {
				t.action.changeTodoItemStatus(e)
			}
		}
	}
})
const w = { class: 'todo' },
	k = { class: 'card' },
	y = { class: 'card-content' }
b.render = function (e, t, o, s, m, c) {
	const l = p('TodoItem')
	return (
		d(),
		n('div', w, [
			a('div', k, [
				I(
					a(
						'input',
						{
							class: 'input',
							type: 'text',
							placeholder: 'your new todo',
							'onUpdate:modelValue': t[1] || (t[1] = (t) => (e.newItemContent = t)),
							onKeyup: t[2] || (t[2] = i((...t) => e.addNewTodoItem && e.addNewTodoItem(...t), ['enter']))
						},
						null,
						544
					),
					[[u, e.newItemContent]]
				),
				a('div', y, [
					(d(!0),
					n(
						r,
						null,
						T(
							e.todoList,
							(t) => (
								d(),
								n(
									l,
									{ key: t.id, todoItem: t, onChangeTodoItem: e.changeTodoItem, onDelteTodoItem: e.delteTodoItem },
									null,
									8,
									['todoItem', 'onChangeTodoItem', 'onDelteTodoItem']
								)
							)
						),
						128
					))
				])
			])
		])
	)
}
export default b
