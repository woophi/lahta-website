<template>
<v-app id="inspire" >
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 order-md1 order-sm1>
      <div class="contacts-form">
        <h3>
          <v-icon>fa-envelope-o</v-icon>
          Онлайн заявка
        </h3>
        <OnlineForm></OnlineForm>
      </div>
    </v-flex>
    <v-flex xs12 sm6 md4 order-md2 order-sm2>
      <div class="contatcs-info">
        <h3>
          <v-icon>fa-address-card-o</v-icon>
          Контакты
        </h3>
        <v-icon>fa-location-arrow</v-icon>
        <div class="address">193091, Санкт-Петербург, Октябрьская наб., д. 6, лит. М, пом. 10-Н,
        </div>
        <v-icon>fa-phone</v-icon>
        <div class="tel-mob">тел/факс: <a href="tel:+78122402142">+7 (812) 240-21-42</a>
        </div>
        <v-icon>fa-envelope</v-icon>
        <div class="mail">
          <a href="mailto:lahtaeng_spb@mail.ru">lahtaeng_spb@mail.ru</a>
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md4 order-md3 order-sm3>
      <div class="contacts-map">
        <h3>
          <v-icon>fa-map-o</v-icon>
          Карта
        </h3>
        <yandex-map
          :coords="[59.912021, 30.422444]"
          zoom="13"
          style="width: 100%; height: 420px"
          :zoom-control="zoomControl"
          :controls="['trafficControl']"
          map-type="map"
        >
          <ymap-marker
            marker-type="placemark"
            :coords="[59.912021, 30.422444]"
            hint-content="ООО «ЛАХТА ИНЖИНИРИНГ СПБ»"
            :icon="{color: 'green', glyph: 'dot'}"
            cluster-name="1"
          ></ymap-marker>
        </yandex-map>
      </div>
    </v-flex>
  </v-layout>
</v-app>
</template>

<script>
import OnlineForm from '@/components/pages/OnlineForm';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  name: 'contacts',
  metaInfo: {
    title: 'ООО "ЛАХТА ИНЖИНИРИНГ СПБ"',
    titleTemplate: '%s | Контакты',
    meta: [
      { name: 'description', content: 'ЛАХТА ИНЖИНИРИНГ СПБ предоставляет услуги по обслуживанию вентиляционных систем и автоматизации в Северо-Западном регионе, Москве и Московской области' },
      { name: 'keywords', content: 'вентиляция кондиционирование проектирование установка монтаж сервисное обслуживание' },
    ],
  },
  data() {
    return {
      zoomControl: {},
    };
  },
  components: {
    OnlineForm,
    yandexMap,
    ymapMarker,
  },
};
</script>

<style lang="stylus">
.contatcs-info, .contacts-form, .contacts-map
  margin 1rem
  height 500px

.contatcs-info
  height auto
  > i
    float left
    margin 0.2rem 2rem 0

.address, .tel-mob, .mail
  width 75%
  margin 1rem auto
  text-align left
  padding-left 1rem

.application
  min-height auto !important
  background-color inherit !important
</style>
