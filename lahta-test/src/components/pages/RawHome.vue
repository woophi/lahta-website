<template>
  <div class="home-container">
    <div class="home-innerContainer">
      <div class="home-bcgrd white-text">
        <h2 class="white-text"><b>LAHTA SPB</b> {{ $t("raw.mainTitle") }}</h2>
        <router-link to="/raw/contacts" exact>
          <v-btn color="green darken-3" class="white-text">
            {{ $t("raw.contactUs") }}
            <v-icon class="ml-2">fa-arrow-circle-right</v-icon>
          </v-btn>
        </router-link>
      </div>
      <div class="home-picture"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rawHome',
  metaInfo: {
    title: 'LAHTA SPB',
    titleTemplate: '%s | Логистика. Поставки ингредиентов пищевой и парфюмерной промышленности.',
    meta: [
      { name: 'description', content: 'Поставки ингредиентов пищевой и парфюмерной промышленности. Логистические услуги' },
      { name: 'keywords', content: 'доставки груза «от двери до двери»; местонахождение груза; транспортные и таможенные документы; качество и надежность' },
    ],
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
  background-color rgba(0, 0, 0, 0.7)
  position relative

.home-picture
  width 100%
  height calc(100vh - 90px)
  background-image url('../../assets/backgroundMain2.png')
  background-size cover
.home-bcgrd
  min-width 300px
  display flex
  flex-direction column
  width 100%
  height 100%
  background-color rgba(0, 0, 0, 0.7)
  position absolute
  top 0
  left 0
  z-index 2
  padding 1rem
  justify-content: space-evenly;
  > h2
    text-align left
    max-width 75rem
    margin 2rem auto 0

@media screen and (max-width: 390px)
  .home-picture, .home-bcgrd
    min-height 160vh
</style>
