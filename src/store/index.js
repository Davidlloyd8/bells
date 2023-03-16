import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    users: [],
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    clearUser(state) {
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
