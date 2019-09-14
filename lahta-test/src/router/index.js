import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('@/components/pages/Home');
const First = () => import('@/components/pages/First');
const About = () => import('@/components/pages/About');
const Services = () => import('@/components/pages/Services');
const Buildings = () => import('@/components/pages/Buildings');
const Licences = () => import('@/components/pages/Licences');
const Contacts = () => import('@/components/pages/Contacts');
const PageNotFound = () => import('@/components/pages/PageNotFound');
const RawHome = () => import('@/components/pages/RawHome');
const RawAbout = () => import('@/components/pages/RawAbout');
const RawServices = () => import('@/components/pages/RawServices');
const RawContacts = () => import('@/components/pages/RawContacts');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'First',
      component: First,
    },
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
    {
      path: '/raw',
      name: 'rawHome',
      component: RawHome,
    },
    {
      path: '/raw/about',
      name: 'rawAbout',
      component: RawAbout,
    },
    {
      path: '/raw/services',
      name: 'rawServices',
      component: RawServices,
    },
    {
      path: '/raw/contacts',
      name: 'rawContacts',
      component: RawContacts,
    },
    { path: '*',
      name: 'NotFound-404',
      component: PageNotFound,
    },
  ],
});
