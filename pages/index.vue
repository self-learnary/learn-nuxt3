<template>
  <div>
    <h1>Home Page</h1>
    <div>
      <h2>Playground</h2>
      <BaseButton label="Click Me " @on-click="onButtonClick" />
      <div>
        <input ref="inputRef" type="text">
      </div>
      <UseOnClickOutside />
      <img src="~/assets/images/katakana-keyboard.png" width="100" alt="Katakana Keyboard">
    </div>
  </div>
</template>
<script setup lang="ts">
const onButtonClick = (e: string) => {
  // eslint-disable-next-line no-console
  console.log('e', e)
  alert('Button Clicked')
}
const provideData = ref<string>('bruh')
provide(/* key */ 'testProvideInject', /* value */ provideData)

const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  inputRef.value?.focus()
})

// Component refs type
// import MyModal from './MyModal.vue'

// const modal = ref<InstanceType<typeof MyModal> | null>(null)

// const openModal = () => {
//   modal.value?.open()
// }
</script>
