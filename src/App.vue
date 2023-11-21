<template>
  <div id="app">
    <Transference />
  </div>
</template>

<script>
import Transference from "./components/Transference.vue";

export default {
  name: "App",
  components: {
    Transference,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
