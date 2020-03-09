<template>
	<div class="m-dialog" v-if="open">
		<div class="m-dialog-content">
			<div class="m-dialog-header">
				<span class="m-dialog-header-col">
					<m-title :text="title" v-if="title"></m-title>
				</span>
				<span class="m-dialog-header-col right">
					<m-floating-button 
						@m-click="closeDialog" 
						size="tiny" 
						state="light"
						icon="bx bx-x">
					</m-floating-button>
				</span>
			</div>
			<div class="m-dialog-slot">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script>
	import MFloatingButton from './MFloatingButton'
	import MTitle from './MTitle'

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
      MFloatingButton,
      MTitle
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
			closeDialog: function () {
				this.$emit('closeDialog');
				this.open = false;
			}
		},
	}
</script>
