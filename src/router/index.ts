import { createRouter, createWebHistory } from 'vue-router'
import { isLoading } from '@/stores/loadingStore'
import { ROUTES } from '@/constants/routes'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: ROUTES.HOME.PATH,
      name: ROUTES.HOME.NAME,
      component: () => import('@/views/home/HomePage.vue'),
    },
    {
      path: ROUTES.ABOUT.PATH,
      name: ROUTES.ABOUT.NAME,
      component: () => import('@/views/about/AboutPage.vue'),
    },
    {
      path: ROUTES.LEGAL.PATH,
      name: ROUTES.LEGAL.NAME,
      component: () => import('@/views/legal/LegalPage.vue'),
    },
    {
      path: ROUTES.ERROR.PATH,
      name: ROUTES.ERROR.NAME,
      component: () => import('@/views/error/ErrorPage.vue'),
      meta: { title: '404 - Not Found' },
    },
    {
      path: ROUTES.PRODUCTS.PATH,
      name: ROUTES.PRODUCTS.NAME,
      component: () => import('@/views/product/ProductPage.vue'),
      meta: { title: 'Sản Phẩm & Dịch Vụ - Website Craft' },
    },
    {
      path: ROUTES.PRODUCT_DETAIL.PATH,
      name: ROUTES.PRODUCT_DETAIL.NAME,
      component: () => import('@/views/product/ProductDetailPage.vue'),
      meta: { title: 'Chi Tiết Template - Website Craft' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: ROUTES.HOME.PATH,
    },
  ],
})

router.beforeEach((_to, _from, next) => {
  isLoading.value = true
  setTimeout(() => {
    next()
  }, 500)
})

router.afterEach(() => {
  isLoading.value = false
})

export default router
