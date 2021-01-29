<template>
	<div class="item" :class="{ done: todoItem.done }">
		<div>
			<input type="checkbox" :checked="todoItem.done" @change="statusChage" />
			<label class="checkbox">
				{{ todoItem.content }}
			</label>
		</div>
		<button class="delete is-small" @click="deleteTodoItem"></button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'TodoItem',
	props: {
		todoItem: {
			type: Object,
			required: true
		}
	},
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
})
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	background: #fff;
	padding: 10px;
	border-radius: 5px;
	input {
		margin-right: 10px;
	}
}
.done {
	background: #f6f6f6;
	label{
		text-decoration:line-through;
	}
	
}
</style>
