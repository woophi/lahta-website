import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('@/components/pages/Home');
const About = () => import('@/components/pages/About');
const Services = () => import('@/components/pages/Services');
const Buildings = () => import('@/components/pages/Buildings');
const Licences = () => import('@/components/pages/Licences');
const Contacts = () => import('@/components/pages/Contacts');
const PageNotFound = () => import('@/components/pages/PageNotFound');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vent',
      name: 'Home',
      component: Home,
    },
    {
      path: '/vent/about',
      name: 'about',
      component: About,
    },
    {
      path: '/vent/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/vent/buildings',
      name: 'Buildings',
      component: Buildings,
    },
    {
      path: '/vent/licences',
      name: 'Licences',
      component: Licences,
    },
    {
      path: '/vent/contacts',
      name: 'Contacts',
      component: Contacts,
    },
    { path: '*',
      name: 'NotFound-404',
      component: PageNotFound,
    },
  ],
});
