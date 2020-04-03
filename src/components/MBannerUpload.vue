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
		<div class="m-banner-upload-label" v-if="infos.fileName">
			{{ infos.fileName }} &bull; <b>{{ infos.fileSize}}</b>
		</div>	
	</div>
</template>
<script>
import MFloatingButton from './MFloatingButton'

	export default {
		name: 'm-banner-upload',
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
				image: null,
				infos: {
					fileName: null,
					fileSize: null
				}
			}
		},
		created() {
			// Set received image URL by prop to preview
			this.image = this.img;
		},
		methods: {
			/**
			 * Perform click in input file hidden
			 */
			performClick() {
				this.$refs.uploadInput.click();
			},

			/**
			 * Emit to parent component about file
			 *
			 * @param {object} event
			 */
			handleFile(event) {
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

				this.infos.fileName = file.name
				this.infos.fileSize = this.bytesToSize(file.size)
			},

			/**
			 * Format bytes from file to formatted pattern
			 *
			 * @param {object} bytes
			 **/
			bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';

        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
			}
		},
	}
</script>