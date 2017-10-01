// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
const counter = 0;
new Vue({
  el: '#app',
  router,
  template: `
    <div>
      <p>{{counter}}</p>
      <button v-on:click="incrementCounter">++</button>
    </div>
    `,
  data() {
    return {
      counter,
    };
  },
  methods: {
    incrementCounter() {
      this.counter += 1;
    },
  },
  components: { App },
});
