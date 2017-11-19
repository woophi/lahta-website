<template>
  <div id="app">
    <div>
    <div class="main-header">
      <div class="main-title">
        <p class="main-title-header">ООО "ЛАХТА ИНЖИНИРИНГ СПБ"</p>
        <span>Организация внутренних инженерных систем, зданий и сооружений.</span>
        <div>
          <a href="tel:+78122402142">
            <v-btn
              flat
            >
              <v-icon>fa-phone</v-icon>&nbsp;
              +7 (812) 240-21-42
            </v-btn>
          </a>
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

    <nav class="navigation">
      <router-link  to="/" exact>
        <v-btn
          color="info"
          :outline="!(routerPath === '/')"
        >
          <v-icon>fa-home</v-icon>
          &nbsp;
          Главная
        </v-btn>
      </router-link>
      <router-link to="/about" exact>
        <v-btn
          :outline="!(routerPath === '/about')"
          color="info"
        >
          <v-icon>fa-bank</v-icon>
          &nbsp;
          О Компании
        </v-btn>
      </router-link>
      <router-link to="/services">
        <v-btn
          :outline="!(routerPath === '/services')"
          color="info"
        >
          <v-icon>fa-diamond</v-icon>
          &nbsp;
          Услуги
        </v-btn>
      </router-link>
      <router-link to="/buildings">
        <v-btn
          :outline="!(routerPath === '/buildings')"
          color="info"
        >
          <v-icon>fa-building</v-icon>
          &nbsp;
          Объекты
        </v-btn>
      </router-link>
      <router-link to="/licences">
        <v-btn
          :outline="!(routerPath === '/licences')"
          color="info"
        >
          <v-icon>fa-book</v-icon>
          &nbsp;
          Лицензии и Сертификаты
        </v-btn>
      </router-link>
      <router-link to="/contacts">
        <v-btn
          :outline="!(routerPath === '/contacts')"
          color="info"
        >
          <v-icon>fa-pencil-square</v-icon>
          &nbsp;
          Контакты
        </v-btn>
      </router-link>
    </nav>
    <router-view class="super-height"></router-view>
    <v-footer
      class="pa-3"
      color="grey darken-4"
    >
      <v-spacer></v-spacer>
      <div class="main-footer">
        <b>ОГРН</b> 1147847436736
        <b>ИНН</b> 7811598377
        <b>КПП</b> 781101001
        © ООО "ЛАХТА ИНЖИНИРИНГ СПБ" {{ new Date().getFullYear() }}
      </div>
    </v-footer>
    </div>
    <div v-if="loading" class="absolute-loader">
      <Spinner color="#2e7bb3" ></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/pages/Spinner';
import router from './router';

export default {
  name: 'app',
  components: {
    Spinner,
  },
  data() {
    return {
      routerPath: router.currentRoute.path,
      outline: true,
      loading: true,
    };
  },
  // beforeCreate() {
  //   this.routerPath = router.currentRoute.path;
  // },
  beforeUpdate() {
    this.routerPath = router.currentRoute.path;
  },
  mounted() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'initial';
      this.loading = false;
    }, 1000);
  },

};
</script>

<style lang="stylus">
body
  padding 0 !important
  width 100%
  height 100%
#app {
  user-select none
  font-family: "SF Optimized", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", "Segoe UI", "Roboto", sans-serif
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size 16px !important
}
.super-height
  min-height 60vh

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
  color inherit
  &:hover, &:active, &:link
    color inherit

.main-title
  box-sizing border-box
  width calc(100% - 250px)
  min-width 300px
  display: flex;
  flex-direction column
  justify-content center
  margin auto
  span
    color rgba(255, 255, 255, 0.9)
    font-size 18px

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
    font-weight 700

.navigation
  margin 1rem auto

.main-footer
  user-select text
  color #757575

.absolute-loader
  position absolute
  display flex
  top 0
  left 0
  z-index 10000
  background-color #fff
  width 100%
  height 100%
  overflow hidden
  flex-direction column
.v-spinner
  margin auto
</style>
