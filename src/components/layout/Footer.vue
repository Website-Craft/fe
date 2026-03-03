<template>
  <footer class="cosmic-footer" ref="footerRef">

    <!-- ====== TOP TOPOLOGIC DIVIDER ====== -->
    <div class="footer-wave-top" aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Đường cong chuyển mượt từ phần nền trên (màu sáng) xuống vùng Dark Navy -->
        <path
          d="M0,60 C240,90 480,20 720,50 C960,80 1200,10 1440,40 L1440,90 L0,90 Z"
          fill="#060913"
        />
        <path
          d="M0,70 C300,40 600,90 900,60 C1100,40 1300,70 1440,55 L1440,90 L0,90 Z"
          fill="rgba(255, 255, 255, 0.03)"
        />
      </svg>
    </div>

    <!-- ====== AMBIENT LIGHTS / ORBS ====== -->
    <div class="footer-orbs" aria-hidden="true">
      <span class="forb forb--1"></span>
      <span class="forb forb--2"></span>
      <span class="forb forb--3"></span>
      <span class="forb forb--4"></span>
    </div>

    <!-- ====== CYBER GRID TEXTURE ====== -->
    <div class="footer-grid-dots" aria-hidden="true"></div>

    <!-- ====== PARTICLE DATA STREAM ====== -->
    <div class="footer-particles" aria-hidden="true">
      <span v-for="n in 24" :key="n" class="fparticle" :style="fparticleStyle(n)"></span>
    </div>
  

    <!-- ====== MAIN INNER CONTENT ====== -->
    <div class="footer-inner">

      <!-- ======= BRAND COLUMN ======= -->
      <div class="footer-brand">
        <!-- Logo -->
        <div class="brand-logo-wrap">
          <div class="brand-logo-icon">
            <span class="logo-letter">W</span>
            <span class="logo-ring" aria-hidden="true"></span>
            <span class="logo-ring-inner" aria-hidden="true"></span>
          </div>
          <div class="brand-logo-text">
            <span class="brand-name shimmer-neon">Website Craft</span>
            <span class="brand-tagline">Premium Digital Studio</span>
          </div>
        </div>

        <!-- Quote -->
        <p class="brand-desc">
          Xoá nhòa ranh giới giữa nghệ thuật và công nghệ. Khởi tạo danh tính số độc bản, bứt phá thời đại.
        </p>

        <!-- Social Icons (Glassmorphism & Neon Glow) -->
        <div class="brand-socials">
          <a href="#" class="social-btn" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" class="social-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
          <a href="#" class="social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" class="social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- ======= EXPLORE ======= -->
      <div class="footer-col">
        <h3 class="footer-col-title">Khám phá</h3>
        <ul class="footer-links">
          <li v-for="link in navLinks" :key="link.label">
            <a :href="link.href" class="footer-link">
              <span class="link-arrow">→</span>
              <span>{{ link.label }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- ======= SOLUTIONS ======= -->
      <div class="footer-col">
        <h3 class="footer-col-title">Giải pháp</h3>
        <ul class="footer-links">
          <li v-for="svc in services" :key="svc.label">
            <a :href="svc.href" class="footer-link">
              <span class="link-arrow">→</span>
              <span>{{ svc.label }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- ======= CONTACT & NEWSLETTER ======= -->
      <div class="footer-col footer-col--wide">
        <!-- Contact Blocks  -->
        <h3 class="footer-col-title">Kết nối</h3>
        <div class="contact-list">
          <a href="mailto:tuandtdeveloper@gmail.com" class="contact-card group">
            <div class="cc-icon-wrap">
              <i class="pi pi-envelope cc-icon"></i>
            </div>
            <div class="cc-content">
              <p class="cc-label">Email Support</p>
              <p class="cc-val">tuandt@gmail.com</p>
            </div>
            <i class="pi pi-arrow-up-right cc-arrow"></i>
          </a>
          <a href="tel:+84828477808" class="contact-card group">
            <div class="cc-icon-wrap">
              <i class="pi pi-phone cc-icon"></i>
            </div>
            <div class="cc-content">
              <p class="cc-label">Hotline</p>
              <p class="cc-val">+84 828 477 808</p>
            </div>
            <i class="pi pi-arrow-up-right cc-arrow"></i>
          </a>
        </div>

        <!-- Newsletter Neo-design -->
        <h3 class="footer-col-title mt-6">Radar Cập nhật</h3>
        <form class="newsletter-form" @submit.prevent="handleSubscribe">
          <div class="input-cyber-group" :class="{ 'is-subscribed': subscribed }">
            <div class="cyber-icon"><i class="pi pi-at"></i></div>
            <input
              v-model="email"
              type="email"
              placeholder="Email của bạn..."
              class="cyber-input"
              :disabled="subscribed"
            />
            <button type="submit" class="cyber-btn" :disabled="subscribed">
              <span v-if="!subscribed" class="cyber-btn-txt">Join</span>
              <i v-else class="pi pi-check text-green-400 font-bold"></i>
              <div class="cyber-btn-glow" aria-hidden="true"></div>
            </button>
          </div>
          <p class="news-hint" v-if="!subscribed">Tin tức UI/UX mới tinh, không spam.</p>
          <p class="news-hint text-[#38BDF8]" v-else>Tuyệt vời, bạn đã nằm trong Radar!</p>
        </form>
      </div>
    </div>

    <!-- ====== BOTTOM METADATA ====== -->
    <div class="footer-bottom">
      <div class="fb-divider"></div>
      
      <div class="fb-content">
        <div class="fb-legal flex flex-wrap gap-4 sm:gap-6">
          <a href="#" class="legal-text">Chính sách bảo mật</a>
          <a href="#" class="legal-text">Điều khoản sử dụng</a>
          <a href="#" class="legal-text">Sitemap</a>
        </div>
        
        <div class="fb-copyright text-center md:text-right">
          <p>© <span class="text-[#38BDF8]">{{ currentYear }}</span> <b class="text-white">Website Craft</b>. System operational.</p>
          <div class="mt-1 flex items-center justify-center md:justify-end gap-1.5 opacity-60 text-xs">
            <span>Coded with</span>
            <svg class="w-3 h-3 text-rose-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
            <span>by TuanDT</span>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'LayoutFooter' })

const currentYear = new Date().getFullYear()
const email       = ref('')
const subscribed  = ref(false)

const handleSubscribe = () => {
  if (!email.value) return
  subscribed.value = true
  setTimeout(() => { subscribed.value = false; email.value = '' }, 3500)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function fparticleStyle(n: number) {
  // Random variables for CSS animation
  const size  = (Math.random() * 3 + 1).toFixed(1)
  const left  = ((n - 1) * 4.2 + Math.random() * 5).toFixed(1)
  const dur   = (3 + Math.random() * 5).toFixed(2)
  const delay = (Math.random() * 5).toFixed(2)
  return {
    width:  `${size}px`,
    height: `${size}px`,
    left:   `${left}%`,
    bottom: `${Math.random() * -10}%`,
    '--dur': `${dur}s`,
    '--delay': `${delay}s`,
  }
}

const navLinks = [
  { label: 'Trang Chủ',   href: '/' },
  { label: 'Về Chúng Tôi',href: '/about' },
  { label: 'Kho Dự Án',   href: '/projects' },
  { label: 'Khách Hàng',  href: '#' },
]

const services = [
  { label: 'Thiết Kế Templates', href: '#' },
  { label: 'Dev. Custom Web',    href: '#' },
  { label: 'Trải Nghiệm UI/UX',  href: '#' },
  { label: 'Hệ Thống Component', href: '#' },
]
</script>

<style scoped>
/* ========================================================
   ROOT: MIDNIGHT NAVY / CYBER SLATE
======================================================== */
.cosmic-footer {
  position: relative;
  /* Dark bluish-slate gradient */
  background: linear-gradient(160deg,
    #060913 0%,
    #0A1121 40%,
    #131B32 80%,
    #0a0f1d 100%
  );
  color: #94A3B8; /* Slate 400 */
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  margin-top: 0;
}

/* ========================================================
   WAVE TOP & ORBS (CYAN, PURPLE, INDIGO)
======================================================== */
.footer-wave-top {
  width: 100%;
  height: 90px;
  margin-top: -2px;
  line-height: 0;
}
.footer-wave-top svg { width: 100%; height: 100%; display: block; }

.footer-orbs { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.forb {
  position: absolute;
  border-radius: 50%;
  filter: blur(85px);
  opacity: 0.18;
}
.forb--1 {
  width: 450px; height: 450px;
  top: -100px; left: -10%;
  background: radial-gradient(circle, #38BDF8, transparent 70%); /* Cyan */
  animation: orb-drift 12s ease-in-out infinite alternate;
}
.forb--2 {
  width: 350px; height: 350px;
  top: 40%; right: -5%;
  background: radial-gradient(circle, #818CF8, transparent 70%); /* Indigo */
  animation: orb-drift 14s ease-in-out infinite alternate-reverse;
}
.forb--3 {
  width: 400px; height: 400px;
  bottom: -50px; left: 30%;
  background: radial-gradient(circle, #2DD4BF, transparent 70%); /* Teal */
  animation: orb-drift 16s ease-in-out infinite alternate;
}
.forb--4 {
  width: 250px; height: 250px;
  bottom: 20%; right: 30%;
  background: radial-gradient(circle, #A78BFA, transparent 70%); /* Purple */
  opacity: 0.1;
  animation: orb-drift 10s ease-in-out infinite alternate-reverse;
}

@keyframes orb-drift {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(30px, -20px) scale(1.05); }
  100% { transform: translate(-20px, 15px) scale(0.95); }
}

/* ========================================================
   CYBER TEXTURE & PARTICLES
======================================================== */
.footer-grid-dots {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 28px 28px;
  z-index: 0;
}

.footer-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; overflow: hidden; }
.fparticle {
  position: absolute;
  border-radius: 50%;
  background: #38BDF8;
  box-shadow: 0 0 12px 2px rgba(56,189,248,0.6);
  animation: stream-particle var(--dur) linear var(--delay) infinite;
  opacity: 0;
}
@keyframes stream-particle {
  0%   { transform: translateY(0); opacity: 0; }
  10%  { opacity: 0.8; }
  90%  { opacity: 0.8; }
  100% { transform: translateY(-80vh); opacity: 0; }
}



/* ========================================================
   LAYOUT
======================================================== */
.footer-inner {
  position: relative;
  z-index: 5;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 24px 60px;
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 0.9fr 1.3fr;
  gap: 40px;
}
@media (max-width: 1100px) {
  .footer-inner { grid-template-columns: 1fr 1fr; gap: 50px; }
}
@media (max-width: 640px) {
  .footer-inner { grid-template-columns: 1fr; gap: 40px; }
}

/* ========================================================
   BRAND
======================================================== */
.brand-logo-wrap { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; }
.brand-logo-icon {
  position: relative;
  width: 54px; height: 54px;
  background: rgba(2, 132, 199, 0.1);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 20px rgba(2, 132, 199, 0.2);
}
.logo-letter {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem; font-weight: 900;
  color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.4);
}
.logo-ring {
  position: absolute; inset: -1px; border-radius: inherit;
  border: 1.5px solid transparent;
  background: linear-gradient(#0284C7, #38BDF8) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.logo-ring-inner {
  position: absolute; inset: -6px; border-radius: 18px;
  border: 1px dashed rgba(56,189,248,0.3);
  animation: ring-spin-cool 8s linear infinite;
}
@keyframes ring-spin-cool { to { transform: rotate(360deg); } }

.brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem; font-weight: 800; letter-spacing: 0.5px;
}
.shimmer-neon {
  background: linear-gradient(90deg, #F8FAFC, #38BDF8, #818CF8, #F8FAFC);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: neon-shimmer 4s linear infinite;
}
@keyframes neon-shimmer { to { background-position: 200% center; } }

.brand-tagline {
  font-size: 10px; color: #38BDF8; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;
}
.brand-desc {
  font-size: 0.9rem; line-height: 1.7; color: #64748B; margin-bottom: 28px; max-width: 320px;
}

/* Social buttons: Glass + Blue Glow */
.brand-socials { display: flex; gap: 12px; }
.social-btn {
  width: 42px; height: 42px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: #94A3B8;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.social-btn svg { width: 18px; height: 18px; }
.social-btn:hover {
  background: rgba(56,189,248,0.1);
  border-color: rgba(56,189,248,0.4);
  color: #38BDF8;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(56,189,248,0.25);
}

/* ========================================================
   LINKS
======================================================== */
.footer-col-title {
  color: #fff; font-size: 1.05rem; font-weight: 700; margin-bottom: 24px; position: relative; padding-left: 14px;
}
.footer-col-title::before {
  content: ''; position: absolute; left: 0; top: 4px; bottom: 4px; width: 3px;
  background: #38BDF8; border-radius: 4px;
  box-shadow: 0 0 8px rgba(56,189,248,0.6);
}
.footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
.footer-link {
  display: flex; align-items: center; gap: 10px; color: #94A3B8; font-size: 0.95rem; text-decoration: none; transition: all 0.3s;
}
.link-arrow { color: #38BDF8; font-size: 1.1rem; opacity: 0; transform: translateX(-8px); transition: all 0.3s; }
.footer-link:hover { color: #F8FAFC; transform: translateX(4px); }
.footer-link:hover .link-arrow { opacity: 1; transform: translateX(0); }

/* ========================================================
   CONTACT CARDS
======================================================== */
.contact-list { display: flex; flex-direction: column; gap: 12px; }
.contact-card {
  display: flex; align-items: center; gap: 14px; padding: 12px 16px; border-radius: 12px;
  background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255,255,255,0.04);
  text-decoration: none; transition: all 0.3s; position: relative; overflow: hidden;
}
.contact-card:hover {
  background: rgba(15, 23, 42, 0.7); border-color: rgba(56,189,248,0.3); transform: translateX(4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
.cc-icon-wrap {
  width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
  background: rgba(56,189,248,0.1); color: #38BDF8; transition: all 0.3s;
}
.contact-card:hover .cc-icon-wrap { background: #38BDF8; color: #fff; box-shadow: 0 0 15px rgba(56,189,248,0.5); }
.cc-icon { font-size: 1.1rem; }
.cc-content { flex: 1; }
.cc-label { font-size: 0.75rem; color: #64748B; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 2px; }
.cc-val { font-size: 0.95rem; color: #E2E8F0; font-weight: 500; }
.cc-arrow { position: absolute; right: 16px; color: #38BDF8; opacity: 0; transform: translate(-10px, 10px); transition: all 0.3s; }
.contact-card:hover .cc-arrow { opacity: 1; transform: translate(0, 0); }

/* ========================================================
   NEWSLETTER
======================================================== */
.input-cyber-group {
  display: flex; align-items: center; background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 6px; box-shadow: inset 0 2px 8px rgba(0,0,0,0.5);
  transition: all 0.3s; position: relative; z-index: 1;
}
.input-cyber-group:focus-within { border-color: rgba(56,189,248,0.5); box-shadow: inset 0 2px 8px rgba(0,0,0,0.5), 0 0 0 3px rgba(56,189,248,0.15); }
.input-cyber-group.is-subscribed { border-color: #4ADE80; background: rgba(74,222,128,0.05); }

.cyber-icon { width: 36px; display: flex; align-items: center; justify-content: center; color: #64748B; }
.input-cyber-group:focus-within .cyber-icon { color: #38BDF8; }

.cyber-input { flex: 1; background: transparent; border: none; color: #fff; font-size: 0.95rem; outline: none; padding: 8px 0; }
.cyber-input::placeholder { color: #475569; }

.cyber-btn {
  position: relative; padding: 8px 20px; background: #0284C7; border: none; border-radius: 8px; color: #fff;
  font-size: 0.9rem; font-weight: 600; cursor: pointer; overflow: hidden; transition: all 0.3s; height: 100%;
}
.cyber-btn:hover:not(:disabled) { background: #38BDF8; transform: translateY(-1px); }
.cyber-btn:disabled { background: rgba(74,222,128,0.1); cursor: default; }
.cyber-btn-glow { position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); animation: sweep 2s linear infinite; }
@keyframes sweep { 0%{ transform: translateX(-150%); } 100%{ transform: translateX(150%); } }

.news-hint { font-size: 0.8rem; color: #64748B; margin-top: 10px; margin-left: 6px; }

/* ========================================================
   METADATA BOTTOM
======================================================== */
.footer-bottom { position: relative; z-index: 5; max-width: 1280px; margin: 0 auto; padding: 0 24px 24px; }
.fb-divider { width: 100%; height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05)); margin-bottom: 24px; }
.fb-content { display: flex; flex-direction: column; md:flex-row; justify-content: space-between; align-items: center; gap: 20px; }
@media (min-width: 768px) { .fb-content { flex-direction: row; } }

.legal-text { font-size: 0.85rem; color: #64748B; text-decoration: none; transition: color 0.2s; }
.legal-text:hover { color: #E2E8F0; }

.fb-copyright p { font-size: 0.9rem; color: #94A3B8; }
</style>
