<template>
	<div>
		<div :class="[
			`m-input`,
			`m-input-state-${state}`,
			`m-input__${enable ? 'disabled' : 'none'}`
		]"
		:style="{ width: width + '%'}">
			<input :value="value"
				ref="mInput"
				:placeholder="placeholder"
				@input="$emit('input', $event.target.value)" :disabled="enable">
			<span class="m-input-state-icon m-input-state-icon__success" 
				v-if="state == 'success'">
				<i class="bx bxs-check-circle"></i>
			</span>	
			<span class="m-input-state-icon m-input-state-icon__error" 
				v-if="state == 'error'">
				<i class="bx bxs-error-circle"></i>
			</span>
			<span class="m-input-state-icon m-input-state-icon__info" 
				v-if="state == 'info'">
				<i class='bx bxs-message-alt-error'></i>
			</span>
		</div>
		<div class="m-input-counter" v-if="limit > 0"
			:class="{ 
				'm-input-message__regular': counter > 0, 
				'm-input-counter__error': counter == 0 
			}">
			{{ limit }}/{{ counter }}
		</div>
		<div class="m-input-message" v-if="message !== null">
			{{ message }}
		</div>
	</div>
</template>
<script>
	export default {
		name: 'm-input',
		props: {
			value: null,
			state: String,
			enable: Boolean,
			width: {
				type: Number,
				default: 50
			},
			limit: {
				type: Number,
				default: 0
			},
			message: {
				type: String,
				default: null
			},
			placeholder: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				isExceeded: false
			}
		},
		computed: {
			counter() {
				let length = this.value.length;
				let count = this.limit - length;

				if (count < 0) count = 0;
				if (length > this.limit) {
					this.$emit('limit-exceeded', true)
				}
				else {
					this.$emit('limit-exceeded', false)
				}
				return count;
			}
		}
	}
</script>
