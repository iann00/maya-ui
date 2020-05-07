<template>
	<div id="app">
		<m-avatar-upload 
		img="https://i.picsum.photos/id/1029/4887/2759.jpg" 
		size="extra-large"
		@handleFile="handleFile"></m-avatar-upload>
	</div>
</template>
<script>
export default {
	name: 'App',
	methods: {
		handleFile(file) {
			console.log(file)
		}
	}
}
</script>