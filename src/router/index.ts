import { createRouter, createWebHistory } from 'vue-router'
import { isLoading } from '@/stores/loadingStore';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/home/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('@/views/about/AboutPage.vue'),
    },
    {
      path: '/legal',
      name: 'LegalPage',
      component: () => import('@/views/legal/LegalPage.vue'),
    },
    {
      path: '/error',
      name: 'NotFound',
      component: () => import('@/views/error/ErrorPage.vue'),
      meta: { title: '404 - Not Found' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

router.beforeEach((_to, _from, next) => {
  isLoading.value = true;
  setTimeout(() => {
    next();
  }, 500);
});

router.afterEach(() => {
  isLoading.value = false;
});

export default router
