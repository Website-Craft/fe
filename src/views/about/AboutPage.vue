<template>
  <div class="about-page">
    <!-- Ambient backgrounds (similar to HomePage) -->
    <div class="page-ambient" aria-hidden="true">
      <span class="pa pa--1"></span>
      <span class="pa pa--2"></span>
    </div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <!-- --- HERO SECTION --- -->
      <section class="hero-section text-center mb-24 reveal-up">
        <div class="eyebrow mb-4">Về Chúng Tôi</div>
        <h1 class="text-6xl md:text-7xl font-extrabold mb-8 text-gradient-earth leading-tight">
          Kiến tạo giải pháp số <br />
          mang tầm vóc tương lai
        </h1>
        <p
          class="text-lg md:text-xl text-earth-mid max-w-3xl mx-auto leading-relaxed mb-12 opacity-90"
        >
          Chào mừng bạn đến với My App, nơi mọi ý tưởng về website và ứng dụng di động đều được hiện
          thực hóa một cách chỉnh chu và chuyên nghiệp nhất. Chúng tôi tự hào là đội ngũ tiên phong
          trong việc cung cấp các giải pháp phát triển website và ứng dụng theo yêu cầu.
        </p>

        <div class="hero-img-container earth-card p-2 md:p-3 max-w-5xl mx-auto overflow-hidden">
          <img
            :src="AboutImg1"
            alt="Our Team Working"
            class="w-full h-auto rounded-xl object-cover transform transition-transform duration-700 hover:scale-105"
            style="max-height: 550px"
          />
        </div>
      </section>

      <!-- --- MISSION SECTION --- -->
      <section
        class="mission-section grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20 reveal-up"
      >
        <div class="mission-image-wrap order-2 md:order-1">
          <div class="mission-img-inner glass-card-light p-3 rounded-2xl glow-amber">
            <img
              :src="AboutImg2"
              alt="Mission Vision"
              class="w-full rounded-xl shadow-2xl object-cover transform transition-transform duration-500 hover:rotate-2"
              style="max-height: 450px"
            />
          </div>
        </div>

        <div class="mission-content order-1 md:order-2">
          <h2 class="text-4xl md:text-5xl font-bold text-earth-bark mb-8 premium-border pb-4">
            Sứ mệnh của chúng tôi
          </h2>
          <p class="text-earth-mid leading-relaxed mb-6 text-lg">
            Sứ mệnh của My App là đồng hành cùng bạn trên mọi nẻo đường số hóa, từ việc cung cấp các
            template website độc đáo, sẵn sàng sử dụng, đến việc phát triển website và ứng dụng di
            động hoàn toàn theo yêu cầu.
          </p>
          <p class="text-earth-mid leading-relaxed text-lg">
            Chúng tôi không ngừng nghiên cứu, học hỏi và áp dụng những công nghệ mới nhất để đảm bảo
            mọi dự án đều đạt được hiệu suất tối ưu, bảo mật cao và trải nghiệm người dùng mượt mà.
          </p>
        </div>
      </section>

      <!-- --- VALUES SECTION --- -->
      <section class="values-section py-20 reveal-up">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-earth-bark mb-6">Giá trị cốt lõi</h2>
          <div class="earth-divider-small mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Card 1 -->
          <div class="value-card earth-card p-10 text-center hover-glow bg-white/40">
            <div class="icon-wrap mb-6 text-gradient-earth text-5xl">
              <i class="pi pi-palette"></i>
            </div>
            <h3 class="text-2xl font-bold text-earth-bark mb-4">Sáng tạo & Độc đáo</h3>
            <p class="text-earth-mid">
              Mỗi sản phẩm là một tác phẩm nghệ thuật, kết hợp hoàn hảo giữa thẩm mỹ hiện đại và
              tính ứng dụng cao.
            </p>
          </div>
          <!-- Card 2 -->
          <div class="value-card earth-card p-10 text-center hover-glow bg-white/40">
            <div class="icon-wrap mb-6 text-gradient-earth text-5xl">
              <i class="pi pi-cog"></i>
            </div>
            <h3 class="text-2xl font-bold text-earth-bark mb-4">Công nghệ đỉnh cao</h3>
            <p class="text-earth-mid">
              Áp dụng mọi công nghệ tiên tiến nhất (Vue, Next.js, Cloudinary...) để đảm bảo sự đột
              phá tối ưu.
            </p>
          </div>
          <!-- Card 3 -->
          <div class="value-card earth-card p-10 text-center hover-glow bg-white/40">
            <div class="icon-wrap mb-6 text-gradient-earth text-5xl">
              <i class="pi pi-handshake"></i>
            </div>
            <h3 class="text-2xl font-bold text-earth-bark mb-4">Tận tâm & Đồng hành</h3>
            <p class="text-earth-mid">
              Chúng tôi luôn lắng nghe và đồng hành sát sao từ khâu ý tưởng đến khi vận hành thực
              tế.
            </p>
          </div>
        </div>
      </section>

      <!-- --- CTA SECTION --- -->
      <section class="cta-section mt-20 reveal-up">
        <div
          class="cta-inner glass-card p-12 md:p-20 rounded-[40px] text-center bg-dark-earth text-white relative overflow-hidden"
        >
          <!-- Decorative elements -->
          <span class="cta-glow ha--1 opacity-20"></span>

          <div class="relative z-10">
            <h2 class="text-4xl md:text-6xl font-extrabold mb-8 italic">
              Sẵn sàng kiến tạo nên <br />
              sản phẩm số của riêng bạn?
            </h2>
            <p class="text-xl opacity-80 max-w-2xl mx-auto mb-12">
              Chúng tôi nhận phát triển website và ứng dụng trọn gói. Liên hệ ngay để nhận tư vấn từ
              chuyên gia.
            </p>

            <div class="flex flex-wrap justify-center gap-6">
              <a href="tel:0828477808" class="cta-btn btn-gold glass-card-light">
                <i class="pi pi-phone mr-3"></i> 0828.477.808
              </a>
              <a
                href="https://zalo.me/0828477808"
                target="_blank"
                class="cta-btn btn-green glass-card-light"
              >
                <i class="pi pi-comment mr-3"></i> Liên hệ Zalo
              </a>
              <a href="mailto:tuandtdeveloper@gmail.com" class="cta-btn btn-white glass-card-light">
                <i class="pi pi-envelope mr-3"></i> Gửi Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AboutImg1 from '@/assets/images/about/team-working.webp'
import AboutImg2 from '@/assets/images/about/mission-vision.jpg'

defineOptions({ name: 'AboutPage' })

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0d0700 0%, #1a0f00 10%, #fdf6e9 25%, #f5ead0 100%);
  color: var(--color-earth-bark);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  position: relative;
}

/* Ambient Lights */
.page-ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.pa {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.1;
}
.pa--1 {
  width: 500px;
  height: 500px;
  top: 10%;
  right: -200px;
  background: #c8922a;
}
.pa--2 {
  width: 600px;
  height: 400px;
  bottom: 10%;
  left: -300px;
  background: #b85c38;
}

.eyebrow {
  font-size: 0.9rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-gold-base);
}

.earth-divider-small {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--color-amber-base), transparent);
  border-radius: 2px;
}

.hero-img-container {
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.15);
}

.cta-btn {
  padding: 1rem 2.5rem;
  border-radius: 99px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: var(--color-earth-bark);
  border-color: rgba(255, 255, 255, 0.4);
}
.cta-btn:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.btn-gold {
  background: linear-gradient(135deg, #f5d78e, #c8922a);
}
.btn-green {
  background: linear-gradient(135deg, #8dc381, #3d5a3e);
  color: white;
}
.btn-white {
  background: white;
}

/* Reveal Animation */
.reveal-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 3rem;
  }
}
</style>
