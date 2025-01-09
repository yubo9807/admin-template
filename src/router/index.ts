import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { layoutRoutes } from './create-routes';
import env from '~/env';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../layout/index.vue'),
    children: layoutRoutes,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../components/not-found/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(env.BASE_URL),
  routes: routes,
})

export default router
