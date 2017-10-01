<template>
  <div id="app">
    <div v-bind:style="[myStyle, ourStyle]">kek</div>
    <div v-bind:class="{ active: isAuth }">
    ...
    </div>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      myStyle: { color: 'red', backgroundColor: 'rgb(0,0,255)' },
      ourStyle: { fontSize: '36px', position: 'relative' },
      isAuth: true,
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
