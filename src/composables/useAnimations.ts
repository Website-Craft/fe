// src/composables/useAnimations.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initLegalPageAnimations(): void {
  // Hero
  gsap.from('.hero .title', {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  })

  gsap.from('.hero .subtitle', {
    y: 60,
    opacity: 0,
    duration: 1.4,
    delay: 0.4,
    ease: 'power3.out',
  })

  // Sections
  const sections = gsap.utils.toArray<HTMLElement>('.legal-section')

  sections.forEach((section, i) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: i * 0.15,
    })

    // Title underline (pseudo-element ::after)
    const underline = section.querySelector<HTMLElement>('.section-title::after')
    if (underline) {
      gsap.from(underline, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
        width: 0,
        duration: 1.2,
        ease: 'power2.out',
      })
    }
  })

  // List items stagger
  const listItems = gsap.utils.toArray<HTMLElement>('.content-block ul li')

  listItems.forEach((li) => {
    gsap.from(li, {
      scrollTrigger: {
        trigger: li,
        start: 'top 90%',
      },
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.15,
    })
  })
}