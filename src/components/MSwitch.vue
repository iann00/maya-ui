<template>
	<div>
   <span>
    <label class="m-switch">
    <input type="checkbox" :checked="value"
      @input="$emit('input', $event.target.checked)"><div class="slider round"></div>
    </label>
   </span>
   <span class="m-switch-label" v-text="label"></span> 
  </div>
</template>
<script>
	export default {
		name: 'm-switch',
		props: ['value', 'label'],
	}
</script>
