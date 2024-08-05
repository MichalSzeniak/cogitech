<script setup>
import { computed } from "vue";
import PostItem from "./components/PostItem.vue";
import { useStore } from "vuex";
const store = useStore();
store.dispatch("fetchPosts");
const posts = computed(() => store.state.posts);
</script>

<template>
  <main>
    <div class="posts-container" v-if="posts.length">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else>Loading posts...</div>
  </main>
</template>

<style scoped>
.posts-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .posts-container {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
}

@media (max-width: 480px) {
  .posts-container {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
}
</style>
