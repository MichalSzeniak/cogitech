import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    currentPage: 1,
    itemsPerPage: 10,
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        commit("SET_POSTS", posts);
      } catch (error) {
        console.error("Błąd pobierania postów:", error);
      }
    },
  },
});
