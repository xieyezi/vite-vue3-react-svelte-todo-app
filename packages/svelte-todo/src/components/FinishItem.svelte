<script lang="ts">
	import type { TodoItemType } from '../store/state'

	export let finishItem: TodoItemType
</script>

<div class="item">
	<label class="checkbox" disabled>
		<input type="checkbox" disabled checked />
		{finishItem.content}
	</label>
</div>

<style lang="scss">
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
