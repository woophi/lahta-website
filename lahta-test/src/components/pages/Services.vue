<template>
  <div>
    <div class="main-wrapper">
      <progressive-img class="sxema" :src="Sxema" />
      <div class="main-card-flex">
        <div class="main-card">
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.shipping") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.instal") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.docsVent") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.setUp") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.pusk") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.serv") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.repairB") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.projInside") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.projCenter") }}
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            {{ $t("vent.services.repair") }}
          </p>
        </div>
      </div>
    </div>
    <div class="about-text">
      <p>{{ $t("companyLahtaEng") }} {{ $t("vent.services.addFirst") }}</p>
      <p>{{ $t("companyLahtaEng") }} {{ $t("vent.services.addSecond") }}</p>
    </div>
  </div>
</template>

<script>
import Sxema from '@/assets/sxhema.jpg';

export default {
  name: 'services',
  metaInfo: {
    title: 'ООО "ЛАХТА ИНЖИНИРИНГ СПБ"',
    titleTemplate: '%s | Широкий спектр услуг | Организация внутренних инженерных систем, зданий и сооружений',
    meta: [
      { name: 'description', content: 'ЛАХТА ИНЖИНИРИНГ СПБ предоставляет услуги по обслуживанию вентиляционных систем и автоматизации в Северо-Западном регионе, Москве и Московской области' },
      { name: 'keywords', content: 'вентиляция кондиционирование проектирование установка монтаж сервисное обслуживание' },
    ],
  },
  data() {
    return {
      Sxema,
    };
  },
};
</script>

<style scoped lang="stylus">
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

.main-card p
  padding .5rem 0
  &:hover
    color #2E7BB2
    transition ease-in-out .2s

.main-wrapper
  justify-content center
  display flex
  padding 0.5rem
  flex-wrap wrap
  flex 1
  flex-grow 1

.main-card-flex
  margin 0
  width 55%

.sxema
  width 30%
  min-width 250px
</style>
