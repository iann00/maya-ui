<template>
	<div>
   <span>
    <label class="m-switch">
    <input type="checkbox" v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"><div class="slider round"></div>
    </label>
   </span>
   <span v-text="label"></span> 
  </div>
</template>
<script>
	export default {
		name: 'm-switch',
		props: ['value', 'label'],
	}
</script>
