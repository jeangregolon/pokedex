<script lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import "@/reset.css";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<template>
  <HeaderComponent />
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
}

#app {
  font-family: "Roboto", sans-serif;
}

.container {
  margin: 0 auto;
  max-width: 1366px;
}
</style>
