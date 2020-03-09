<template>
	<input :class="[
		`m-input`,
		`m-input-state-${state}`
		]"
		:style="{ width: width + '%'}"
		:value="value"
		@input="$emit('input', $event.target.value)">
</template>
<script>
	export default {
		name: 'm-input',
		props: {
			value: null,
			state: String,
			width: {
				type: Number,
				default: 50
			},
		},
	}
</script>
