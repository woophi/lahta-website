<template>
  <div>
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
    <v-btn class="btn-shares" fab dark color="red darken-2">
      <v-icon dark>fa-star</v-icon>
      Акция
    </v-btn>
  </div>
</template>

<script>
import Licence1 from '@/assets/sxhema.jpg';
import Licence2 from '@/assets/bird.jpg';

export default {
  name: 'home',
  data() {
    return {
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
      ],
    };
  },
};
</script>

<style scoped lang="stylus">
.carousel-cotainer
  width 100%
  height 500px

.btn-shares
  position fixed
  bottom 3rem
  right 1rem
</style>
