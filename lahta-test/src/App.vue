<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <button @click="toggle">Click me</button>
    <p id="text" v-show="isShown">Lorem ipsum dolor sit amet,...</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
