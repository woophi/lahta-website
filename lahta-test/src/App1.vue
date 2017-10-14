<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/services">Услуги</router-link></li>
          <li><router-link to="/buildings">Объекты</router-link></li>
          <li><router-link to="/licence">Лицензии и Сертификаты</router-link></li>
          <li><router-link to="/contacts">Обратная связь</router-link></li>
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
