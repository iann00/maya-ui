<template>
	<div class="m-avatar-upload center">
		<span class="m-avatar-upload-image-wrapper text-center">
			<m-avatar :img="image" :size="size" class="m-preview-image"></m-avatar>
			<m-floating-button
				:class="[`m-preview-circle-button`, `m-preview-circle-button-position__${size}`]"
				:size="iconSize"
				icon="bx bx-image-add" 
				@m-click="performClick">
			</m-floating-button>
		</span>
		<!-- Hide native upload button -->
		<input type="file" 
			ref="uploadInput" 
			class="hide"
			accept="image/*"
			@change="handleFile">
	</div>
</template>
<script>
import MAvatar from './MAvatar'	
import MFloatingButton from './MFloatingButton'

export default {
	name: 'm-avatar-upload',
	props: {
		img: String,
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
		},
		iconSize: {
			type: String,
			default: 'tiny',
			validator(val) {
				return [
					'tiny',
					'regular',
					'large'
				].indexOf(val) !== -1
			}
		}
	},
	components: {
		MAvatar,
		MFloatingButton
	},
	created() {
		this.image = this.img
	},
	data() {
		return {
			image: null
		}
	},
	methods: {
		/**
		 * Perform click in input file hidden
		 *
		 * @param {object} event
		 */
		performClick: function () {
			this.$refs.uploadInput.click();
		},

		/**
		 * Emit to parent component about file
		 *
		 * @param {object} event
		 */
		handleFile: function (event) {
			const file = event.target.files[0];
			this.$emit('handleFile', file);

			// Keep ref from context
			const self = this;

			let reader = new FileReader();
				reader.onload = function () {
					// Set the new image in preview
					self.image = reader.result;
				}
				reader.readAsDataURL(file);
			}
		},
	}
</script>