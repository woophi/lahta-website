import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Cart from '@/components/pages/Cart';
import Admin from '@/components/pages/Admin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
