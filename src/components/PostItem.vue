<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  post: Object,
});
const expanded = ref(false);
const store = useStore();

const deletePost = async (post) => {
  if (confirm(`Are you sure you want to delete the post "${post.title}"?`)) {
    try {
      await store.dispatch("deletePost", post.id);
    } catch (error) {
      console.error("Error while deleting a post", error);
    }
  }
};
</script>

<template>
  <div class="post-card">
    <div>
      <button class="delete-button" @click="deletePost(post)">
        <span class="delete-icon">&times;</span>
      </button>
      <h3 class="post-title">{{ post.title }}</h3>

      <p :class="['post-content', { expanded: expanded }]">
        {{ post.body }}
      </p>

      <button
        v-if="post.body.length > 100"
        class="read-more"
        @click="expanded = !expanded"
      >
        {{ expanded ? "Show less" : "Show more" }}
      </button>
    </div>
    <p class="post-author">Author: {{ post.authorName }}</p>
  </div>
</template>

<style lang="scss">
.post-card {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background: #020817;
  transition: ease-in-out 0.3s all;
  padding: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #1e293b;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
}

.post-title {
  margin: 15px 0;
  font-size: 20px;
}

.post-content {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  &.expanded {
    -webkit-line-clamp: unset; /* Usuń ograniczenie linii */
  }
}

.read-more {
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 3px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #3b82f6;
    color: white;
  }
}

.post-author {
  font-size: 16px;
  color: #777;
}

.delete-button {
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  color: #777;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: background-color 0.3s ease, color 0.3s ease;
  position: absolute;
  right: -5px;
  top: -5px;

  &:hover {
    background-color: #c2c2c2;
  }
}

.delete-icon {
  font-size: 24px;
}
</style>
