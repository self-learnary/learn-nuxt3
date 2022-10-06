<template>
  <div>
    <nav>
      <header>
        <h1>Vue 3 Playground</h1>
      </header>
    </nav>
    <slot />
    <footer>
      <RouterLink to="/">
        Home
      </RouterLink> |
      <button @click="onClickTestPage">
        Test Page
      </button>
    </footer>
  </div>
</template>
<script setup lang="ts">

const router = useRouter()

const onClickTestPage = () => {
  // eslint-disable-next-line no-console
  console.log('router.currentRoute.value', router.currentRoute.value.name)
  router.push('/test')
}
</script>
