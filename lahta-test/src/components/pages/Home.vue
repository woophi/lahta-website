<template>
  <div class="home-container">
    <div class="carousel-cotainer">
      <carousel-3d
        :clickable="false"
        :space="600"
        :width="600"
        :height="500"
        :display="3"
        :controlsVisible="true"
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
import SliderImg1 from '@/assets/sxhema.jpg';
import Licence2 from '@/assets/bird.jpg';

export default {
  name: 'home',
  data() {
    return {
      items: [
        {
          src: SliderImg1,
        },
        {
          src: Licence2,
        },
        {
          src: Licence2,
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
