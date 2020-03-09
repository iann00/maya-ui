<template>
	<div class="m-menu">
		<div class="m-menu-item" v-for="(option, i) in options" :key="i">
			<a :href="option.ref">
				<i :class='option.icon'></i>
				<span class="m-menu-item-label">{{ option.label }}</span>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'm-menu',
		props: {
			options: {
				type: Array,
				required: true
			}
		},
	}
</script>
