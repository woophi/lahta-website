<template>
<v-app id="inspire" >

  <div class="all-objects">
    <ListObjects class="list-objects"></ListObjects>
    <div class="objects-grid">
      <a
        v-for="(image,i) in images"
        :key="i"
        class="object-click"
        @click.stop="image.open = true"
      >
        <progressive-img class="kek" :src="image.src" />
      </a>
    </div>

    <v-dialog v-model="image.open" v-for="(image,i) in images" :key="i">
      <v-card>
        <v-card-title class="card-title">
          <b class="card-header">{{$t('vent.objects' + image.id)}}</b>
          <v-btn class="card-btn-absolute" @click.stop="image.open=false"><v-icon>fa-times</v-icon></v-btn>
        </v-card-title>
        <progressive-img :src="image.src" />
      </v-card>
    </v-dialog>
  </div>
</v-app>
</template>

<script>
import Object1 from '@/assets/objects/object1.jpg';
import Object2 from '@/assets/objects/object2.jpg';
import Object3 from '@/assets/objects/object3.jpg';
import Object4 from '@/assets/objects/object4.jpg';
import Object5 from '@/assets/objects/object5.jpg';
import Object6 from '@/assets/objects/object6.jpg';
import Object7 from '@/assets/objects/object7.jpg';
import Object8 from '@/assets/objects/object8.jpg';
import Object9 from '@/assets/objects/object9.jpg';
import Object10 from '@/assets/objects/object10.jpg';
import Object11 from '@/assets/objects/object11.jpg';
import Object12 from '@/assets/objects/object12.jpg';
import Object13 from '@/assets/objects/object13.jpg';
import Object14 from '@/assets/objects/object14.jpg';
import Object15 from '@/assets/objects/object15.jpg';
import Object16 from '@/assets/objects/object16.jpg';

const ListObjects = () => import('@/components/pages/ListObjects');

export default {
  name: 'buildings',
  metaInfo: {
    title: 'ООО "ЛАХТА ИНЖИНИРИНГ СПБ"',
    titleTemplate: '%s | Объекты | Организация внутренних инженерных систем, зданий и сооружений',
    meta: [
      { name: 'description', content: 'ЛАХТА ИНЖИНИРИНГ СПБ предоставляет услуги по обслуживанию вентиляционных систем и автоматизации в Северо-Западном регионе, Москве и Московской области' },
      { name: 'keywords', content: 'вентиляция кондиционирование проектирование установка монтаж сервисное обслуживание' },
    ],
  },
  components: {
    ListObjects,
  },
  data() {
    return {
      images: [
        {
          id: 'one',
          src: Object1,
          open: false,
        },
        {
          src: Object2,
          open: false,
          id: 'two'
        },
        {
          src: Object3,
          open: false,
          id: 'three'
        },
        {
          src: Object4,
          open: false,
          id: 'four'
        },
        {
          src: Object5,
          open: false,
          id: 'five'
        },
        {
          src: Object6,
          open: false,
          id: 'six'
        },
        {
          src: Object7,
          open: false,
          id: 'seven'
        },
        {
          src: Object8,
          open: false,
          id: 'eight'
        },
        {
          src: Object9,
          open: false,
          id: 'nine'
        },
        {
          src: Object10,
          open: false,
          id: 'ten'
        },
        {
          src: Object11,
          open: false,
          id: 'eleven'
        },
        {
          src: Object12,
          open: false,
          id: 'twelve'
        },
        {
          src: Object13,
          open: false,
          id: 'thirteen'
        },
        {
          src: Object14,
          open: false,
          id: 'fourteen'
        },
        {
          src: Object15,
          open: false,
          id: 'fifteen'
        },
        {
          src: Object16,
          open: false,
          id: 'sixteen'
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
.all-objects
  margin 2rem 0 3rem
.list-objects
  margin 1rem auto
  width 90% !important

.object-click
  cursor pointer
  width 25%
  min-width 300px
  margin 0 auto

.kek
  margin 1rem
  &:hover
    transform scale(1.05)
    transition ease-in-out .2s

.dialog
  max-width 900px !important
  overflow hidden !important

.application
  min-height auto !important
  background-color inherit !important

.objects-grid
  display flex
  flex-wrap wrap
  margin 1rem auto
  width 95%

.card-title
  justify-content space-between !important
  position relative !important
  margin-bottom 0.5rem !important

.card-header
  margin-right 4rem
  text-align left

.card-btn-absolute
  position absolute !important
  min-width 40px  !important
  height 40px !important
  top 8px !important
  right 8px !important
</style>

