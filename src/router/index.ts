import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from './../views/Home.vue';
import Registration from '../views/Registration.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;