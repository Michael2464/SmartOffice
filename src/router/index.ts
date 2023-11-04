import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from './../views/Home.vue';
import Login from '../views/Login.vue';
import Registration from '../views/Registration.vue';
import Platform from '../views/Platform.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/platform',
    name: 'platform',
    component: Platform
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;