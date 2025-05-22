<script setup>
import { useCounterStore } from "#imports";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const { increment, decrement } = counterStore;
const { count } = storeToRefs(counterStore);
</script>

<template>
  <!-- div-->
  <v-container>
    <h1>Count:{{ count }}</h1>
    <v-btn @click="increment">+1する</v-btn>
    <v-btn @click="decrement">-1する</v-btn><br>
    <br>
    <nuxt-link to="/" class="ml-4">もどる</nuxt-link>
  </v-container>
  <!-- /div -->
</template>
