<template>
	<div class="m-header">
		<div class="m-header-col">
			<m-title :text="title"></m-title>
		</div>
		<div class="m-header-col right">
			<m-switch :label="switchLabel" 
				@m-change="changeVal"
				v-if="showSwitch"></m-switch>
		</div>
	</div>
</template>
<script>
import MTitle from './MTitle'
import MSwitch from './MSwitch'

export default {
	name: 'm-header',
	props: {
		title: {
			type: String,
			default: null
		},
		showSwitch: {
			type: Boolean,
			default: false
		},
		switchLabel: {
			type: String,
			default: null
		}
	},
	components: {
		MTitle,
		MSwitch
	},
	methods: {
		changeVal(val) {
			this.$emit('m-switch', val)
		}
	}
}
</script>