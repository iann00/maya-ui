<template>
	<perfect-scrollbar>
		<div class="m-dialog" v-if="open">
			<div class="m-dialog-content">
				<div class="m-dialog-header">
					<span class="m-dialog-header-col">
						<m-title :text="title" v-if="title"></m-title>
					</span>
					<span class="m-dialog-header-col right">
						<m-close-button @m-click="closeDialog"></m-close-button>
					</span>
				</div>
				<div class="m-dialog-slot">
					<slot></slot>
				</div>
			</div>
		</div>
	</perfect-scrollbar>
</template>
<script>
	import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
	import MTitle from './MTitle'
	import MCloseButton from './MCloseButton'

	export default {
		name: 'm-dialog',
		props: {
			title: {
				type: String,
			},
			open: {
				twoWay: true,
				type: Boolean,
				default: false
			},
		},
		components: {
      MTitle,
      PerfectScrollbar,
      MCloseButton
    },
    data() {
			return {
				openDialog: false
			}
		},
		methods: {
			/**
			 * Close dialog and emit the event to parent component
			 *
			 */
			closeDialog () {
				this.$emit('closeDialog');
				this.open = false;
			}
		},
	}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
