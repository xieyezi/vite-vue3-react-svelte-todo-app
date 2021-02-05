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

<style lang="scss">
.finish {
	max-width: 600px;
	padding: 15px;
	margin: 0 auto;
	.card {
		min-height: 400px;
		background: #ededed;
		box-shadow: 0 0 30px -5px #2c3e50;
		-webkit-box-shadow: 0 0 30px -5px #2c3e50;
	}
}
</style>
