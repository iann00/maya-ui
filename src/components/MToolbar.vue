<template>
	<div class="m-toolbar">
		<div class="col">
			<i class='bx bx-menu' @click="onMenuClick"></i>
		</div>
		<div class="col right">
			<ul>
				<li>
					<a href="javascript:void(0)" @click="onSearchClick">
						<i class="bx bx-search"></i>
					</a>
				</li>
				<li>
					<a href="javascript:void(0)" @click="onNotificationClick">
						<i class="bx bxs-inbox"></i>
					</a>
				</li>
			</ul>
			<div class="m-toolbar-avatar"
				@click="onAvatarClick"
				:style="{ 'background-image': `url('${avatar}')` }">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'm-toolbar',
		props: {
			avatar: {
				type: String,
				default: ''
			},
			notifications: {
				type: Array,
				default: function () {
					return []
				}
			},
			showIndicator: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				isOpenDropdown: false,
			}
		},
		methods: {
			/**
			 * Emit menu click event
			 *
			 */
			onMenuClick() {
				this.$emit('on-menu-click')
			},

			/**
			 * Emit user click event
			 */
			onAvatarClick() {
				this.$emit('on-avatar-click')
			},

			/**
			 * Emit notification click event
			 */
			onNotificationClick() {
				this.$emit('on-notification-click')
			},

			/**
			 * Emit search click event
			 */
			onSearchClick() {
				this.$emit('on-search-click')
			},
			
			/**
			 * Emit notifications scroll end event
			 */
			notificationsReachEnd() {
				this.$emit('notifications-reach-end')
			},

			/**
			 * Switch notifications visibility and 
			 * emit open/close click event
			 */
			switchDropdown() {
				this.isOpenDropdown = !this.isOpenDropdown;

				let action = this.isOpenDropdown ? 'open' : 'close'
				this.$emit(`notifications-${action}`)
			}
		}
	}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
