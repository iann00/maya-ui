<template>
	<button class="m-close-button" @click="close">
		<i :class="icon"></i>
	</button>
</template>
<script>
export default {
	name: 'm-close-button',
	props: {
		icon: {
			type: String,
			default: 'bx bx-x'
		}
	},
	methods: {
		close() {
			this.$emit('m-click')
		}
	}
}
</script>