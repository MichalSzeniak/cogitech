import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
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
