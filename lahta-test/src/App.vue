<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        >
        {{product.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      products: [
        { id: 1, name: 'iPhone7' },
        { id: 2, name: 'iPhone6' },
      ],
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
li {
  display: block;
}
</style>
