<template>
  <div class="licences">
    <lightbox
      id="mylightbox"
      :images="images"
      :image_class=" 'img-responsive img-rounded' "
      :album_class=" 'my-album-class' "
      :options="options">
    </lightbox>
  </div>
</template>

<script>
import Lightbox from 'vue-simple-lightbox';
import Licence1 from '@/assets/licence1.jpg';
import Licence2 from '@/assets/licence2.jpg';
import Licence3 from '@/assets/licence3.jpg';
import Licence4 from '@/assets/licence4.jpg';


export default {
  components: {
    Lightbox,
  },
  name: 'licence',
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
      ],
      options: {
        closeText: 'X',
      },
    };
  },
};
</script>

<style lang="stylus">
.licences
  margin 7rem 0


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
