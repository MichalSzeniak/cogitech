<script setup>
import { useStore } from "vuex";
const store = useStore();
store.dispatch("fetchPosts");
</script>

<template>
  {{ console.log(store.state.posts) }}
  <main>initial</main>
</template>

<style scoped></style>
