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
    { path: '*',
      name: 'NotFound-404',
      component: PageNotFound,
    },
  ],
});
