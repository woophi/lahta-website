import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Shares from '@/components/pages/Shares';
import Services from '@/components/pages/Services';
import About from '@/components/pages/About';
import Buildings from '@/components/pages/Buildings';
import Licences from '@/components/pages/Licences';
import Contacts from '@/components/pages/Contacts';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/shares',
      name: 'shares',
      component: Shares,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/buildings',
      name: 'Buildings',
      component: Buildings,
    },
    {
      path: '/licences',
      name: 'Licences',
      component: Licences,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
  ],
});
