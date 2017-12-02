<template>
  <div class="home-container">
    <div class="carousel-cotainer">
      <carousel-3d
        :clickable="false"
        :space="700"
        :width="550"
        :height="350"
        :display="3"
        :controlsVisible="true"
        :perspective="0"
      >
        <slide
          v-for="(item,i) in items"
          :key="i"
          :index="i"
        >
          <img v-bind:src="item.src" alt="i">
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import PreviewLeft from '@/assets/previewLeft.jpg';
import PreviewCenter from '@/assets/previewCenter.jpg';
import PreviewRight from '@/assets/previewRight.jpg';

export default {
  name: 'home',
  metaInfo: {
    title: 'ООО "ЛАХТА ИНЖИНИРИНГ СПБ"',
    titleTemplate: '%s | Организация внутренних инженерных систем, зданий и сооружений.',
    meta: [
      { name: 'description', content: 'ЛАХТА ИНЖИНИРИНГ СПБ предоставляет услуги по обслуживанию вентиляционных систем и автоматизации в Северо-Западном регионе, Москве и Московской области' },
      { name: 'keywords', content: 'вентиляция кондиционирование проектирование установка монтаж сервисное обслуживание' },
    ],
  },
  data() {
    return {
      items: [
        {
          src: PreviewCenter,
        },
        {
          src: PreviewRight,
        },
        {
          src: PreviewLeft,
        },
      ],
    };
  },
};
</script>

<style scoped lang="stylus">
.home-container
  margin 1rem
.carousel-cotainer
  width 100%
  height 100%
.carousel-3d-slide img
  height 100%
</style>
