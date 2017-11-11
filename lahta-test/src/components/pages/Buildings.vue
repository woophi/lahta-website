<template>
<v-app id="inspire" >

  <div class="all-objects">
    <a class="object-click" @click.stop="dialog2 = true">
      <progressive-img  class="kek" src="https://unsplash.it/1920/1080?image=10" />
    </a>

    <v-dialog v-model="dialog2">
      <v-card>
        <v-card-title>
            Dialog 2
        </v-card-title>
        <v-card-text>
          sdf
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ListObjects class="list-objects"></ListObjects>
  </div>
</v-app>
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
      dialog2: false,
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

.object-click
  cursor pointer
  width auto
  height auto

.kek
  width 500px
  margin 1px

.application
  min-height auto !important
  background-color inherit !important
</style>

