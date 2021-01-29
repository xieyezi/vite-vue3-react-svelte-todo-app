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
