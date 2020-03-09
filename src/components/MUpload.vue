<template>
	<div class="m-upload">
		<m-button @m-click="performClick"
			:shape="buttonShape"
			:label="buttonLabel"></m-button>
		<span class="m-upload-msg" v-if="message">{{ message }}</span>
		<div>
			<span class="m-upload-file-name" v-show="hiddenFileName">
				{{ fileName  | truncate(50, '...') }}
			</span>
			<span class="m-upload-file-name" v-show="hiddenFileName">
				<i class='bx bx-check m-upload-check-icon'></i>
			</span>
		</div>
		<!-- Hide native upload button -->
		<input type="file" 
			ref="uploadInput" 
			class="m-upload-input"
			:accept="accept"
			@change="handleFile">
	</div>
</template>
<script>
	import MButton from './MButton.vue'
	export default {
		name: 'm-upload',
		props: {
			message: String,
			buttonLabel: {
				type: String,
				default: 'Upload'
			},
			buttonShape: {
				type: String,
				default: 'square',
				validator(val) {
					return [
						'square',
						'rounded'
					].indexOf(val) !== -1
				}
			},
			accept: String,
		},
		components: { 
			MButton,  
		},
		data: function () {
			return {
				fileName: '',
				image: null,
				hiddenFileName: false
			}
		},
		methods: {
			performClick: function () {
				this.$refs.uploadInput.click();
			},
			handleFile: function (event) {
				this.hiddenFileName = true;

				let file = event.target.files[0];

				this.fileName = file.name;
				this.$emit('handleFile', file);
			}
		},
		filters: {
      truncate: function (text, length, suffix) {
        return text.substring(0, length) + suffix;
      }
    }
	}
</script>