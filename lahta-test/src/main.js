// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueProgressiveImage from 'vue-progressive-image';
import Meta from 'vue-meta';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import messages from './locales';

import('vuetify/dist/vuetify.min.css');

Vue.use(Meta);
Vue.use(VueProgressiveImage);
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.config.productionTip = false;

const getCookie = (cname) => {
  if (!document) return '';
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const i18n = new VueI18n({
  locale: getCookie('lahta_lng') || 'ru', // set locale
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
