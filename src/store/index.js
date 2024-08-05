import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    currentPage: 1,
    itemsPerPage: 10,
    users: [],
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_USERS(state, users) {
      state.users = users;
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
        console.error("Post fetch error:", error);
      }
    },

    async fetchUsers({ commit }) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        commit("SET_USERS", users);
      } catch (error) {
        console.error("Author fetch error:", error);
      }
    },
  },
  getters: {
    postsWithAuthors: (state) => {
      return state.posts.map((post) => {
        const author = state.users.find((user) => user.id === post.userId);
        return {
          ...post,
          authorName: author ? author.name : "Unknown Author",
        };
      });
    },
  },
});
