import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Cart from '@/components/pages/Cart';

import Index from '@/components/pages/admin/Index';
import New from '@/components/pages/admin/New';
import Products from '@/components/pages/admin/Products';
import Edit from '@/components/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',
      // Parent routes still has a component
      component: Index,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
  ],
});
