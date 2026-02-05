// src/composables/useAnimations.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initLegalPageAnimations() {
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
  gsap.utils.toArray('.legal-section').forEach((section: any, i: number) => {
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

    // Title underline
    gsap.from(section.querySelector('.section-title::after'), {
      scrollTrigger: section,
      width: 0,
      duration: 1.2,
      ease: 'power2.out',
    })
  })

  // List items stagger
  gsap.utils.toArray('.content-block ul li').forEach((li: any) => {
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