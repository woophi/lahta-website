<template>
  <div class="about-text">
    <p><span><b>LAHTA SPB</b> {{ $t("raw.about.first") }}</span></p>

    <p><span><b>LAHTA SPB</b> {{ $t("raw.about.second") }}</span></p>

    <p><span><b>LAHTA SPB</b> {{ $t("raw.about.third") }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'rawAbout',
  metaInfo: {
    title: 'LAHTA SPB',
    titleTemplate: '%s | Наша компания | Логистика. Поставки ингредиентов пищевой и парфюмерной промышленности.',
    meta: [
      { name: 'description', content: 'Поставки ингредиентов пищевой и парфюмерной промышленности. Логистические услуги' },
      { name: 'keywords', content: 'доставки груза «от двери до двери»; местонахождение груза; транспортные и таможенные документы; качество и надежность' },
    ],
  },
};
</script>

<style lang="stylus">
.about-text
  display flex
  flex-direction column
  align-items center
  margin 3rem 1rem 1rem

.about-text > p
  color #16141A
  display flex
  flex-wrap wrap
  text-align left
  max-width 1000px
  min-width 250px
  border-left 5px solid #0E9641
  padding 1rem
  font-size 18px
  font-weight normal
  border-radius: 3px
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin-bottom 2rem
  transition .2s ease-in-out
  &:hover
    transform scale(1.05)

</style>
