import { createRouter, createWebHistory } from 'vue-router'

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

export default router
