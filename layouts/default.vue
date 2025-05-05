<script setup lang="ts">
useHead(
  {
    title: 'Nuxt Pinia Sample App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: []
  }
)
</script>

<template>
  <div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>