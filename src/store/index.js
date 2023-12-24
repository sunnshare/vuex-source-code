import Vue from "vue";
import Vuex from "@/vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    age: 18,
  },
  getters: {
    myAge(state) {
      return state.age + 6;
    },
  },
  mutations: {
    add(state, payload) {
      state.age += payload;
    },
  },
  actions: {
    add({ commit }, payload) {
      setTimeout(() => {
        commit("add", payload);
      }, 1000);
    },
  },
  modules: {},
});
