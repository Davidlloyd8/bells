import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user || !!JSON.parse(localStorage.getItem("loggedInUser"));
    },
    loggedInUser() {
      JSON.parse(localStorage.getItem("loggedInUser"));
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addUser(state, user) {
      const users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        const newUsersList = [...users, user];
        localStorage.setItem("users", JSON.stringify(newUsersList));
      } else if (!users) {
        localStorage.setItem("users", JSON.stringify([user]));
      }
    },
    clearUser(state) {
      localStorage.removeItem("loggedInUser");
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, details) {
      commit("setUser", details);
    },
    async signup({ commit }, details) {
      commit("addUser", details);
    },
    async logout({ commit }) {
      commit("clearUser");
    },
  },
});
