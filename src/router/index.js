
import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../views/AppHome.vue';
import AppAbout from '../views/AppAbout.vue';
import AppProjects from '../views/AppProjects.vue';
import AppContact from '@/views/AppContact.vue';

const routes = [
  { path: '/', name: 'Home', component: AppHome },
  { path: '/about', name: 'About', component: AppAbout },
  { path: '/projects', name: 'Projects', component: AppProjects },
  { path: '/contact', name: 'Contact', component: AppContact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;