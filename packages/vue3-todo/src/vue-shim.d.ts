declare module '*.vue' {
	import { defineComponent } from 'vue'
	const component: ReturnType<typeof defineComponent>
	export default component
}

declare type VuexMoudle = {
	[k: string]: any
}
