<template>
  <RouterView>
    
  </RouterView>
</template>

<script setup>
  import { onMounted } from 'vue'

  import { useStoreAuth } from './stores/storeAuth'

  const storeAuth = useStoreAuth()

  onMounted(() => {
    storeAuth.init()
  })
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>