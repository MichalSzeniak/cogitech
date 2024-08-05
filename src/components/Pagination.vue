<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const totalPosts = computed(() => store.state.posts.length);
const itemsPerPage = computed(() => store.state.itemsPerPage);

const currentPage = computed({
  get() {
    return store.state.currentPage;
  },
  set(page) {
    store.commit("SET_CURRENT_PAGE", page);
  },
});
</script>

<template>
  <div class="paginate-container">
    <vue-awesome-paginate
      :total-items="totalPosts"
      :items-per-page="itemsPerPage"
      v-model="currentPage"
    >
      <template #prev-button>
        <span class="back-button paginate-buttons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="8"
            height="8"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
          Prev
        </span>
      </template>
      <template #next-button>
        <span class="next-button paginate-buttons">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="8"
            height="8"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<style lang="scss">
.paginate-container {
  background-color: #f0f0f0;
  margin: 20px 0;
  border-radius: 5px;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
}

.paginate-buttons {
  width: 40px;
  height: 40px;
  margin-inline: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #91b8f7;
  }
}

.back-button {
  width: 70px;

  svg {
    transform: rotate(180deg);
  }
}

.next-button {
  width: 70px;
}

.active-page {
  background-color: #3b82f6;
  color: #f2f2f2;

  &:hover {
    background-color: #3b82f6;
    color: #f2f2f2;
  }
}

.back-button:active,
.next-button:active {
  background-color: #f2f2f2;
}
</style>
