<template>
  <div>
    <ListObjects class="list-objects"></ListObjects>
  </div>
</template>

<script>
import ListObjects from '@/components/pages/ListObjects';

export default {
  name: 'buildings',
  data() {
    return {
    };
  },
  components: {
    ListObjects,
  },
};
</script>

<style lang="stylus">
.list-objects
  margin 1rem auto
  width 90%
</style>

