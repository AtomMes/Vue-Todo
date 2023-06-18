<template>
  <div class="tasks-container">
    <div class="input-container">
      <input
        ref="taskInput"
        v-model="newTask"
        placeholder="New task"
        @keydown.enter="submitTask"
      />
      <button @click="submitTask">Add</button>
    </div>
    <div v-for="(task, i) in tasks" :key="i" class="task-wrapper">
      <div>{{ task.text }}</div>
      <button @click="editTask(i)">Edit</button>
      <button @click="deleteTask(i)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Tasks",
  data() {
    return {
      newTask: "",
      editedTask: null,
    };
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapMutations(["addTask", "updateTask", "removeTask"]),
    submitTask() {
      if (this.newTask.length === 0) return;

      if (this.editedTask === null) {
        this.addTask({ text: this.newTask });
      } else {
        this.updateTask({ index: this.editedTask, text: this.newTask });
      }
      this.editedTask = null;
      this.newTask = "";
    },
    deleteTask(i) {
      this.removeTask(i);
    },
    editTask(i) {
      this.newTask = this.tasks[i].text;
      this.editedTask = i;
      this.$nextTick(() => {
        this.$refs.taskInput.focus();
      });
    },
  },
};
</script>

<style>
.tasks-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.input-container {
  display: flex;
  margin-bottom: 10px;
}

input {
  flex: 1;
  padding: 5px;
  font-size: 16px;
}

button {
  padding: 5px 10px;
  margin-left: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.task-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
}

.task-wrapper div {
  flex: 1;
  margin-right: 10px;
}

.task-wrapper button {
  background-color: #f44336;
}
</style>
