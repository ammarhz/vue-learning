import Vue from 'vue';
import Router from 'vue-router';
// import HomePage from './views/HomePage.vue';
import SignUpPage from './views/SignUpPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import ('./views/HomePage.vue') // another way to import and use component in router
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUpPage,
    },
  ],
});
