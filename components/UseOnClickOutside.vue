<template>
  <div>
    <h2>On Click Outside</h2>
    <h3 ref="clickOutsideMe">
      Click outside me
    </h3>
  </div>
</template>
<script setup lang="ts">

const clickOutsideMe = ref(null)
useOnClickOutside(clickOutsideMe, () => {
  // eslint-disable-next-line no-console
  console.log('click outside')
})
</script>
