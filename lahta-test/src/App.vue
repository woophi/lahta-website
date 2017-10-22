<template>
  <div id="app">
    <div class="main-header">
      <div class="main-title">
        <p class="main-title-header">ООО "ЛАХТА ИНЖИНИРИНГ СПБ"</p>
        <span>Организация внутренних инженерных систем, зданий и сооружений.</span>
        <div>
          <v-btn
            flat
          >
            <v-icon>fa-phone</v-icon>&nbsp;
            773260825
          </v-btn>
        </div>
      </div>
      <div class="main-card-flex">
        <div class="main-card">
          <p>
            <v-icon>fa-arrow-circle-o-right</v-icon>
            вентиляция
          </p>
          <p>
            <v-icon>fa-arrow-circle-o-right</v-icon>
            кондиционирование
          </p>
          <p>
            <v-icon>fa-arrow-circle-o-right</v-icon>
            отопление
          </p>
          <p>
            <v-icon>fa-arrow-circle-o-right</v-icon>
            водоснабжение
          </p>
          <p>
            <v-icon>fa-arrow-circle-o-right</v-icon>
            автоматизация
          </p>
        </div>
      </div>
    </div>

    <nav>
      <router-link  to="/" exact>
        <v-btn
          v-if="exact"
          color="info"
        >
          Главная
        </v-btn>
        <v-btn
          v-else
          color="info"
          outline
        >
          Главная
        </v-btn>
      </router-link>
      <router-link to="/about" exact>
        <v-btn
          color="info"
          v-if="exact"
        >
          О Компании
        </v-btn>
        <v-btn
          v-else
          color="info"
          outline
        >
          О Компании
        </v-btn>
      </router-link>
      <router-link to="/services">
        <v-btn
          color="info"
          outline
        >
          Услуги
        </v-btn>
      </router-link>
      <router-link to="/shares">
        <v-btn
          color="info"
          outline
        >
          Акции
        </v-btn>
      </router-link>
      <router-link to="/buildings">
        <v-btn
          color="info"
          outline
        >
          Объекты
        </v-btn>
      </router-link>
      <router-link to="/licence">
        <v-btn
          color="info"
          outline
        >
          Лицензии и Сертификаты
        </v-btn>
      </router-link>
      <router-link to="/contacts">
        <v-btn
          color="info"
          outline
        >
          Контакты
        </v-btn>
      </router-link>
    </nav>
    <router-view></router-view>
    <v-footer
      class="pa-3"
      color="grey darken-4"
    >
      <v-spacer></v-spacer>
      <div class="main-footer">© ООО "ЛАХТА ИНЖИНИРИНГ СПБ" {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      exact: false,
    };
  },
};
</script>

<style lang="stylus">
#app {
  user-select none
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size 16px !important
}
.main-header
  display flex
  padding 0.5rem
  flex-wrap wrap
  flex 1
  flex-grow 1
  color #fff
  background-color #2e7bb3
  box-shadow 0 0 1rem 0 rgba(0,0,0,0.5)

a
  text-decoration none
  color #fff
  &:hover, &:active, &:link
    color  red

.main-title
  box-sizing border-box
  width calc(100% - 250px)
  min-width 300px
  display: flex;
  flex-direction column
  justify-content center
  margin auto
  span
    color rgba(255, 255, 255, 0.7)

.main-title-header
  font-size 2rem
  font-weight bold

.main-card-flex
  margin auto
  box-sizing border-box
  display flex
  min-width 250px
  width 250px
  justify-content center

.main-card
  margin auto
  :first-child
      margin 0.25rem 0
  p
    margin-bottom 0.25rem
    text-align left


.main-footer
  color #757575
</style>
