<template>
  <div class="home-container">
    <div class="home-innerContainer">
      <div class="home-bcgrd">
        <h2><b>{{ $t("companyLahtaEng") }}</b> {{ $t("vent.home.title") }}</h2>
        <p>{{ $t("vent.home.sub") }}</p>
      </div>
      <div class="home-picture"></div>
    </div>
  </div>
</template>

<script>
import placeholderIMG from '@/assets/placeholderIMG.jpg';

export default {
  name: 'home',
  metaInfo: {
    title: 'ООО "ЛАХТА ИНЖИНИРИНГ СПБ"',
    titleTemplate: '%s | Организация внутренних инженерных систем, зданий и сооружений.',
    meta: [
      { name: 'description', content: 'ЛАХТА ИНЖИНИРИНГ СПБ предоставляет услуги по обслуживанию вентиляционных систем и автоматизации в Северо-Западном регионе, Москве и Московской области' },
      { name: 'keywords', content: 'вентиляция кондиционирование проектирование установка монтаж сервисное обслуживание' },
    ],
  },
  data() {
    return {
      placeholderIMG,
    };
  },
};
</script>

<style scoped lang="stylus">
.home-container
  width 100%
  height 100%
  display flex
  flex-grow 1

.home-innerContainer
  width 100%
  height 100%
  background-color rgba(46, 123, 179, .7)
  position relative

.home-picture
  width 100%
  height 100vh
  background-image url('../../assets/backgroundMain.png')
  background-size cover
.home-bcgrd
  min-width 300px
  display flex
  flex-direction column
  justify-content space-evenly
  width 100%
  height 100vh
  background-color rgba(46, 123, 179, .7)
  position absolute
  top 0
  left 0
  z-index 2
  padding 1rem
  > h2
    color #ffffff
    text-align left
    max-width 75rem
    margin 0 auto
  > p
    max-width 75rem
    color #ffffff
    text-align left
    margin 0 auto
    font-size 2rem

@media screen and (max-width: 390px)
  .home-picture, .home-bcgrd
    min-height 160vh
</style>
