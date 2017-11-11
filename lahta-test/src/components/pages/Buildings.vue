<template>
<v-app id="inspire" >

  <div class="all-objects">
    <div class="objects-grid">
      <a
        v-for="(image,i) in images"
        :key="i"
        class="object-click"
        @click.stop="image.open = true"
      >
        <progressive-img  class="kek" :src="image.src" />
      </a>
    </div>

    <v-dialog v-model="image.open" v-for="(image,i) in images" :key="i">
      <v-card>
        <v-card-title>
            <b>{{image.title}}</b>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="image.open=false">Закрыть</v-btn>
          </v-card-actions>
        </v-card-title>
        <progressive-img :src="image.src" />
      </v-card>
    </v-dialog>
    <ListObjects class="list-objects"></ListObjects>
  </div>
</v-app>
</template>

<script>
import ListObjects from '@/components/pages/ListObjects';
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

export default {
  name: 'buildings',
  components: {
    ListObjects,
  },
  data() {
    return {
      images: [
        {
          src: Object1,
          title: 'Конгрессно-выставочный центр ЭкспоФорум',
          open: false,
        },
        {
          src: Object2,
          title: 'Ладожский вокзал',
          open: false,
        },
        {
          src: Object3,
          title: 'Логоцентр  «МЛП-КАД»',
          open: false,
        },
        {
          src: Object4,
          title: 'Медсанчасть № 70',
          open: false,
        },
        {
          src: Object5,
          title: 'Республика Карелия, г. Сортавала, малоэтажный жилой комплекс, Дача Винтера',
          open: false,
        },
        {
          src: Object6,
          title: 'Санкт-Петербург, «Центр обслуживания населения» на Богатырском пр',
          open: false,
        },
        {
          src: Object7,
          title: 'Санкт-Петербург, В.О., 26 линия, БЦ «Биржа',
          open: false,
        },
        {
          src: Object8,
          title: 'Санкт-Петербург, В.О., 26 линия, ЖК «Престиж»,',
          open: false,
        },
        {
          src: Object9,
          title: 'Санкт-Петербург, ЖК «Московские Ворота»,',
          open: false,
        },
        {
          src: Object10,
          title: 'Санкт-Петербург, Таможенно-логистический комплекс «Осиновая роща',
          open: false,
        },
        {
          src: Object11,
          title: 'Суд Невского района',
          open: false,
        },
        {
          src: Object12,
          title: 'Истринский  район  элитное строительство-поселок   «Greenfield»',
          open: false,
        },
        {
          src: Object13,
          title: 'Северный Версаль',
          open: false,
        },
        {
          src: Object14,
          title: 'Коттеджный поселок Консульская деревня',
          open: false,
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
  width 90%

.object-click
  cursor pointer
  width 25%

.kek
  margin 1rem

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

.card__title
  justify-content space-between !important

.btn-navigation
  position absolute
  z-index 1000
</style>

