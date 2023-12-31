import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from './../views/Home.vue';
import Login from '../views/Login.vue';
import Registration from '../views/Registration.vue';
import Platform from '../views/Platform.vue';
import News from '../views/News.vue';
import Contacts from '../views/Contacts.vue';
import Documents from '../views/Documents.vue';
import Services from '../views/Services.vue';
import AiChat from '../views/AiChat.vue';

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
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/services',
    name: 'Local Services',
    component: Services
  },
  {
    path: '/documents',
    name: 'Local Documents',
    component: Documents
  },
  {
    path: '/aiChat',
    name: 'AI Chat',
    component: AiChat
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;