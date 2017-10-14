<template>
  <div id="app">
    <!-- <v-app>
      <v-navigation-drawer app>
          <router-link to="/">Главная</router-link>
          <router-link to="/about">О Компании</router-link>
          <router-link to="/services">Услуги</router-link>
          <router-link to="/shares">Акции</router-link>
          <router-link to="/buildings">Объекты</router-link>
          <router-link to="/licence">Лицензии и Сертификаты</router-link>
          <router-link to="/contacts">Обратная связь</router-link>
      </v-navigation-drawer>
      <v-toolbar app></v-toolbar>
      <main>
        <v-content>
          <router-view>
            <v-container fluid></v-container>
          </router-view>
        </v-content>
      </main>
      <v-footer app></v-footer>
    </v-app> -->
    <div>
      Название: ООО "ЛАХТА ИНЖИНИРИНГ СПБ"
    </div>
    <div>
      Телефон: 222222222222
    </div>
    <div>
      Организация внутренних инженерных систем, зданий и сооружений.
      <ul>
        <li>вентиляция</li>
        <li>кондиционирование</li>
        <li>отопление</li>
        <li>водоснабжение</li>
        <li>автоматизация</li>
      </ul>
    </div>
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about">О Компании</router-link></li>
          <li><router-link to="/services">Услуги</router-link></li>
          <li><router-link to="/shares">Акции</router-link></li>
          <li><router-link to="/buildings">Объекты</router-link></li>
          <li><router-link to="/licence">Лицензии и Сертификаты</router-link></li>
          <li><router-link to="/contacts">Обратная связь</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <div>Футер</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
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
}
</style>
