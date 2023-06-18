<template>
  <div class="about">
    <h1>My Tasks</h1>
    <Tasks />
  </div>
</template>

<script>
import Tasks from "@/components/Tasks.vue";

export default {
  name: "HomeView",
  components: {
    Tasks,
  },
};
</script>
