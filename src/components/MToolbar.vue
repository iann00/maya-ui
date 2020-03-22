<template>
	<div class="m-toolbar">
		<span class="m-toolbar-col">
			<span style="margin-left: -2px;">
				<m-avatar
					class="hidden-in-ms"
					:img="logo"
					size="tiny"></m-avatar>
			</span>
			<span class="m-toolbar-reponsive-icon" >
				<a href="javascript:void(0)" @click="menuClick">
					<i class='bx bx-menu 
						m-toolbar-hamburger-icon'></i>
				</a>
			</span>
		</span>
		<span class="m-toolbar-col hidden-in-ms center">
			<m-input type="text" 
				state="flat"
				:placeholder="searchPlaceholder"
				:width="100"
				@input.native="searchInput($event)"></m-input>
		</span>
		<span class="m-toolbar-col right">
			<span>
				<span class="m-notification-indicator" v-show="showIndicator"></span>
				<a href="javascript:void(0)" 
					@click="switchDropdown">
					<i class='bx bx-bell m-toolbar-notification-icon'></i>
				</a>
				<div class="m-dropdown m-elevation-light" v-show="isOpenDropdown">	
					<perfect-scrollbar>
						<div class="m-dropdown-options">
							<div class="m-dropdown-options">
							<div class="m-dropdown-options-empty center" v-if="notifications == []">
								Nada aqui...
							</div>
							<div v-if="notifications">
								<m-notification 
									v-for="(notification, i) in notifications"
									:key="i"
									:data="notification">
                </m-notification>
							</div>
						</div>
						</div>
					</perfect-scrollbar>
			</div>
			</span>
			<span>
				<m-avatar
					:img="user"
					size="tiny"
					@m-click="userClick"></m-avatar>
			</span>
		</span>
	</div>
</template>
<script>
	import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
	import MAvatar from './MAvatar.vue'
	import MInput from './MInput.vue'
	import MNotification from './MNotification'

	export default {
		name: 'm-toolbar',
		props: {
			user: {
				type: String,
				default: ''
			},
			logo: {
				type: String,
				default: ''
			},
			searchPlaceholder: {
				type: String,
				default: 'Search'
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
		components: {
			MAvatar,
			MInput,
			MNotification,
			PerfectScrollbar
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
			menuClick() {
				this.$emit('menu-click')
			},

			/**
			 * Emit user click event
			 *
			 */
			userClick() {
				this.$emit('user-click')
			},

			/**
			 * Emit search input event
			 *
			 * @param {object} e
			 */
			searchInput(e) {
				this.$emit('search-input', e.target.value)
			},

			/**
			 * Emit notifications scroll end event
			 *
			 */
			notificationsReachEnd() {
				this.$emit('notifications-reach-end')
			},

			/**
			 * Switch notifications visibility and 
			 * emit open/close click event
			 *
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
