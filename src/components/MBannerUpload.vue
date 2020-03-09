<template>
	<div class="m-banner-upload"
		:style="{ 'background-image': `url('${image}')` }">
		<m-floating-button
			class="m-banner-upload-button"
			:size="iconSize"
			icon="bx bx-image-add" 
			@m-click="performClick">
		</m-floating-button>
		<!-- Hide native upload button -->
		<input type="file" 
			ref="uploadInput" 
			class="hide"
			accept="image/*"
			@change="handleFile">
	</div>
</template>
<script>
import MFloatingButton from './MFloatingButton'

	export default {
		name: 'm-avatar-upload',
		props: {
			img: String,
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
			MFloatingButton
		},
		data() {
			return {
				image: null
			}
		},
		created() {
			// Set received image URL by prop to preview
			this.image = this.img;
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
				let file = event.target.files[0];
				this.$emit('handleFile', file);

				// Keep ref from context
				const that = this;

				let reader = new FileReader();
				reader.onload = function () {
					// Set the new image in preview
					that.image = reader.result;
				}
				reader.readAsDataURL(file);
			}
		},
	}
</script>