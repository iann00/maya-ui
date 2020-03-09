<template>
	<div :class="[
		`m-avatar`,
		`m-avatar-size-${size}`,
		`m-avatar-shape-${shape}`
		]"
		:style="{ 'background-image': `url('${img}')` }"
		@click="$emit('m-click')">
	</div>
</template>
<script>
	export default {
		name: 'm-avatar',
		props: {
			img: String,
			shape: {
				type: String,
				default: 'circle',
				validator(val) {
					return [
						'circle',
						'square'
					].indexOf(val) !== -1
				}
			},
			size: {
				type: String,
				default: 'regular',
				validator: function (value) {
					return [
						'tiny', 
						'regular', 
						'large', 
						'extra-large'
					].indexOf(value) !== -1
				}
			}
		}
	}
</script>
