<template>
  <div id="app">
    <Promo v-if="goto === null" :changeGoto="changeGoto"></Promo>
    <VentSystems :changeGoto="changeGoto" v-if="goto === 'vent'"></VentSystems>
  </div>
</template>

<script>

import router from './router';

const VentSystems = () => import('@/components/pages/VentSystems');
const Promo = () => import('@/components/pages/Promo');

export default {
  name: 'app',
  components: {
    Promo,
    VentSystems
  },
  data() {
    return {
      goto: null
    };
  },
  methods: {
    changeGoto(route) {
      this.goto = route;
      if (router.currentRoute.path.indexOf(route) === -1) {
        router.push(route);
      }
    },
  }
};
</script>

<style lang="stylus">
body
  padding 0 !important
  width 100%
  height 100%
#app {
  font-family: "SF Optimized", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", "Segoe UI", "Roboto", sans-serif
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size 16px !important
}

.super-height
  min-height 100vh

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
  cursor pointer
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

.main-title-header
  font-size 1.8rem
  font-weight bold

.main-title-subheader
  font-size 1.6rem

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

@media screen and (max-width: 390px)
  .super-height
    min-height 160vh

.btn__content
  flex unset !important
  white-space: unset !important
</style>
