<script setup>
const props = defineProps({
  post: Object,
});
</script>

<template>
  <div class="post-card">
    <div>
      <button class="delete-button" @click="deletePost">
        <span class="delete-icon">&times;</span>
      </button>
      <h3 class="post-title">{{ post.title }}</h3>

      <p v-if="post.showMore || post.body < 100">{{ post.body }}</p>
      <p v-else>{{ post.body.slice(0, 100) }}...</p>

      <button
        v-if="post.body.length > 100"
        class="read-more"
        @click="post.showMore = !post.showMore"
      >
        {{ post.showMore ? "Show less" : "show more" }}
      </button>
    </div>
    <p class="post-author">Autor: {{ post.author }}</p>
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
  margin-bottom: 10px;
  font-size: 20px;
}

.post-content {
  margin-bottom: 5px;
}

.read-more {
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 3px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.read-more:hover {
  background-color: #3b82f6;
  color: white;
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
}

.delete-button:hover {
  background-color: #c2c2c2;
}

.delete-icon {
  font-size: 24px;
}
</style>
