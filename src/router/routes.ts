import LoginPage from '@/pages/LoginPage.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'login',
  },
];

export default routes;
