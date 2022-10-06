<template>
  <button @click="emit('onClick', 'param')">
    {{ label }} - {{ testProvideInject }}
  </button>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string;
}>(), {
  label: 'Button'
})

const emit = defineEmits<{
  (e: 'onClick', val: string): void
}>()

const label = ref<string>(props.label)

const testProvideInject = inject<string>('testProvideInject')
</script>
