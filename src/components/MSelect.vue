<template>
	<div class="m-select">
		<div class="m-select-selected" @click="openOptions">
			{{ display }} 
			<span class="m-select-arrow">
				<i class='bx bx-chevron-down' @click="openOptions"></i>
			</span>
		</div>
		<div class="m-select-options m-elevation-light" v-if="isOpenOptions">
			<perfect-scrollbar>
				<div style="max-height: 150px">
					<div class="m-select-option"
						v-for="(option, i) in options" :key="i"
						@click="select(option)">
						{{ option.label }}
						<span class="m-select-option-selcted"
							:class="{'bounce animated': animated}" @animationend="animated = false">
							<i class='bx bxs-check-circle' v-if="option.selected"></i>
						</span>
					</div>
				</div>
			</perfect-scrollbar>
		</div>
	</div>
</template>
<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
	name: 'MSelect',
	props: {
		label: {
			type: String,
			default: 'Select'
		},
		options: {
			type: Array,
			default: function () {
				return []
			}
		}
	},
	components: {
		PerfectScrollbar
	},
	data() {
		return {
			isOpenOptions: false,
			selected: null,
			animated: false
		}
	},
	created() {
		// Handle intial selection by user
		this.options.forEach(opt => {
			if (opt.selected) this.handleSelection(opt)
		})
	},
	methods: {
		/**
		 * Switch select options oppening
		 * 
		 **/
		openOptions() {
			this.switchAnimation()
			this.isOpenOptions = !this.isOpenOptions
		},

		/**
		 * Handle user selection on option and emit
		 * event
		 * 
		 * @param {object} option
		 **/
		select(option) {
			this.isOpenOptions = false

			this.handleSelection(option)
      this.$emit('selection', option.key)
		},

		/**
		 * Handle icon for selection on options and
		 * set on display
		 *
		 */
		handleSelection(option) {
			this.selected = option

			this.options.forEach(opt => {
				opt['selected'] = opt.key === option.key 
			})
		},

		/**
		 * Call to animate chevron rotation
		 */
		switchAnimation() {
			this.animated = true
		} 
	},
	computed: {
		/**
		 * Avoid modify label prop directally. Check if selected
		 * not is null and show
		 **/
		display() {
			return !this.selected ? this.label : this.selected.label
		}
	}
}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>