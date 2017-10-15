<template>
  <div class="hello">
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <div class="carousel-cotainer">
      <carousel-3d
        :controls-visible="true"
        :width="600"
        :height="500"
        :display="3"
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
    <div>Акции: Кондиционеры из Японии от 10000</div>
  </div>
</template>

<script>
import Licence1 from '@/assets/sxhema.jpg';
import Licence2 from '@/assets/bird.jpg';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          src: Licence1,
        },
        {
          src: Licence2,
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
.carousel-cotainer
  width 100%
  height 500px
</style>
