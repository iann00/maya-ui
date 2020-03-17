<template>
	<button :class="[
		`m-floating-button`,
		`m-floating-button-state-${state}`,
		`m-floating-button-size-${size}`,
		`m-elevation-${elevation}`
		]" @click="$emit('m-click')">
		<i :class="[icon]"></i>
	</button>
</template>
<script>
export default {
	name: 'm-floating-button',
	props: {
		size: {
			type: String,
			default: 'regular',
			validator(val) {
				return [
					'tiny',
					'regular',
					'large'
				].indexOf(val) !== -1
			}
		},
		state: {
			type: String,
			default: 'regular',
			validator(val) {
				return [
					'regular',
					'accent',
					'light'
				].indexOf(val) !== -1
			}
		},
		elevation: {
			type: String,
			default: 'medium',
			validator(val) {
				return [
					'none',
					'light',
					'medium',
					'high'
				].indexOf(val) !== -1
			}
		},
		icon: String
	},
}
</script>