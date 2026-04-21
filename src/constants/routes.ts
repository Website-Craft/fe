export const ROUTES = {
  HOME: {
    PATH: '/',
    NAME: 'HomePage',
  },
  ABOUT: {
    PATH: '/about',
    NAME: 'AboutPage',
  },
  LEGAL: {
    PATH: '/legal',
    NAME: 'LegalPage',
  },
  PRODUCTS: {
    PATH: '/products',
    NAME: 'ProductPage',
  },
  PRODUCT_DETAIL: {
    PATH: '/products/:id',
    NAME: 'ProductDetailPage',
  },
  ERROR: {
    PATH: '/error',
    NAME: 'NotFound',
  },
} as const
