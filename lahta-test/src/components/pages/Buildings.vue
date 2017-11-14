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
        <v-card-title class="card-title">
          <b class="card-header">{{image.title}}</b>
          <v-btn class="card-btn-absolute" @click.stop="image.open=false"><v-icon>fa-times</v-icon></v-btn>
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
import Object15 from '@/assets/objects/object15.jpg';
import Object16 from '@/assets/objects/object16.jpg';

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
          title: 'Конгрессно-выставочный центр Экспофорум, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object2,
          title: 'Ладожский вокзал, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object3,
          title: 'Логоцентр  «МЛП-КАД», г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object4,
          title: 'Медсанчасть № 70, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object5,
          title: 'Жилой комплекс «Дача Винтера», г. Сортавала, республика Карелия',
          open: false,
        },
        {
          src: Object6,
          title: 'Центр обслуживания населения, Богатырский проспект, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object7,
          title: 'БЦ «Биржа», В.О. 26 линия, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object8,
          title: 'ЖК «Престиж», В.О. 26 линия, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object9,
          title: 'ЖК «Московские Ворота», г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object10,
          title: 'Таможенно-логистический комплекс «Осиновая роща», г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object11,
          title: 'Суд Невского района, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object12,
          title: 'Элитное строительство «Greenfield», г. Москва',
          open: false,
        },
        {
          src: Object13,
          title: '«Северный Версаль», Приморский район, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object14,
          title: 'Коттеджный поселок «Консульская деревня», Репино, г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object15,
          title: 'Завод «Штурманские приборы», г. Санкт-Петербург',
          open: false,
        },
        {
          src: Object16,
          title: 'АО «Ленгазспецстрой», г. Санкт-Петербург',
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

