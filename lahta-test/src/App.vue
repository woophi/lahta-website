<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">admin</router-link></li>
          <li><router-link to="/cart">cart</router-link></li>
        </ul>
      </div>
    </nav>
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
