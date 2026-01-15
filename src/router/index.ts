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
