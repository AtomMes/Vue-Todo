import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const TASKS_KEY = "tasks";

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
    updateTask(state, { index, text }) {
      state.tasks[index].text = text;
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
    loadTasks(state) {
      const savedTasks = localStorage.getItem(TASKS_KEY);
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
      }
    },
  },
  actions: {
    initializeStore({ commit }) {
      commit("loadTasks");
    },
  },
});
  