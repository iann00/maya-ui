<template>
	<div>
  <span class="m-switch-label" v-text="label" v-if="!labelRight"></span>
   <span>
    <label class="m-switch">
    <input type="checkbox" :checked="value"
      @input="$emit('input', $event.target.checked)"
      v-model="val"><div class="slider round"></div>
    </label>
   </span>
   <span class="m-switch-label" v-text="label"  v-if="labelRight"></span> 
  </div>
</template>
<script>
	export default {
		name: 'm-switch',
    props: {
      value: String,
      label: {
        type: String,
        default: null
      },
      labelRight: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        val: false
      }
    },
    watch: {
      val(newVal) {
        this.$emit('m-change', newVal)
      }
    }
	}
</script>
