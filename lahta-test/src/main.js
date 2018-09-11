// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueProgressiveImage from 'vue-progressive-image';
import Meta from 'vue-meta';
import App from './App';
import router from './router';

import('vuetify/dist/vuetify.min.css');

Vue.use(Meta);
Vue.use(VueProgressiveImage);
Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
