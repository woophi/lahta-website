<template>
  <div class="promo">
    <div class="promo-pic1" :style="styleObject1"></div>
    <div class="promo-pic2" :style="styleObject2"></div>
    <div class="promo-title">
      <div class="promo-title-main">ООО "ЛАХТА ИНЖИНИРИНГ СПБ" + LAHTA SPB</div>
      <div>Санкт-Петербург</div>
    </div>
    <div class="promo-btns">
      <v-btn
        outline
        :color="ventColor"
        @click="changeGoto('vent')"
        @mouseenter="mEnterVent(true)"
        @mouseleave="mEnterVent(false)"
      >Организация инженерных систем<v-icon class="ml-2">fa-arrow-circle-right</v-icon></v-btn>
      <v-btn
        outline
        :color="rawColor"
        @click="changeGoto('raw')"
        @mouseenter="mEnterRaw(true)"
        @mouseleave="mEnterRaw(false)"
      >
        Логистика. Поставки ингредиентов пищевой и
        парфюмерной промышленности<v-icon class="ml-2">fa-arrow-circle-right</v-icon>
      </v-btn>
    </div>
    <div
      class="contaier-glass"
      :style="rawColor !== 'grey lighten-2' ? styleObject2 : styleObject1"
    ></div>
  </div>
</template>

<script>
import BgrM from '@/assets/backgroundMain.png';
import BgrM2 from '@/assets/backgroundMain3.jpg';

export default {
  props: ['changeGoto'],
  data() {
    return {
      ventColor: 'grey lighten-2',
      rawColor: 'grey lighten-2',
      styleObject1: {
        backgroundImage: `url(${BgrM})`,
        backgroundSize: 'cover',
        opacity: 1
      },
      styleObject2: {
        backgroundImage: `url(${BgrM2})`,
        backgroundSize: 'cover',
        visibility: 'hidden',
        opacity: 0
      }
    };
  },
  methods: {
    mEnterVent(enter) {
      if (enter) {
        this.ventColor = 'light-blue accent-2';
      } else {
        this.ventColor = 'grey lighten-2';
      }
    },
    mEnterRaw(enter) {
      if (enter) {
        this.rawColor = 'light-green accent-4';
        this.styleObject1.visibility = 'hidden';
        this.styleObject2.visibility = 'visible';
        this.styleObject1.opacity = 0;
        this.styleObject2.opacity = 1;
      } else {
        this.rawColor = 'grey lighten-2';
        this.styleObject1.visibility = 'visible';
        this.styleObject2.visibility = 'hidden';
        this.styleObject1.opacity = 1;
        this.styleObject2.opacity = 0;
      }
    },
  }
};
</script>

<style lang="stylus" scoped>
.promo
  display flex
  width 100%
  min-height 100vh
  flex-direction column
  justify-content center
  position relative

.promo-title
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  padding: 1rem;

.promo-title-main
  margin auto

.contaier-glass
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  transition: all .3s cubic-bezier(.25,.8,.5,1)
  &:before {
    content: "";
    position: absolute;
    background inherit
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(12px);
    margin: -50px;
    transition: all .3s cubic-bezier(.25,.8,.5,1)
  }
.promo-btns
  display flex
  flex-direction column
  justify-content center
  align-items center
  z-index 3
.promo-btns > button
  margin-bottom 1rem
  font-size 1rem
  min-height: 34px;
  height: auto;
  max-width 326px
.promo-pic1
  width 100%
  height 100%
.promo-pic1, .promo-pic2
  width 100%
  height 100%
  position absolute
  z-index 0
  transition: all .3s cubic-bezier(.25,.8,.5,1)

</style>
