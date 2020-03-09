<template>
	<div class="m-item" 
		:class="[
			`m-elevation-${elevation}`, 
			`m-item-hover-${hover}`
			]">
		<div>
			<div class="row">
				<div class="col-2 col-2-sm">
					<m-avatar
						class="align-middle"
						:img="img"
						size="regular"
						:shape="imgShape"></m-avatar>
				</div>
				<div class="col-8 col-8-sm">
					<div class="m-item-title">
						{{title}}
					</div>
					<div class="m-item-subtitle">
						{{subtitle}}
					</div>
				</div>
				<div class="col-2 col-2-sm right">
					<span class="m-item-icon-box">
						<a href="#">
							<i :class="[icon]"></i>
						</a>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MAvatar from './MAvatar.vue'

	export default {
		name: 'm-item',
		props: {
			title: {
				type: String,
				default: null
			},
			subtitle: {
				type: String,
				default: null
			},
			img: {
				type: String,
				default: null
			},
			icon: {
				type: String,
				default: null
			},
			imgShape: {
				type: String,
				default: 'square',
				validator: function (value) {
					return [
						'square', 
						'circle'
					].indexOf(value) !== -1
				}
			},
			hover: {
				type: Boolean,
				default: true
			},
			elevation: {
				type: String,
				default: 'light',
				validator: function (value) {
					return [
						'none',
						'light',
						'medium',
						'high'
					].indexOf(value) !== -1
				}
			},
		},
		components: {
			MAvatar,
		}
	}
</script>