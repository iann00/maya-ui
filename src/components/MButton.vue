<template>
	<button
		ref="mbutton"
		:class="[
			`m-button`,
			`m-button-size__${size}`,
			`m-button-state__${state}`, 
			`m-button-shape__${shape}`,
			`m-elevation__${elevation}`
		]"
		@click="handleClick"
		:disabled="loading">
		<span class="m-button-label" v-show="!loading">
			{{ label }}
		</span>
		<span class="m-button-loading" v-show="loading">
			<div class="m-button-loading-icon">
				<div class="m-button-loading-icon-core"></div>
			</div>
		</span>
	</button>
</template>
<script>
	export default {
		name: 'm-button',
		props: {
			shape: {
				type: String,
				default: 'square',
				validator: function (value) {
					return [
						'square', 
						'rounded'
						].indexOf(value) !== -1
				}
			},
			size: {
				type: String,
				default: 'regular',
				validator(value) {
					return [
						'tiny',
						'regular',
						'large'
					].indexOf(value) !== -1
				}
			},
			state: {
				type: String,
				default: 'regular',
				validator(value) {
					return [
						'regular',
						'accent',
						'success', 
						'error',
						'outline'
						].indexOf(value) !== -1
				}
			},
			elevation: {
				type: String,
				default: 'none',
				validator(value) {
					return [
						'none',
						'light',
						'medium',
						'high'
					].indexOf(value) !== -1
				}
			},
			loading: Boolean,
			label: String
		},
		methods: {
			/**
			 * Handle click to custom component
			 */
			handleClick() {
				this.$emit('m-click')
				this.$emit('click')
			}
		}
	}
</script>