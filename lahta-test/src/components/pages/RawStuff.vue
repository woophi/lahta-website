<template>
  <div v-if="goTo !== null">
    <header class="main-header dark-accent white-text">
      <div class="raw-title">
        <span class="main-title-subheader mx-2 my-2">LAHTA SPB</span>
        <nav class="navigation">
          <router-link to="/raw" exact>
            <v-btn color="green darken-3"  class="white-text" :style="routerPath === '/raw' ? selectedBtn : {}">
              <v-icon>fa-home</v-icon>&nbsp;
              Главная
            </v-btn>
          </router-link>
          <router-link to="/raw/about" exact>
            <v-btn color="green darken-3" class="white-text" :style="routerPath === '/raw/about' ? selectedBtn : {}">
              <v-icon>fa-bank</v-icon>&nbsp;
              О Компании
            </v-btn>
          </router-link>
          <router-link to="/raw/services">
            <v-btn color="green darken-3" class="white-text" :style="routerPath === '/raw/services' ? selectedBtn : {}">
              <v-icon>fa-diamond</v-icon>&nbsp;
              Услуги
            </v-btn>
          </router-link>
          <router-link to="/raw/contacts">
            <v-btn color="green darken-3" class="white-text" :style="routerPath === '/raw/contacts' ? selectedBtn : {}">
              <v-icon>fa-pencil-square</v-icon>&nbsp;
              Контакты
            </v-btn>
          </router-link>
        </nav>
        <div>
          <a href="tel:+78122402142">
            <v-btn flat>
              <v-icon>fa-phone</v-icon>&nbsp;
              +7 (812) 240-21-42
            </v-btn>
          </a>
        </div>
      </div>
    </header>

    
    <main class="main-height">
      <router-view></router-view>
    </main>
    <v-footer class="pa-3" color="grey darken-4">
      <v-spacer></v-spacer>
      <div class="main-footer blue-text footeradd">
        <span>
          создание сайта
          <b>
            <u>
              <a
                href="https://vk.com/space_goose"
                target="_blank"
                rel="nofollow noopener"
              >Константин Михеев</a>
            </u>
          </b>
        </span>
        <span>© LAHTA SPB {{ new Date().getFullYear() }}</span>
      </div>
    </v-footer>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../../router';

export default {
  props: ['changeGoto', 'goTo'],
  data() {
    return {
      routerPath: router.currentRoute.path,
      outline: true,
      selectedBtn: {
        borderBottom: '2px solid #F1E8E8 !important',
        transition: '.2s ease'
      }
    };
  },
  beforeUpdate() {
    this.routerPath = router.currentRoute.path;
    if (router.currentRoute.path === '/') {
      this.changeGoto(null);
    }
  },
  updated() {
    if (
      this.goTo === 'vent' &&
      router.currentRoute.path.indexOf('raw') !== -1
    ) {
      this.changeGoto('raw');
    } else if (
      this.goTo === 'raw' &&
      router.currentRoute.path.indexOf('vent') !== -1
    ) {
      this.changeGoto('vent');
    }
  },
};
</script>

<style lang="stylus">
.main-height
  min-height calc(100vh - 130px)
.green-color
  background-color #0e9641!important

.white-text
  color #F1E8E8!important
.white-back
  background-color #F1E8E8!important
.blue-text
  color #39A2BD!important

.raw-title
  display flex
  width 100%
  align-items center
  flex-wrap wrap
  justify-content center

.dark-accent
  background-color #16141A !important
.dark-aa
  background-color #58485B !important

.selected-navbtn
  border-bottom: 1px solid #58485B !important

.footeradd
  display: flex;
  justify-content: space-between;
  width: 100%;
</style>
