<template>
  <div class="licences">
    <lightbox
      id="mylightbox"
      :images="images"
      :image_class=" 'img-responsive img-rounded' "
      :album_class=" 'my-album-class' "
      :options="options">
    </lightbox>
  </div>
</template>

<script>
import Lightbox from 'vue-simple-lightbox';
import Licence1 from '@/assets/licence1.jpg';
import Licence2 from '@/assets/licence2.jpg';
import Licence3 from '@/assets/licence3.jpg';
import Licence4 from '@/assets/licence4.jpg';
import Licence5 from '@/assets/licence5.jpg';

export default {
  metaInfo: {
    title: 'ООО "ЛАХТА ИНЖИНИРИНГ СПБ"',
    titleTemplate: '%s | Лицензии и сертификаты',
    meta: [
      { name: 'description', content: 'ЛАХТА ИНЖИНИРИНГ СПБ предоставляет услуги по обслуживанию вентиляционных систем и автоматизации в Северо-Западном регионе, Москве и Московской области' },
      { name: 'keywords', content: 'вентиляция кондиционирование проектирование установка монтаж сервисное обслуживание' },
    ],
  },
  components: {
    Lightbox,
  },
  name: 'licences',
  data() {
    return {
      images: [
        {
          src: Licence1,
          title: '',
        },
        {
          src: Licence2,
          title: '',
        },
        {
          src: Licence3,
          title: '',
        },
        {
          src: Licence4,
          title: '',
        },
        {
          src: Licence5,
          title: '',
        },
      ],
      options: {
        closeText: 'X',
      },
    };
  },
};
</script>

<style lang="stylus">
.licences
  margin 3rem 0


.my-gallery
  display flex
  flex-wrap wrap
  margin auto
  width 100%
  > a
    width 22%
    margin 1rem auto
    display flex
    min-width 300px
  > a > img
    min-width 300px
    width 100% !important
    height 300px !important
</style>
