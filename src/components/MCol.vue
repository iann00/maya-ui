<template>
	<div :class="[
			`col-${size}`,
			`col-${sm}-sm`,
			align
			]">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'm-col',
		props: {
			size: String,
			sm: String,
			align: String
		},
	}
</script>