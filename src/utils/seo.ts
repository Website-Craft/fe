export interface SeoMetaOptions {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  schemaJson?: object | object[]
}

const DEFAULT_SEO = {
  title: 'Kho Web & Dịch Vụ Thuê Website Chuyên Nghiệp - KhoWeb.shop',
  description:
    'KhoWeb.shop - Kho 1000+ mẫu template website đẹp, hiện đại, chuẩn SEO. Dịch vụ cho thuê website theo tháng, thiết kế web theo mẫu trọn gói giá rẻ, uy tín.',
  keywords:
    'kho web, template website, thuê web, thuê website, thuê website theo tháng, mua template web, mẫu website đẹp, kho giao diện website, thiết kế website theo mẫu, web bán hàng chuẩn seo, khoweb shop',
  canonicalBase: 'https://www.khoweb.shop',
  ogImage: 'https://www.khoweb.shop/og-image.png',
}

/**
 * Updates document meta tags, canonical link, open graph, and injects dynamic JSON-LD schema
 */
export function updateSeoMeta(options: SeoMetaOptions = {}) {
  const title = options.title ? `${options.title} - KhoWeb.shop` : DEFAULT_SEO.title
  const description = options.description || DEFAULT_SEO.description
  const keywords = options.keywords || DEFAULT_SEO.keywords
  const canonicalUrl = options.canonicalUrl
    ? (options.canonicalUrl.startsWith('http')
        ? options.canonicalUrl
        : `${DEFAULT_SEO.canonicalBase}${options.canonicalUrl}`)
    : `${DEFAULT_SEO.canonicalBase}${window.location.pathname}`
  const ogImage = options.ogImage || DEFAULT_SEO.ogImage
  const ogType = options.ogType || 'website'

  // Update title
  document.title = title

  // Helper to set or create meta tag
  const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attrName, attrValue)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  // Update basic SEO tags
  setMetaTag('name', 'description', description)
  setMetaTag('name', 'keywords', keywords)

  // Update Canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', canonicalUrl)

  // Update Open Graph tags
  setMetaTag('property', 'og:title', title)
  setMetaTag('property', 'og:description', description)
  setMetaTag('property', 'og:url', canonicalUrl)
  setMetaTag('property', 'og:image', ogImage)
  setMetaTag('property', 'og:type', ogType)

  // Update Twitter tags
  setMetaTag('name', 'twitter:title', title)
  setMetaTag('name', 'twitter:description', description)
  setMetaTag('name', 'twitter:url', canonicalUrl)
  setMetaTag('name', 'twitter:image', ogImage)

  // Dynamic JSON-LD Schema
  const SCHEMA_SCRIPT_ID = 'dynamic-seo-schema'
  const existingScript = document.getElementById(SCHEMA_SCRIPT_ID)
  if (existingScript) {
    existingScript.remove()
  }

  if (options.schemaJson) {
    const script = document.createElement('script')
    script.id = SCHEMA_SCRIPT_ID
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(options.schemaJson)
    document.head.appendChild(script)
  }
}
