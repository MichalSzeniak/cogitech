<script setup>
import { computed } from "vue";
import PostItem from "@/components/PostItem.vue";
import Pagination from "@/components/Pagination.vue";
import { useStore } from "vuex";
const store = useStore();
store.dispatch("fetchPosts");
store.dispatch("fetchUsers");

const paginatedPosts = computed(() => {
  const start = (store.state.currentPage - 1) * store.state.itemsPerPage;
  const end = start + store.state.itemsPerPage;
  return store.getters.postsWithAuthors.slice(start, end);
});
</script>

<template>
  <main>
    <div class="posts-container" v-if="paginatedPosts.length">
      <PostItem v-for="post in paginatedPosts" :key="post.id" :post="post" />
    </div>
    <div v-else>Loading posts...</div>
    <Pagination v-if="paginatedPosts.length" />
  </main>
</template>

<style lang="scss">
.posts-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
}
</style>
