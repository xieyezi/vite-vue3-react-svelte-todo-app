import {
	d as s,
	p as e,
	h as t,
	o as i,
	b as a,
	e as n,
	t as c,
	i as d,
	k as o,
	F as r,
	n as f,
	r as l
} from './vendor.9fed7037.js'
import { u as h } from './index.03d62399.js'
var m = s({ name: 'FinishItem', props: { finishItem: { type: Object, required: !0 } } })
const p = d('data-v-6fef765a')
e('data-v-6fef765a')
const u = { class: 'item' },
	v = n('input', { type: 'checkbox', disabled: '', checked: 'checked' }, null, -1),
	I = { class: 'checkbox', disabled: '' }
t()
const b = p((s, e, t, d, o, r) => (i(), a('div', u, [v, n('label', I, c(s.finishItem.content), 1)])))
;(m.render = b), (m.__scopeId = 'data-v-6fef765a')
var k = s({
	name: 'Finish',
	components: { FinishItem: m },
	setup() {
		const s = h()
		return { finishList: o(() => s.state.todoList).value.filter((s) => s.done) }
	}
})
const F = { class: 'finish' },
	x = { class: 'card' },
	j = { class: 'card-content' },
	y = { class: 'card-content' }
k.render = function (s, e, t, c, d, o) {
	const h = l('FinishItem')
	return (
		i(),
		a('div', F, [
			n('div', x, [
				n('div', j, [
					n('div', y, [
						(i(!0),
						a(
							r,
							null,
							f(s.finishList, (s) => (i(), a(h, { key: s.id, finishItem: s }, null, 8, ['finishItem']))),
							128
						))
					])
				])
			])
		])
	)
}
export default k
