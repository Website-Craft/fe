import { createRouter, createWebHistory } from 'vue-router'
import { isLoading } from '@/stores/loadingStore'
import { ROUTES } from '@/constants/routes'
import { updateSeoMeta } from '@/utils/seo'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: ROUTES.HOME.PATH,
      name: ROUTES.HOME.NAME,
      component: () => import('@/views/home/HomePage.vue'),
      meta: {
        title: 'Kho Web & Dịch Vụ Thuê Website Chuyên Nghiệp',
        description:
          'KhoWeb.shop - Kho 1000+ mẫu template website đẹp, hiện đại, chuẩn SEO. Dịch vụ cho thuê website theo tháng, thiết kế web theo mẫu trọn gói giá rẻ, uy tín.',
        keywords:
          'kho web, template website, thuê web, thuê website, thuê website theo tháng, mua template web, mẫu website đẹp, kho giao diện website, thiết kế website theo mẫu, khoweb shop',
      },
    },
    {
      path: ROUTES.SERVICES_RENTAL.PATH,
      name: ROUTES.SERVICES_RENTAL.NAME,
      component: () => import('@/views/services/RentalServicePage.vue'),
      meta: {
        title: 'Dịch Vụ Thuê Website Trọn Gói Giá Rẻ Chuẩn SEO',
        description:
          'Dịch vụ cho thuê website theo tháng chuyên nghiệp, giá tốt nhất. Miễn phí hosting tốc độ cao, bảo mật SSL, chuẩn SEO Google, bàn giao trong 24h tại KhoWeb.shop.',
        keywords:
          'thuê website, thuê web, thuê website theo tháng, dịch vụ thuê website, thuê web bán hàng, báo giá thuê website, thuê landing page giá rẻ, khoweb shop',
      },
    },
    {
      path: ROUTES.PRODUCTS.PATH,
      name: ROUTES.PRODUCTS.NAME,
      component: () => import('@/views/product/ProductPage.vue'),
      meta: {
        title: 'Kho 1000+ Mẫu Giao Diện Website Đẹp & Chuẩn SEO',
        description:
          'Khám phá kho mẫu template website đa ngành nghề: bán hàng online, spa làm đẹp, bất động sản, nhà hàng cafe, doanh nghiệp. Xem demo trực tiếp và bảng giá.',
        keywords:
          'kho template website, mẫu website bán hàng, template web spa, mẫu web bất động sản, kho theme web, mua template website, khoweb shop',
      },
    },
    {
      path: ROUTES.PRODUCT_DETAIL.PATH,
      name: ROUTES.PRODUCT_DETAIL.NAME,
      component: () => import('@/views/product/ProductDetailPage.vue'),
      meta: {
        title: 'Chi Tiết Mẫu Template Website Đẹp',
      },
    },
    {
      path: ROUTES.ABOUT.PATH,
      name: ROUTES.ABOUT.NAME,
      component: () => import('@/views/about/AboutPage.vue'),
      meta: {
        title: 'Về Chúng Tôi - Đơn Vị Phát Triển Website Uy Tín',
        description:
          'Website Craft & KhoWeb.shop - Đội ngũ tiên phong cung cấp giải pháp mẫu website có sẵn và dịch vụ thiết kế website theo yêu cầu chuyên nghiệp.',
      },
    },
    {
      path: ROUTES.LEGAL.PATH,
      name: ROUTES.LEGAL.NAME,
      component: () => import('@/views/legal/LegalPage.vue'),
      meta: {
        title: 'Chính Sách Dịch Vụ & Điều Khoản Sử Dụng',
        description:
          'Chính sách bảo mật, điều khoản sử dụng và cam kết dịch vụ khi thuê hoặc mua mẫu website tại KhoWeb.shop.',
      },
    },
    {
      path: ROUTES.ERROR.PATH,
      name: ROUTES.ERROR.NAME,
      component: () => import('@/views/error/ErrorPage.vue'),
      meta: { title: '404 - Không Tìm Thấy Trang' },
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

router.afterEach((to) => {
  isLoading.value = false
  if (to.meta && to.name !== ROUTES.PRODUCT_DETAIL.NAME && to.name !== ROUTES.SERVICES_RENTAL.NAME) {
    updateSeoMeta({
      title: to.meta.title as string | undefined,
      description: to.meta.description as string | undefined,
      keywords: to.meta.keywords as string | undefined,
      canonicalUrl: to.path,
    })
  }
})

export default router
