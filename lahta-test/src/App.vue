<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <p id="text" v-if="isAuth">Welcome...</p>

    <button else>Login</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isAuth: false,
    };
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
