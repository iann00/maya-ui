<template>
	<div class="m-menu">
		<div class="m-menu-item__close-menu">
			<a href="javascript:void(0)" @click="onClose">
				<i class='bx bx-x-circle'></i>
			</a>
		</div>
		<div>
			<div class="m-menu-logo"
				:style="{ 'background-image': `url('${logo}')` }">
			</div>
		</div>
		<div class="m-menu-item" v-for="(option, i) in options" :key="i">
			<a :href="option.ref">
				<i :class='option.icon'></i>
			</a>
		</div>
		<div class="m-menu-item" style="margin-top: 40px;">
			<a href="javascript:void(0)" @click="onLogout">
				<i class='bx bx-log-out'></i>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'm-menu',
		props: {
			logo: {
				type: String,
				default: null
			},
			options: {
				type: Array,
				required: true
			}
		},
		methods: {
			onLogout() {
				this.$emit('on-logout')

				// We need close the menu when logout is called
				this.onClose()
			},
			onClose() {
				this.$emit('on-close')
			}
		}
	}
</script>
