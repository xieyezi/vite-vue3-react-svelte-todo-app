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
