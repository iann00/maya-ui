<template>
	<span class="m-loading" v-show="show">
		<div class="loading-pulse">
			<div class="loading-pulse-bounce1"></div>
			<div class="loading-pulse-bounce2"></div>
		</div>
	</span>
</template>
<script>
export default {
	name: 'm-loading',
	props: {
		show: {
			type: Boolean,
			default: true
		}
	}
}
</script>