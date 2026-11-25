<script setup>
const counter = useCounterStore();
</script>

<template>
  <div>
    <nuxt-link to="/count">count ページへ飛ぶ </nuxt-link> <!-- countページに遷移する -->
    <p>ボタンを{{ counter.count }}回おしました!</p>
  </div>
</template>