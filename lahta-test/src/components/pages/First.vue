<template>
  <Promo v-if="goto === null" :changeGoto="changeGoto"></Promo>
</template>

<script>
import router from '../../router';

const VentSystems = () => import('@/components/pages/VentSystems');
const Promo = () => import('@/components/pages/Promo');

export default {
  name: 'First',
  components: {
    Promo,
    VentSystems
  },
  data() {
    return {
      goto: null
    };
  },
  methods: {
    changeGoto(route) {
      this.goto = route;
      if (router.currentRoute.path.indexOf(route) === -1) {
        router.push(route);
      }
    },
  }
};
</script>

<style>

</style>
