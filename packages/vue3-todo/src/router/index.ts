import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Todo',
		component: () => import(/* webpackChunkName: "home" */ '../views/Todo.vue')
	},
	{
		path: '/finish',
		name: 'Finish',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Finish.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
