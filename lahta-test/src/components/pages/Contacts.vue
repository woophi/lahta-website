<template>
  <div class="contacts-container">
    <OnlineForm class="contacts-form"></OnlineForm>
    <div class="contatcs-info">
      <div class="address">
        193091, Санкт-Петербург, Октябрьская наб., д. 6, лит. М, пом. 10-Н,
      </div>
      <div class="tel-mob">
        тел/факс +7 (812) 240-21-42
      </div>
      <div class="mail">
        mail@mail.ru
      </div>
    </div>
    <yandex-map
      :coords="[59.912021, 30.422444]"
      zoom="13"
      class="contacts-map"
      :zoom-control="zoomControl"
      :controls="['trafficControl']"
      map-type="map"
    >
      <ymap-marker
        marker-type="placemark"
        :coords="[59.912021, 30.422444]"
        hint-content="ООО «ЛАХТА ИНЖИНИРИНГ СПБ»"
        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
        :icon="{color: 'green', glyph: 'dot'}"
        cluster-name="1"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import OnlineForm from '@/components/pages/OnlineForm';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  name: 'contacts',
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
.contacts-container
  display flex
  flex-wrap wrap

.contatcs-info, contacts-form, .contacts-map
  width 30%
.contacts-map
  height 500px
</style>
