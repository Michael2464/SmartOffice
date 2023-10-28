import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import RegLog from '../views/RegLog.vue'

const routes: Array<RouteRecordRaw> = [
  //{
  //  path: '/',
  //  name: 'home',
  //  component: Home
  //},
  {
    path: '/',
    name: 'reglog',
    component: RegLog
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;