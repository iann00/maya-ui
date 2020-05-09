<template>
	<div id="app">
		<m-toolbar
			avatar="https://i.picsum.photos/id/573/2509/1673.jpg"
			@on-menu-click="openMenu"
			@on-avatar-click="openMenu"
			@on-notification-click="alert('not')"
			@on-search-click="alert('search')"></m-toolbar>
		<m-menu 
			:options="options" 
			logo="https://i.picsum.photos/id/569/2509/1673.jpg"
			@on-close="closeMenu"
			v-if="isShowMenu"></m-menu>
	</div>
</template>
<script>
export default {
	name: 'App',
	data() {
		return {
			options: [
				{ ref: '/', icon: 'bx bx-cookie', label: 'Teste'},
				{ ref: '/', icon: 'bx bx-cookie', label: 'Teste'},
				{ ref: '/', icon: 'bx bx-cookie', label: 'Teste'},
				{ ref: '/', icon: 'bx bx-cookie', label: 'Teste'}
			],
			isShowMenu: false
		}
	},
	mounted() {
		this.$nextTick(function () {
			this.onMatchMediaQuery()
		})
	},
	methods: {
		onMatchMediaQuery() {
			if (window.matchMedia("(min-width: 600px)").matches) {
        this.isShowMenu = true
			} else {
        this.isShowMenu = false
			}
		},
		openMenu() {
			this.isShowMenu = true
		},
		closeMenu() {
			this.isShowMenu = false
		},
		alert(arg) {
			console.log(arg)
		}
	}
}
</script>
