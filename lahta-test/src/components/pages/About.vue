<template>
  <div class="about-text">
    <p>{{ $t("companyLahtaEng") }} {{ $t("vent.about.first") }}</p>

    <p>{{ $t("companyLahtaEng") }} {{ $t("vent.about.second") }}</p>

    <p>{{ $t("companyLahtaEng") }} {{ $t("vent.about.third") }}</p>

    <p>{{ $t("companyLahtaEng") }} {{ $t("vent.about.fourth") }}</p>

    <p>{{ $t("companyLahtaEng") }} {{ $t("vent.about.fifth") }}</p>

    <p>{{ $t("vent.about.sixth") }}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  metaInfo: {
    title: 'ООО "ЛАХТА ИНЖИНИРИНГ СПБ"',
    titleTemplate: '%s | Наша компания | Организация внутренних инженерных систем, зданий и сооружений',
    meta: [
      { name: 'description', content: 'ЛАХТА ИНЖИНИРИНГ СПБ предоставляет услуги по обслуживанию вентиляционных систем и автоматизации в Северо-Западном регионе, Москве и Московской области' },
      { name: 'keywords', content: 'вентиляция кондиционирование проектирование установка монтаж сервисное обслуживание' },
    ],
  },
};
</script>

<style lang="stylus">
.about-text
  display flex
  flex-direction column
  align-items center
  margin 1rem 3rem

.about-text > p
  display flex
  margin 1rem
  flex-wrap wrap
  text-align justify
  max-width 1000px
  min-width 250px
  border-left 5px solid #1976d2
  padding 1rem 0 1rem 24px
  font-size 18px
  font-weight 500
  box-sizing border-box

</style>
