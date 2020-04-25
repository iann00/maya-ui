<template>
	<div class="m-menu">
		<div>
			<div class="m-menu-logo"
				:style="{ 'background-image': `url('${logo}')` }">
			</div>
		</div>
		<div class="m-menu-item" v-for="(option, i) in options" :key="i">
			<a :href="option.ref">
				<i :class='option.icon'></i>
				<span class="m-menu-item-label">{{ option.label }}</span>
			</a>
		</div>
		<div class="m-menu-item" style="margin-top: 40px;">
			<a href="javascript:void(0)" @click="logout">
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
			logout() {
				this.$emit('logout')
			}
		}
	}
</script>
