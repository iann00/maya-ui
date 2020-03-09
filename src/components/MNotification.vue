<template>
	<div class="m-notification">
		<div class="m-notification-message">
			{{ data.message }}
		</div>
		<div class="m-notification-link">
			<a :href="data.link">{{data.link | truncate(100)}}</a>
		</div>
		<div class="m-notification-buttons" v-if="data.redirect">
			<a :href="data.redirect.link">{{data.redirect.label}}</a>
		</div>
	</div>
</template>
<script>
export default {
	name: 'm-notification',
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	filters: {
		truncate(value, limit) {
			if (value.length > limit) {
				value = value.substring(0, (limit - 3)) + '...';
			}
			return value;
		}
	}
}
</script>