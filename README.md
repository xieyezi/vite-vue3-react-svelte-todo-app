### preview

vue3: https://vite-vue3-todo.netlify.app

react: https://vite-react-todo.netlify.app

svelte: https://vite-svelte-todo.netlify.app
## Vite 会成为2021年最受欢迎的前端工具吗？ 

![1.png](https://i.loli.net/2021/02/05/ZAnfoHDNy35eMm7.png)

### 说在前面
> 今天是大年初一，首先祝大家新年快乐，牛气冲天🎉🎉🎉    
> 这篇文章是带给大家的新年礼物！

测试不同的前端构建工具一直以来是笔者的一个奇怪的嗜好，因为说实话,`webpack` 真的太难用了。上手成本高、插件鱼龙混杂、最难受的就是启动`dev`太慢，这些都是它的缺点。直到`vite`出现，笔者才原来前端开发可以如此丝滑。
### `Vite`是什么？

来自流行的 `Vue.js` 框架的祖师爷 `Evan You` 的一个新的前端构建工具。它由两个主要部分组成:
- 一个通过`native ES modules`提供源文件的开发服务器，具有丰富的内置特性和快得惊人的热模块替换(`HMR`)。
- 将代码与 `Rollup` 捆绑在一起，输出用于生产的高度优化的构建包。


最近在在各种平台（`Twitter`、`GayHub`、`掘金`、`知乎`等平台）都看见了`vite`，特别是 Evan You 本人，其更新速度，简直令人咋舌。同时他几乎每天都在`Twitter`上面推广`vite`，基于这些原因，真的很难让笔者不去尝试`vite`。

### 目的
上面说了，笔者一直在寻找最好用的构建工具，其实笔者的要求真的很简单：

- 它一定要够快（不会随着项目增大而变慢）
- 它必须支持 `Typescript`
- 它必须支持现在主流的前端框架（包括`vue`、`react`等）
- 它必须支持`HMR`（热模块替换）
- 它必须支持 `tree shaking`
- 它必须支持各种 `CSS` 工具
- 它支持导入 `SVG`，`PNG`，`JSON` 和其他我们想要导入的东西

讲道理，其实这些要求不算过分吧。

有了这些需求清单，我们继续往下面看，看看`vite`是否能满足我们这些要求。


### 测试`Vite`
为了测试`vite`,笔者创建了一个简单的`Todo App`。它的功能很简单，我们可以在`待办页面`输入我们的待办事项，点击该项待办事项，即可以标注它已经完成，同时我们可以在`已完成页面`查看我们已经完成了哪些待办事项。

![todo-list.png](https://i.loli.net/2021/02/05/2fpyEGuFUt9sADT.png)

刚刚上面说了，我们想要知道vite对于现在各种前端框架的支持程度，所以我决定分别使用`vue3`、`react`、`svelte`来实现我们的`Todo App`。同时值得一提的是，虽然这篇文章是我为了测试`vite`而专门写的，但是通过这篇文章，你能够从头到尾的学会，如何将`vite`与`vue3`、`react`、`svelte`结合起来使用。

但是你可能会好奇，为什么我这里同时也要尝试将`vite` 和 `svelte`结合起来？因为`svelte` 这个前端框架新秀成为了2020最受欢迎的前端框架，所以我想一并尝试一下。

![fornt-end.png](https://i.loli.net/2021/02/05/8O7rWpJExD1QbBz.png)

`svelte`的优点这里笔者不作过多介绍。至于`svelte`为什么会火，可以看看这篇文章：[都快2020年，你还没听说过SvelteJS?](https://zhuanlan.zhihu.com/p/97825481)   

说了这么多，让我们一起开始吧！

哦对了，在开始之前，还得说明一下。既然我们分别测试了`vue3`、`react`、`svelte`，那我们也同时对他们做一个比较吧。我会从以下两个维度来进行比较：
- 开发体验
- 构建包的体积

> 其中开发体验包括对于`typescript`的支持、`状态管理`、`路由管理`等。

基于这个目的，我们得保持一定的公平性，意思是我们在进行功能实现时，尽可能少的借助框架本身之外的工具。比如我们在实现`状态管理`时，我们尽量使用框架本身自带的功能来实现。

好了，带着这两个目的，我们一起操作起来吧！
#### Vue3 + Vite

为了将三个`Todo App`都放在一个工程下面，我们采用了 [`lerna`](https://github.com/lerna/lerna) 来管理我们的三个`Todo App`。

```bash
# install lerna and init project
$ npm install lerna -g
$ mkdir vite-vue3-react-svelte-todo && cd vite-vue3-react-svelte-todo
$ lerna init
```

接着我们进入`packages`下面新建我们的`vue3-todo App`。由于`vite`本身是由`vue`的作者实现的，所以毋庸置疑，`vite`+`vue3`肯定是有`template`的:

```bash
$ cd packages
$ yarn create @vitejs/app vue3-todo --template vue-ts
```

然后进入到`vue3-todo`里面，新建`router`、`store`、`views`、`components`。这些太常见不过了，笔者就不作过多介绍了。我们先来看看项目结构：
```
.
├── index.html
├── node_modules
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── FinishItem.vue
│   │   └── TodoItem.vue
│   ├── main.ts
│   ├── router
│   │   └── index.ts
│   ├── store
│   │   ├── action.ts
│   │   ├── index.ts
│   │   └── state.ts
│   ├── views
│   │   ├── Finish.vue
│   │   └── Todo.vue
│   └── vue-shim.d.ts
├── tsconfig.json
└── vite.config.ts
```
现在`vite2` 为了适应更多的前端框架，所以它不会自动支持`vue3`，我们得安装一个官方提供的插件`@vitejs/plugin-vue`，并将其作为`vite` 的 `plugins`:
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()]
})

```
这里说一下，路由采用了官方最新的路由库：`vue-router 4.x` 。这个目录一眼便知，我们将`todo list`的状态管理，放到了`store`里面来管理。这里想着重讲一下状态管理，我们为了公平公正，所以我们这里不借助于`vuex`，既然现在`vue3`是基于`vue-composition-api`的，那我们可以利用这个特性来实现我们的状态管理。 首先我们需要创建一个`state`：
```ts
// store/state.ts
import { reactive } from 'vue'

export interface TodoItemType {
	id: number
	done: boolean
	content: string
}

export type VuexState = {
	todoList: Array<TodoItemType>
}

const state: VuexState = {
	todoList: [
		{
			id: 0,
			done: false,
			content: 'your first todo'
		}
	]
}

export const createStore = () => {
	return reactive(state)
}

```
接着我们需要定义一些`action`用来变更`state`，这其中包括待办事项的增删改查：
```ts
// store/action.ts
import { VuexState, TodoItemType } from './state'

function addNewTodoItem(state: VuexState) {
	return (newItem: TodoItemType) => {
		state.todoList = [...state.todoList, newItem]
	}
}

function delteTodoItem(state: VuexState) {
	return (item: TodoItemType) => {
		state.todoList = state.todoList.filter((e) => e.id !== item.id)
	}
}

function changeTodoItemStatus(state: VuexState) {
	return (todoItem: TodoItemType) => {
		let list = [...state.todoList]
		list.map((item) => {
			if (item.id === todoItem.id) item.done = !item.done
			return item
		})
		state.todoList = [...list]
	}
}

export function createAction(state: VuexState) {
	return {
		addNewTodoItem: addNewTodoItem(state),
		delteTodoItem: delteTodoItem(state),
		changeTodoItemStatus: changeTodoItemStatus(state)
	}
}
```

然后我们将其统一暴露出去：
```ts
// store/index.ts
import { readonly } from 'vue'
import { createAction } from './action'
import { createStore } from './state'

const state = createStore()
const action = createAction(state)

export const useStore = () => {
	return {
		state: readonly(state),
		action: readonly(action)
	}
}

```
这样，我们就完美的利用`vue3` 的最新特性实现状态管理，且不需要`vuex`了，最棒的是，这样做我们还完美的实现了`typescript`支持。
> 如果想查看有关利用vue3实现自身状态管理的更多内容，请查看这篇文章：[vuex4都beta了，vuex5还会远吗？](https://juejin.cn/post/6920118166224666632)

好了，最重要的部分说完了，我们来看看`Todo.vue`:
```ts
<template>
	<div class="todo">
		<div class="card">
			<input
				class="input"
				type="text"
				placeholder="your new todo"
				v-model="newItemContent"
				@keyup.enter="addNewTodoItem"
			/>
			<div class="card-content">
				<TodoItem
					v-for="item in todoList"
					:key="item.id"
					:todoItem="item"
					@changeTodoItem="changeTodoItem"
					@delteTodoItem="delteTodoItem"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import TodoItem from '../components/TodoItem.vue'
import { useStore } from '../store/index'
import { TodoItemType } from '../store/state'

export default defineComponent({
	name: 'Todo',
	components: {
		TodoItem
	},
	setup() {
		let newItemContent = ref('')
		const store = useStore()
		const todoList = computed(() => store.state.todoList)

		function addNewTodoItem() {
			store.action.addNewTodoItem({
				done: false,
				id: todoList.value.length,
				content: newItemContent.value
			})
			newItemContent.value = ''
		}

		function changeTodoItem(todoItem: TodoItemType) {
			store.action.changeTodoItemStatus(todoItem)
		}

		function delteTodoItem(todoItem: TodoItemType) {
			store.action.delteTodoItem(todoItem)
		}

		return {
			todoList,
			newItemContent,
			addNewTodoItem,
			delteTodoItem,
			changeTodoItem
		}
	}
})
</script>
....
```

很简单，对吧。在这个页面，我们取出`state`里面的`todo list`，渲染了每个`todo item`。同时还提供了一个`Input`输入框，利用`v-model`绑定了输入框的值。当我们按下回车键时，就会触发我们提供的`addNewTodoItem`方法。这个方法做了两件事情，取出`Input`的值，然后通过`action` `dispatch`到我们的`store`，从而新增一个`todo item`。 

同时我们还提供了更新`item`和删除`item`的方法，当我们勾选`item`前面的`check box`时，就表明我们完成了该待办事项。在`TodoItem.vue`里面，当我们点击`item`的`check box`时，通过`emit`的方式，将变更提交到父组件`Todo.vue`，不过在`vue3`里面我们稍微有点改变，我们得通过`setup`的第二个参数拿到`emit`：
```ts
// components/TodoItem.vue
...
setup(props, ctx) {
		const { todoItem } = props

		function statusChage() {
			ctx.emit('changeTodoItem', todoItem)
		}

		function deleteTodoItem() {
			ctx.emit('delteTodoItem', todoItem)
		}

		return {
			todoItem,
			statusChage,
			deleteTodoItem
		}
    }
...
```

为了证明，我们勾选了待办事项之后，我们的`state`的确变更了，所以我们也准备了一个 `Finish.vue`的页面，这个页面的功能很简单，就是查看我们已经完成的待办事项：
```ts
<template>
	<div class="finish">
		<div class="card">
			<div class="card-content">
				<div class="card-content">
					<FinishItem v-for="item in finishList" :key="item.id" :finishItem="item" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import FinishItem from '../components/FinishItem.vue'
import { useStore } from '../store/index'

export default defineComponent({
	name: 'Finish',
	components: {
		FinishItem
	},
	setup() {
		const store = useStore()
		const finishList = computed(() => store.state.todoList).value.filter((item) => item.done)

		return {
			finishList
		}
	}
})
</script>
....
```
这样的话，当我们在`Todo`页面点击了某项待办事项之后，我们就可以在`finish`页面查看已经完成的待办事项了。

到目前为止，我们在没有使用第三方状态管理库的情况下，实现了状态管理，而且同时获得了很完美的`typescript`支持。我们 `vue3` 版本的`Todo App`就完成了。

接下来我们来`build`一下，通过运行`vite`为我们提供的`vite build`命令，我们就可以打出`vue3`的`Todo App`：

![vue3-todo](https://i.loli.net/2021/02/11/1XbdwAIen57pvkE.png)

嗯，285k，貌似不是特别大，如果想查看线上效果，直接点击 [Vue3-Todo](https://vite-vue3-todo.netlify.app)。

接下来我们一起再来看看`vite + react` 的配合吧！

#### React + Vite

这里还是和`vue3`一样，`vite`为我们提供了基于`react`的`template`，我们只需执行一条脚本命令即可：

```bash
$ cd packages
$ yarn create @vitejs/app react-todo --template react-ts
```
按照惯例，先看目录：
```
.
|-- index.html
|-- package-lock.json
|-- package.json
|-- src
|   |-- App.scss
|   |-- App.tsx
|   |-- components
|   |   |-- FinishItem
|   |   |   |-- index.tsx
|   |   |   |-- styles.scss
|   |   |-- TodoItem
|   |       |-- index.tsx
|   |       |-- styles.scss
|   |-- index.css
|   |-- logo.svg
|   |-- main.tsx
|   |-- pages
|   |   |-- Finish
|   |   |   |-- index.tsx
|   |   |   |-- styles.scss
|   |   |-- Todo
|   |       |-- index.tsx
|   |       |-- styles.scss
|   |-- router
|   |   |-- index.tsx
|   |   |-- styles.scss
|   |-- store
|       |-- index.tsx
|       |-- reducer.ts
|       |-- state.ts
|-- tsconfig.json
`-- vite.config.ts


```
我们之所以这么设置目录，是想和`vue3`的目录结构保持一致。
和上面👆`vue3`一样，我们得安装一个官方提供的插件`@vitejs/plugin-react-refresh`，并将其作为`vite` 的 `plugins`:
```ts
// vite.config.ts
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()]
})
```
另外由于功能都是一样的，所以我们只介绍一下不同的地方。     
第一个就是路由，这里我们的路由使用的是`react-router-dom`，这是`react`的官方路由。 

第二个就是状态管理，这里我们采用了`context`和`useReducer`的方式。

首先，我们还是需要创建一个`state`：
```ts
// store/state.ts
export interface TodoItemType {
	id: number
	done: boolean
	content: string
}

export type StateType = {
	todoList: Array<TodoItemType>
}

const state: StateType = {
	todoList: [
		{
			id: 0,
			done: false,
			content: 'your first todo'
		}
	]
}

export const createStore = () => {
	return state
}

```

接着我们需要一些能够改变`state`的`reducer`:
```ts
// store/reducer.ts
import { StateType, TodoItemType } from './state'

export type ActionType =
	| { type: 'NEW_TODO_ITEM'; todoItem: TodoItemType }
	| { type: 'DELETE_TODO_ITEM'; todoItem: TodoItemType }
	| { type: 'UPDATE_TODO_ITEM'; todoItem: TodoItemType }

export const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case 'NEW_TODO_ITEM':
			return {
				...state,
				todoList: [...state.todoList, action.todoItem]
			}
		case 'DELETE_TODO_ITEM':
			return {
				...state,
				todoList: state.todoList.filter((e) => e.id !== action.todoItem.id)
			}
		case 'UPDATE_TODO_ITEM':
			let list = [...state.todoList]
			list = list.map((item) => {
				if (item.id === action.todoItem.id) {
					item.done = !item.done
				}
				return item
			})
			return {
				...state,
				todoList: list
			}
	}
}
```
然后我们通过`useReducer` 和 `Contenxt` 将`state`、`reducer`结合起来并暴露出去：
```ts
// store/index.tsx
import { createStore, StateType } from './state'
import { ActionType, reducer } from './reducer'
import React, { useReducer, createContext } from 'react'

const store = createStore()

export type TodoContextType = {
	state: StateType
	dispatch: React.Dispatch<ActionType>
}

export const TodoContext = createContext<any>({})

const TodoProvider: React.FC = (props) => {
	const [state, dispatch] = useReducer(reducer, store)
	const contextValue = { state, dispatch }

	return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
}

export default TodoProvider

```
我们用`Provider`包裹`useReducer`暴露出的值，提供给所有子组件。然后在`App.tsx`包裹一下`Router`组件即可。

我们在`Todo/index.tsx`里面，就能通过`useContext`拿到`useReducer`提供的值：
```ts
// pages/Todo/index.tsx
...
const { state, dispatch } = useContext<TodoContextType>(TodoContext)
...
```
这样我们就可以拿到`state`和`dispatch`了。
通过`context`和`useReducer`的方式，我们完美了替代了`redux`。和`vue3`一样，我们没有使用第三方状态管理，至于对于`typescript`的支持嘛，那肯定不用我说，大家都知道`react`对于`typescript`的支持非常的棒了。

接下来我们来`build`一下，通过运行`vite`为我们提供的`vite build`命令，我们就可以打出`react`的`Todo App`：

![react-todo.png](https://i.loli.net/2021/02/11/LMte8ERVmi1rWoT.png)

363k，好家伙，有点大啊，如果想查看线上效果，直接点击 [React-Todo](https://vite-react-todo.netlify.app)。

接下来我们一起再来看看`vite + svelte` 的配合吧！

#### Svelte + Vite

对于`svelte`， `vite` 没有提供官方 `template` ，所以我们得自己动手了。
虽然没有官方 `template`，但是我们可以依葫芦画瓢。首先我们在`packages`目录下面新建一个目录：`svelte-todo`，接着新建`public`和`src`目录，`index.html`、`tsconfig.json`、`vite.config.ts`文件。之后我们在`src`目录下面新建我们需要的目录和文件，文件目录就变成了这样：			
```
.
├── index.html
├── node_modules
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.css
│   ├── App.svelte
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   ├── FinishItem.svelte
│   │   └── TodoItme.svelte
│   ├── main.ts
│   ├── pages
│   │   ├── Finish.svelte
│   │   └── Todo.svelte
│   ├── router
│   │   └── index.svelte
│   ├── store
│   │   ├── action.ts
│   │   ├── index.ts
│   │   └── state.ts
│   └── types.d.ts
├── tsconfig.json
└── vite.config.ts
```
既然要使用 `vite + svelte`，那我们就需要安装`vite`和`svelte`:
```json
"devDependencies": {
    "@tsconfig/svelte": "^1.0.10",
    "svelte-preprocess": "^4.6.3",
    "typescript": "^4.1.3",
    "vite": "^2.0.0-beta.50",
    "vite-plugin-svelte": "https://github.com/benmccann/vite-plugin-svelte"
  },
  "dependencies": {
    "svelte": "^3.32.0",
    "svelte-routing": "^1.5.0"
  }
```
这里和上面两个框架一样，路由我们都采用了相应的官方路由，`svelte`采用了`svelte-routing`。查看了`svelte`的教程，如果想要获得`typescript`的支持，我们需要安装`@tsconfig/svelte`和`svelte-preprocess`，并在根目录创建一个`svelte.config.js`：
```js
const preprocess = require('svelte-preprocess')

module.exports = { preprocess: preprocess() }

```
另外，如果我们需要`HMR`的功能，这里同样得安装一个`plugin`,`vite-plugin-svelte`:
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import svelte from 'vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
			compilerOptions: {
				dev: true
			},
			hot: true,
			emitCss: false
		})
	]
})
```
自此，我们就完美的将`svelte`和`vite`结合在一起了。

接下来我们来介绍一下`svelte`的状态管理。
先在`store`目录下面新建一个`state`:
```ts
// store/state.ts
import { writable } from 'svelte/store'
export interface TodoItemType {
	id: number
	done: boolean
	content: string
}

export type StateType = {
	todoList: Array<TodoItemType>
}

const state: StateType = {
	todoList: [
		{
			id: 0,
			done: false,
			content: 'your first todo'
		}
	]
}
export const createStore = () => {
	return writable(state)
}
```
`svelte`为我们提供了`writable`，将我们的`state`包裹起来，这样就实现了响应式。

接下来我们来创建一些变更`state`的`action`:
```ts
// store/action.ts
import type { Writable } from 'svelte/store'
import type { StateType, TodoItemType } from './state'

function addNewTodoItem(state: Writable<StateType>) {
	return (newItem: TodoItemType) => {
		state.update((state) => {
			return {
				...state,
				todoList: [...state.todoList, newItem]
			}
		})
	}
}

function delteTodoItem(state: Writable<StateType>) {
	return (item: TodoItemType) => {
		state.update((state) => {
			return {
				...state,
				todoList: state.todoList.filter((e) => e.id !== item.id)
			}
		})
	}
}

// svelte do not change state by action ,beacase all of them is reactivity,it's amazing!

// function changeTodoItemStatus(state: Writable<StateType>) {
// 	return (todoItem: TodoItemType) => {
// 		state.update((state) => {
// 			let list = [...state.todoList]
// 			// list.map((item) => {
// 			// 	if (item.id === todoItem.id) item.done = !item.done
// 			// 	return item
// 			// })
// 			return {
// 				...state,
// 				todoList: [...list]
// 			}
// 		})
// 	}
// }

export function createAction(state: Writable<StateType>) {
	return {
		addNewTodoItem: addNewTodoItem(state),
		delteTodoItem: delteTodoItem(state)
		// changeTodoItemStatus: changeTodoItemStatus(state)
	}
}
```
> `todo item`的时候，不需要通过action，是因为被`writable`包裹的值，是具有响应式的，这一点很棒！

然后我们将`state`和`action`结合起来：
```ts
// store/index.ts
import { createAction } from './action'
import { createStore } from './state'

const state = createStore()
const action = createAction(state)

export const useStore = () => {
	return {
		state,
		action
	}
}
```

接着我们来看看在`svelte`组件里面如何拿到`state`和`action`:
```ts
// pages/Todo.svelte
...
const store = useStore()
	const { state, action } = store
	let newItemContent = ''
	let todoList: Array<TodoItemType> = []

	state.subscribe((state) => {
		todoList = state.todoList
	})
...
```
这样，我们就完美的拿到了`state`和`action`。
另外还有一点，值得提一下。在变更`todo item`时，我们如何从`TodoItem.svelte`通知父组件`Todo.svelte`呢？

`svelte`为我们提供了
```ts
// components/TodoItem.svelte
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

```
通过这个`dispatch`，我们可以派发一个`action`到父组件:
```ts
function deleteTodoItem() {
	dispatch('delteTodoItem', todoItem)
}
```
在父组件，通过同名`action`，我们就能拿到从子组件携带的参数：

```ts
// pages/Todo.svelte
...
function delteTodoItem(e: CustomEvent) {
	action.delteTodoItem(e.detail)
}
...
<div class="card-content">
	{#each todoList as item}
		<TodoItem todoItem={item} on:delteTodoItem={delteTodoItem} />
	{/each}
</div>
...
```
发现没有，这种方式和vue的`emit`其实一个样。

接下来我们来`build`一下，通过运行`vite`为我们提供的`vite build`命令，我们就可以打出`svelte`的`Todo App`：

![svelte-todo.png](https://i.loli.net/2021/02/11/kJhIUtflYyoaA8x.png)

嗯，262k，是他们三个中最小的。

### 总结

我们先来回顾一下，刚刚我们提出的要求：

- 它一定要够快（不会随着项目增大而变慢）
- 它必须支持 `Typescript`
- 它必须支持现在主流的前端框架（包括`vue`、`react`等）
- 它必须支持`HMR`（热模块替换）
- 它必须支持 `tree shaking`
- 它必须支持各种 `CSS` 工具
- 它支持导入 `SVG`，`PNG`，`JSON` 和其他我们想要导入的东西

现在看来，我们知道，这些要求，`vite`都满足了。事实上，`vite`带给我们的，还不止这些，它还支持`SSR`等功能。

> 此时此刻，是大年三十的最后一刻，希望小伙伴们新年快乐！

刚刚我们说了还有一个目的，我们来对比一下`vue3`、`react`、`svelte`。

从构建体积来看，`svelete` 优于 `vue3` 优于 `react`。  
从对于`typescript`的支持来看, `react` 优于 `vue3` 优于 `svelete`。    
从状态管理来看，`svelte` 优于 `vue3` 优于 `react`。
从路由管理来看，`svelte` 等于 `vue3` 等于 `react`。

那么回到标题的问题，"Vite 会成为2021年最受欢迎的前端工具吗？"，相信大家心中已经有了答案。