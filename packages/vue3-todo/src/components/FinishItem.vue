<template>
	<div class="item">
		<input type="checkbox" disabled checked="checked" />
		<label class="checkbox" disabled>
			{{ finishItem.content }}
		</label>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'FinishItem',
	props: {
		finishItem: {
			type: Object,
			required: true
		}
	}
})
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: 10px;
	background: #f6f6f6;
	padding: 10px;
	border-radius: 5px;
	input {
		margin-right: 10px;
	}
}
</style>
