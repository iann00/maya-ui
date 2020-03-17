<template>
	<span :class="[
		`m-chip`,
		`m-chip-state-${state}`
		]" v-text="text">
		</span>
</template>
<script>
export default {
	name: 'm-chip',
	props: {
		text: {
			type: String,
			required: true
		},
		state: {
			type: String,
			validator(val) {
				return [
					'accent',
					'success',
					'error'
				].indexOf(val) !== -1
			}
		}
	}
}	
</script>