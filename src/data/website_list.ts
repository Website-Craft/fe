export interface TemplateFeature {
  icon: string
  title: string
  desc: string
}

export interface Template {
  id: number | string
  slug: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  description: string
  features: TemplateFeature[]
}

export const templates: Template[] = [
  {
    id: 'elegant-e-store',
    slug: 'elegant-e-store',
    name: 'TEMPLATES.ELEGANT_ESTORE.NAME',
    category: 'CATEGORIES.ECOMMERCE',
    price: 199,
    originalPrice: 299,
    image: '/images/templates/modern.png',
    images: [
      '/images/templates/modern.png',
      '/images/templates/modern_product.png',
      '/images/templates/modern_cart.png',
    ],
    description: 'TEMPLATES.ELEGANT_ESTORE.DESC',
    features: [
      {
        icon: 'pi pi-shopping-bag',
        title: 'TEMPLATES.ELEGANT_ESTORE.F1.T',
        desc: 'TEMPLATES.ELEGANT_ESTORE.F1.D',
      },
      {
        icon: 'pi pi-star',
        title: 'TEMPLATES.ELEGANT_ESTORE.F2.T',
        desc: 'TEMPLATES.ELEGANT_ESTORE.F2.D',
      },
      {
        icon: 'pi pi-heart',
        title: 'TEMPLATES.ELEGANT_ESTORE.F3.T',
        desc: 'TEMPLATES.ELEGANT_ESTORE.F3.D',
      },
    ],
  },
  {
    id: 'luxury-profile',
    slug: 'luxury-profile',
    name: 'TEMPLATES.LUXURY_PROFILE.NAME',
    category: 'CATEGORIES.PORTFOLIO',
    price: 149,
    originalPrice: 249,
    image: '/images/templates/luxury.png',
    images: ['/images/templates/luxury.png'],
    description: 'TEMPLATES.LUXURY_PROFILE.DESC',
    features: [
      {
        icon: 'pi pi-palette',
        title: 'TEMPLATES.LUXURY_PROFILE.F1.T',
        desc: 'TEMPLATES.LUXURY_PROFILE.F1.D',
      },
      {
        icon: 'pi pi-image',
        title: 'TEMPLATES.LUXURY_PROFILE.F2.T',
        desc: 'TEMPLATES.LUXURY_PROFILE.F2.D',
      },
      {
        icon: 'pi pi-send',
        title: 'TEMPLATES.LUXURY_PROFILE.F3.T',
        desc: 'TEMPLATES.LUXURY_PROFILE.F3.D',
      },
    ],
  },
  {
    id: 'corporate-elite',
    slug: 'corporate-elite',
    name: 'TEMPLATES.CORPORATE_ELITE.NAME',
    category: 'CATEGORIES.CORPORATE',
    price: 249,
    originalPrice: 349,
    image: '/images/templates/corporate.png',
    images: ['/images/templates/corporate.png'],
    description: 'TEMPLATES.CORPORATE_ELITE.DESC',
    features: [
      {
        icon: 'pi pi-briefcase',
        title: 'TEMPLATES.CORPORATE_ELITE.F1.T',
        desc: 'TEMPLATES.CORPORATE_ELITE.F1.D',
      },
      {
        icon: 'pi pi-chart-line',
        title: 'TEMPLATES.CORPORATE_ELITE.F2.T',
        desc: 'TEMPLATES.CORPORATE_ELITE.F2.D',
      },
      {
        icon: 'pi pi-bolt',
        title: 'TEMPLATES.CORPORATE_ELITE.F3.T',
        desc: 'TEMPLATES.CORPORATE_ELITE.F3.D',
      },
    ],
  },
  {
    id: 1,
    slug: 'wolf-home',
    name: 'TEMPLATES.WOLF_HOME.NAME',
    category: 'CATEGORIES.ECOMMERCE',
    price: 99,
    image:
      'https://s3-ap-southeast-1.amazonaws.com/bizweb-themes/themes/3824/themestores/74585317a4ba9bb8c6d2fae2c87f312b.jpg?1759228536143',
    images: [
      'https://s3-ap-southeast-1.amazonaws.com/bizweb-themes/themes/3824/themestores/74585317a4ba9bb8c6d2fae2c87f312b.jpg?1759228536143',
    ],
    description: 'TEMPLATES.WOLF_HOME.DESC',
    features: [
      { icon: 'pi pi-home', title: 'TEMPLATES.WOLF_HOME.F1.T', desc: 'TEMPLATES.WOLF_HOME.F1.D' },
      {
        icon: 'pi pi-shopping-cart',
        title: 'TEMPLATES.WOLF_HOME.F2.T',
        desc: 'TEMPLATES.WOLF_HOME.F2.D',
      },
      { icon: 'pi pi-mobile', title: 'TEMPLATES.WOLF_HOME.F3.T', desc: 'TEMPLATES.WOLF_HOME.F3.D' },
    ],
  },
  {
    id: 2,
    slug: 'shoes-website',
    name: 'TEMPLATES.SHOES_WEBSITE.NAME',
    category: 'CATEGORIES.ECOMMERCE',
    price: 119,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3840/themestores/f408f349e3df957cb8cee81708d51df5.jpg?1768199536270',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3840/themestores/f408f349e3df957cb8cee81708d51df5.jpg?1768199536270',
    ],
    description: 'TEMPLATES.SHOES_WEBSITE.DESC',
    features: [
      {
        icon: 'pi pi-tags',
        title: 'TEMPLATES.SHOES_WEBSITE.F1.T',
        desc: 'TEMPLATES.SHOES_WEBSITE.F1.D',
      },
      {
        icon: 'pi pi-filter',
        title: 'TEMPLATES.SHOES_WEBSITE.F2.T',
        desc: 'TEMPLATES.SHOES_WEBSITE.F2.D',
      },
      {
        icon: 'pi pi-image',
        title: 'TEMPLATES.SHOES_WEBSITE.F3.T',
        desc: 'TEMPLATES.SHOES_WEBSITE.F3.D',
      },
    ],
  },
  {
    id: 3,
    slug: 'ega-dien-may',
    name: 'TEMPLATES.EGA_DIENMAY.NAME',
    category: 'CATEGORIES.ECOMMERCE',
    price: 129,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3809/themestores/f73e6d318ab4c007731bb53be39f8fb1.jpg?1755585063467',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3809/themestores/f73e6d318ab4c007731bb53be39f8fb1.jpg?1755585063467',
    ],
    description: 'TEMPLATES.EGA_DIENMAY.DESC',
    features: [
      {
        icon: 'pi pi-list',
        title: 'TEMPLATES.EGA_DIENMAY.F1.T',
        desc: 'TEMPLATES.EGA_DIENMAY.F1.D',
      },
      {
        icon: 'pi pi-sync',
        title: 'TEMPLATES.EGA_DIENMAY.F2.T',
        desc: 'TEMPLATES.EGA_DIENMAY.F2.D',
      },
      {
        icon: 'pi pi-shield',
        title: 'TEMPLATES.EGA_DIENMAY.F3.T',
        desc: 'TEMPLATES.EGA_DIENMAY.F3.D',
      },
    ],
  },
  {
    id: 4,
    slug: 'bean-dong-trung',
    name: 'TEMPLATES.BEAN_DONGTRUNG.NAME',
    category: 'CATEGORIES.HEALTH',
    price: 89,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3825/themestores/6bee0453d7ed4875ce977d602a642f51.jpg?1757305825917',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3825/themestores/6bee0453d7ed4875ce977d602a642f51.jpg?1757305825917',
    ],
    description: 'TEMPLATES.BEAN_DONGTRUNG.DESC',
    features: [
      {
        icon: 'pi pi-heart-fill',
        title: 'TEMPLATES.BEAN_DONGTRUNG.F1.T',
        desc: 'TEMPLATES.BEAN_DONGTRUNG.F1.D',
      },
      {
        icon: 'pi pi-info-circle',
        title: 'TEMPLATES.BEAN_DONGTRUNG.F2.T',
        desc: 'TEMPLATES.BEAN_DONGTRUNG.F2.D',
      },
      {
        icon: 'pi pi-shopping-cart',
        title: 'TEMPLATES.BEAN_DONGTRUNG.F3.T',
        desc: 'TEMPLATES.BEAN_DONGTRUNG.F3.D',
      },
    ],
  },
  {
    id: 5,
    slug: 'f1genz-smart',
    name: 'TEMPLATES.F1GENZ_SMART.NAME',
    category: 'CATEGORIES.TECH',
    price: 159,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3803/themestores/e5de2ac48703851f8c7e0178ffc0c6c2.jpg?1753866905523',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3803/themestores/e5de2ac48703851f8c7e0178ffc0c6c2.jpg?1753866905523',
    ],
    description: 'TEMPLATES.F1GENZ_SMART.DESC',
    features: [
      {
        icon: 'pi pi-bolt',
        title: 'TEMPLATES.F1GENZ_SMART.F1.T',
        desc: 'TEMPLATES.F1GENZ_SMART.F1.D',
      },
      {
        icon: 'pi pi-wallet',
        title: 'TEMPLATES.F1GENZ_SMART.F2.T',
        desc: 'TEMPLATES.F1GENZ_SMART.F2.D',
      },
      {
        icon: 'pi pi-search',
        title: 'TEMPLATES.F1GENZ_SMART.F3.T',
        desc: 'TEMPLATES.F1GENZ_SMART.F3.D',
      },
    ],
  },
  {
    id: 6,
    slug: 'f1genz-seafood',
    name: 'TEMPLATES.F1GENZ_SEAFOOD.NAME',
    category: 'CATEGORIES.FOOD',
    price: 89,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3821/themestores/73ca15aa8d3c76a280923cf9b70aed8a.jpg?1753866898660',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3821/themestores/73ca15aa8d3c76a280923cf9b70aed8a.jpg?1753866898660',
    ],
    description: 'TEMPLATES.F1GENZ_SEAFOOD.DESC',
    features: [
      {
        icon: 'pi pi-ticket',
        title: 'TEMPLATES.F1GENZ_SEAFOOD.F1.T',
        desc: 'TEMPLATES.F1GENZ_SEAFOOD.F1.D',
      },
      {
        icon: 'pi pi-clock',
        title: 'TEMPLATES.F1GENZ_SEAFOOD.F2.T',
        desc: 'TEMPLATES.F1GENZ_SEAFOOD.F2.D',
      },
      {
        icon: 'pi pi-phone',
        title: 'TEMPLATES.F1GENZ_SEAFOOD.F3.T',
        desc: 'TEMPLATES.F1GENZ_SEAFOOD.F3.D',
      },
    ],
  },
  {
    id: 7,
    slug: 'sudes-camp',
    name: 'TEMPLATES.SUDES_CAMP.NAME',
    category: 'CATEGORIES.ENTERTAINMENT',
    price: 99,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3826/themestores/f2be82c87abec217511147ceef87d0c2.jpg?1759229400103',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3826/themestores/f2be82c87abec217511147ceef87d0c2.jpg?1759229400103',
    ],
    description: 'TEMPLATES.SUDES_CAMP.DESC',
    features: [
      {
        icon: 'pi pi-compass',
        title: 'TEMPLATES.SUDES_CAMP.F1.T',
        desc: 'TEMPLATES.SUDES_CAMP.F1.D',
      },
      {
        icon: 'pi pi-comments',
        title: 'TEMPLATES.SUDES_CAMP.F2.T',
        desc: 'TEMPLATES.SUDES_CAMP.F2.D',
      },
      { icon: 'pi pi-tag', title: 'TEMPLATES.SUDES_CAMP.F3.T', desc: 'TEMPLATES.SUDES_CAMP.F3.D' },
    ],
  },
  {
    id: 8,
    slug: 'f1genz-model-fashion',
    name: 'TEMPLATES.F1GENZ_MODEL.NAME',
    category: 'CATEGORIES.FASHION',
    price: 139,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3791/themestores/c06faad039163483020a7d2108bffc91.jpg?1763526572547',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3791/themestores/c06faad039163483020a7d2108bffc91.jpg?1763526572547',
    ],
    description: 'TEMPLATES.F1GENZ_MODEL.DESC',
    features: [
      {
        icon: 'pi pi-camera',
        title: 'TEMPLATES.F1GENZ_MODEL.F1.T',
        desc: 'TEMPLATES.F1GENZ_MODEL.F1.D',
      },
      {
        icon: 'pi pi-video',
        title: 'TEMPLATES.F1GENZ_MODEL.F2.T',
        desc: 'TEMPLATES.F1GENZ_MODEL.F2.D',
      },
      {
        icon: 'pi pi-shield',
        title: 'TEMPLATES.F1GENZ_MODEL.F3.T',
        desc: 'TEMPLATES.F1GENZ_MODEL.F3.D',
      },
    ],
  },
  {
    id: 9,
    slug: 'wolf-music',
    name: 'TEMPLATES.WOLF_MUSIC.NAME',
    category: 'CATEGORIES.ENTERTAINMENT',
    price: 79,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3827/themestores/c6014396db8c4c26c51b8213b1bed028.jpg?1759721769893',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3827/themestores/c6014396db8c4c26c51b8213b1bed028.jpg?1759721769893',
    ],
    description: 'TEMPLATES.WOLF_MUSIC.DESC',
    features: [
      {
        icon: 'pi pi-volume-up',
        title: 'TEMPLATES.WOLF_MUSIC.F1.T',
        desc: 'TEMPLATES.WOLF_MUSIC.F1.D',
      },
      {
        icon: 'pi pi-align-left',
        title: 'TEMPLATES.WOLF_MUSIC.F2.T',
        desc: 'TEMPLATES.WOLF_MUSIC.F2.D',
      },
      { icon: 'pi pi-star', title: 'TEMPLATES.WOLF_MUSIC.F3.T', desc: 'TEMPLATES.WOLF_MUSIC.F3.D' },
    ],
  },
  {
    id: 10,
    slug: 'ega-food',
    name: 'TEMPLATES.EGA_FOOD.NAME',
    category: 'CATEGORIES.FOOD',
    price: 89,
    image:
      'https://bizwebtheme.dktcdn.net/themes/3812/themestores/9671e91dac568886118c4820d3edacad.jpg?1759283363143',
    images: [
      'https://bizwebtheme.dktcdn.net/themes/3812/themestores/9671e91dac568886118c4820d3edacad.jpg?1759283363143',
    ],
    description: 'TEMPLATES.EGA_FOOD.DESC',
    features: [
      { icon: 'pi pi-clock', title: 'TEMPLATES.EGA_FOOD.F1.T', desc: 'TEMPLATES.EGA_FOOD.F1.D' },
      {
        icon: 'pi pi-map-marker',
        title: 'TEMPLATES.EGA_FOOD.F2.T',
        desc: 'TEMPLATES.EGA_FOOD.F2.D',
      },
      { icon: 'pi pi-check', title: 'TEMPLATES.EGA_FOOD.F3.T', desc: 'TEMPLATES.EGA_FOOD.F3.D' },
    ],
  },
]
