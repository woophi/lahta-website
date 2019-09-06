// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueProgressiveImage from 'vue-progressive-image';
import Meta from 'vue-meta';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';

import('vuetify/dist/vuetify.min.css');

Vue.use(Meta);
Vue.use(VueProgressiveImage);
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.config.productionTip = false;

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ru: {
    message: {
      hello: 'Првиет мир'
    }
  }
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App },
});
