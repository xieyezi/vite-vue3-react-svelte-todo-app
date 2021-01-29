import { c as e, a as t, d as o, b as i, e as r, w as n, f as s, r as a, o as l, g as c } from './vendor.9fed7037.js'
!(function (e = '.', t = '__import__') {
	try {
		self[t] = new Function('u', 'return import(u)')
	} catch (o) {
		const i = new URL(e, location),
			r = (e) => {
				URL.revokeObjectURL(e.src), e.remove()
			}
		;(self[t] = (e) =>
			new Promise((o, n) => {
				const s = new URL(e, i)
				if (self[t].moduleMap[s]) return o(self[t].moduleMap[s])
				const a = new Blob([`import * as m from '${s}';`, `${t}.moduleMap['${s}']=m;`], { type: 'text/javascript' }),
					l = Object.assign(document.createElement('script'), {
						type: 'module',
						src: URL.createObjectURL(a),
						onerror() {
							n(new Error(`Failed to import: ${e}`)), r(l)
						},
						onload() {
							o(self[t].moduleMap[s]), r(l)
						}
					})
				document.head.appendChild(l)
			})),
			(self[t].moduleMap = {})
	}
})('/assets/')
const p = {},
	d = function (e, t) {
		return t
			? Promise.all(
					t.map((e) => {
						if (e in p) return
						p[e] = !0
						const t = /\.css$/.test(e)
						if (document.querySelector(`link[href="${e}"]`)) return
						const o = document.createElement('link')
						return (
							(o.rel = t
								? 'stylesheet'
								: o.relList && o.relList.supports && o.relList.supports('modulepreload')
								? 'modulepreload'
								: 'preload'),
							t || ((o.as = 'script'), (o.crossOrigin = '')),
							(o.href = e),
							document.head.appendChild(o),
							t
								? new Promise((e) => {
										o.addEventListener('load', e)
								  })
								: void 0
						)
					})
			  ).then(() => e())
			: e()
	},
	u = [
		{
			path: '/',
			name: 'Todo',
			component: () =>
				d(() => __import__('./Todo.843cbca5.js'), [
					'/assets/Todo.843cbca5.js',
					'/assets/Todo.949f31a7.css',
					'/assets/vendor.9fed7037.js',
					'/assets/index.03d62399.js'
				])
		},
		{
			path: '/finish',
			name: 'Finish',
			component: () =>
				d(() => __import__('./Finish.70783145.js'), [
					'/assets/Finish.70783145.js',
					'/assets/Finish.bbc84a8a.css',
					'/assets/vendor.9fed7037.js',
					'/assets/index.03d62399.js'
				])
		}
	],
	m = e({ history: t(), routes: u })
var f = o({ name: 'App' })
const h = { id: 'app' },
	v = { id: 'nav' },
	_ = s('Todo List'),
	w = r('span', null, '|', -1),
	L = s('Finish List'),
	y = r(
		'div',
		{ id: 'notification', class: 'notification is-primary' },
		[
			r('p', null, [
				s(
					' This is a todo app built on vite, vue3, react, svelte, bluma, if you want to view the source code, please click '
				),
				r('strong', null, [
					r('a', { href: 'https://github.com/xieyezi/vite-vue3-react-svelte-todo-app', target: 'view_window' }, 'Here')
				]),
				s(' . ')
			]),
			r('p', null, [
				r('strong', null, [r('a', { href: 'https://github.com/xieyezi', target: 'view_window' }, 'xieyezi')]),
				s(' all rights reserved. ')
			])
		],
		-1
	)
f.render = function (e, t, o, s, c, p) {
	const d = a('router-link'),
		u = a('router-view')
	return (
		l(),
		i('div', h, [
			r('div', v, [
				r(d, { to: '/' }, { default: n(() => [_]), _: 1 }),
				w,
				r(d, { to: '/finish' }, { default: n(() => [L]), _: 1 })
			]),
			r(u),
			y
		])
	)
}
const b = c(f)
b.use(m), b.mount('#app')
