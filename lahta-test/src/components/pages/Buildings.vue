<template>
  <div class="all-objects">
    <lightbox
      id="mylightbox"
      :images="images"
      :image_class=" 'img-responsive img-rounded' "
      :album_class=" 'my-album-class' "
      :options="options">
    </lightbox>
    <ListObjects class="list-objects"></ListObjects>
  </div>
</template>

<script>
import ListObjects from '@/components/pages/ListObjects';
import Lightbox from 'vue-simple-lightbox';
import Licence1 from '@/assets/licence1.jpg';
import Licence2 from '@/assets/licence2.jpg';
import Licence3 from '@/assets/licence3.jpg';
import Licence4 from '@/assets/licence4.jpg';

export default {
  name: 'buildings',
  components: {
    ListObjects,
    Lightbox,
  },
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
          src: Licence4,
          title: '',
        },
        {
          src: Licence4,
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
.all-objects
  margin 2rem 0 3rem
.list-objects
  margin 1rem auto
  width 90%

.my-gallery
  display flex
  flex-wrap wrap
  margin auto
  width 95%
  > a
    width 22%
    margin 1rem auto
    display flex
    min-width 320px
  > a > img
    width 100%
    height 300px
</style>

