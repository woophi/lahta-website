<template>
<div class="kek">

    <v-app id="inspire" >
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 order-md1 order-sm1>
            <div class="contacts-form">
                <h3>
                <v-icon>fa-envelope-o</v-icon>
                {{ $t("raw.contacts.request") }}
                </h3>
                <OnlineForm :color="'grey darken-4'"></OnlineForm>
            </div>
            </v-flex>
            <v-flex xs12 sm6 md4 order-md2 order-sm2>
            <div class="contatcs-info">
                <h3>
                <v-icon>fa-address-card-o</v-icon>
                {{ $t("raw.contacts.contacts") }}
                </h3>
                <v-icon>fa-location-arrow</v-icon>
                <div class="address">{{ $t("raw.contacts.address") }}
                </div>
                <v-icon>fa-phone</v-icon>
                <div class="tel-mob">{{ $t("raw.contacts.tel") }} <a class="blue-text" href="tel:+78122402142">+7 (812) 240-21-42</a>
                </div>
                <v-icon>fa-envelope</v-icon>
                <div class="mail">
                <a class="blue-text" href="mailto:darganova.maria@lahtaeng.ru">darganova.maria@lahtaeng.ru</a>
                </div>
            </div>
            </v-flex>
            <v-flex xs12 sm12 md4 order-md3 order-sm3>
            <div class="contacts-map">
                <h3>
                <v-icon>fa-map-o</v-icon>
                {{ $t("raw.contacts.map") }}
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
                    hint-content="LAHTA SPB"
                    :icon="{color: 'green', glyph: 'dot'}"
                    cluster-name="1"
                ></ymap-marker>
                </yandex-map>
            </div>
            </v-flex>
        </v-layout>
    </v-app>
</div>
</template>

<script>
import OnlineForm from '@/components/pages/OnlineForm';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  name: 'contacts',
  metaInfo: {
    title: 'LAHTA SPB',
    titleTemplate: '%s | Контакты | Логистика. Поставки ингредиентов пищевой и парфюмерной промышленности',
    meta: [
      { name: 'description', content: 'Поставки ингредиентов пищевой и парфюмерной промышленности. Логистические услуги' },
      { name: 'keywords', content: 'доставки груза «от двери до двери»; местонахождение груза; транспортные и таможенные документы; качество и надежность' },
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
.kek
    min-height calc(100vh - 90px)
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
