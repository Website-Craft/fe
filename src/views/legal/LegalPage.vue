<template>
  <div class="legal-page">
    <!-- Ambient backgrounds -->
    <div class="page-ambient" aria-hidden="true">
      <span class="pa pa--1"></span>
      <span class="pa pa--2"></span>
    </div>

    <LegalHero
      title="Chính sách & Điều khoản"
      subtitle="Cam kết minh bạch - bảo vệ quyền lợi khách hàng"
    />

    <div class="legal-content relative z-10">
      <LegalSection title="1. Giới thiệu">
        <LegalContentBlock>
          <p>
            Chào mừng bạn đến với <strong>{{ WebName.WEB_NAME }}</strong> – nền tảng cung cấp các
            mẫu website chuyên nghiệp sẵn có và dịch vụ thiết kế website theo yêu cầu.
          </p>
          <p>
            Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản và chính sách được
            nêu trong tài liệu này. Vui lòng đọc kỹ trước khi sử dụng hoặc đặt hàng.
          </p>
        </LegalContentBlock>
      </LegalSection>

      <div class="earth-divider-wrap reveal-up">
        <div class="ed-line"></div>
        <div class="ed-gem"></div>
        <div class="ed-line"></div>
      </div>

      <LegalSection title="2. Điều khoản sử dụng">
        <LegalContentBlock>
          <h4 class="text-earth-bark font-bold mb-3">2.1. Phạm vi sử dụng</h4>
          <p>
            Bạn được phép sử dụng các mẫu website sau khi đã thanh toán đầy đủ và nhận được quyền sử
            dụng hợp pháp.
          </p>

          <h4 class="text-earth-bark font-bold mt-6 mb-3">2.2. Cấm các hành vi</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li>Phân phối lại, bán lại source code mà không được phép</li>
            <li>Sử dụng website vào mục đích bất hợp pháp, lừa đảo, spam</li>
            <li>Can thiệp, tấn công, reverse engineering mã nguồn</li>
          </ul>
        </LegalContentBlock>
      </LegalSection>

      <div class="earth-divider-wrap reveal-up">
        <div class="ed-line"></div>
        <div class="ed-gem"></div>
        <div class="ed-line"></div>
      </div>

      <LegalSection title="3. Chính sách bảo mật">
        <LegalContentBlock>
          <p>
            Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng theo quy định pháp luật Việt
            Nam.
          </p>

          <h4 class="text-earth-bark font-bold mt-6 mb-3">Thông tin chúng tôi thu thập</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li>Họ tên, email, số điện thoại khi đặt hàng</li>
            <li>Thông tin thanh toán (được xử lý qua cổng thanh toán an toàn)</li>
            <li>Cookies và dữ liệu truy cập website</li>
          </ul>

          <h4 class="text-earth-bark font-bold mt-6 mb-3">Chúng tôi sử dụng thông tin để</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li>Xử lý đơn hàng và hỗ trợ khách hàng</li>
            <li>Gửi thông báo cập nhật sản phẩm, khuyến mãi (có thể hủy đăng ký)</li>
            <li>Phân tích và cải thiện chất lượng dịch vụ</li>
          </ul>
        </LegalContentBlock>
      </LegalSection>

      <div class="earth-divider-wrap reveal-up">
        <div class="ed-line"></div>
        <div class="ed-gem"></div>
        <div class="ed-line"></div>
      </div>

      <LegalSection title="4. Thanh toán & Hoàn tiền">
        <LegalContentBlock>
          <p>
            Chúng tôi hỗ trợ các hình thức thanh toán phổ biến: chuyển khoản, Momo, VNPay, thẻ quốc
            tế.
          </p>
          <p class="mt-4">
            Chính sách hoàn tiền chỉ áp dụng trong trường hợp chúng tôi không thể cung cấp sản
            phẩm/dịch vụ đúng như cam kết trong vòng 7 ngày kể từ khi thanh toán.
          </p>
        </LegalContentBlock>
      </LegalSection>

      <div class="earth-divider-wrap reveal-up">
        <div class="ed-line"></div>
        <div class="ed-gem"></div>
        <div class="ed-line"></div>
      </div>

      <LegalSection title="5. Bản quyền & Sở hữu trí tuệ">
        <LegalContentBlock>
          <p>
            Tất cả mẫu website, mã nguồn, thiết kế giao diện đều thuộc quyền sở hữu của
            <strong>{{ WebName.WEB_NAME }}</strong> hoặc được cấp phép hợp pháp. Khách hàng chỉ được
            cấp quyền sử dụng, không phải quyền sở hữu.
          </p>
        </LegalContentBlock>
      </LegalSection>

      <div class="earth-divider-wrap reveal-up">
        <div class="ed-line"></div>
        <div class="ed-gem"></div>
        <div class="ed-line"></div>
      </div>

      <LegalSection title="6. Liên hệ">
        <LegalContentBlock>
          <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ:</p>
          <ul class="mt-4 space-y-2">
            <li>
              <strong>Email:</strong>
              <a href="mailto:tuandtdeveloper@gmail.com" class="ml-2 text-gold-dark hover:underline"
                >tuandtdeveloper@gmail.com</a
              >
            </li>
            <li><strong>Zalo / Hotline:</strong> <span class="ml-2">0828.477.808</span></li>
          </ul>
        </LegalContentBlock>
      </LegalSection>
    </div>

    <LegalFooterNote />
  </div>
</template>

<script setup lang="ts">
import LegalHero from '@/components/legal/LegalHero.vue'
import LegalSection from '@/components/legal/LegalSection.vue'
import LegalContentBlock from '@/components/legal/LegalContentBlock.vue'
import LegalFooterNote from '@/components/legal/LegalFooterNote.vue'
import { onMounted } from 'vue'
import { WebName } from '@/constants'

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
.legal-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #1a0f00 0%, #fdf6e9 15%, #f5ead0 100%);
  color: var(--color-earth-bark);
  padding-bottom: 5rem;
  position: relative;
  overflow-x: hidden;
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
  filter: blur(100px);
  opacity: 0.1;
}
.pa--1 {
  width: 400px;
  height: 400px;
  top: 20%;
  right: -150px;
  background: var(--color-gold-base);
}
.pa--2 {
  width: 500px;
  height: 300px;
  bottom: 20%;
  left: -200px;
  background: var(--color-terra-base);
}

.legal-content {
  max-width: 100%;
  margin: 0 auto;
}

/* Divider Styling */
.earth-divider-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.ed-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 146, 42, 0.4), transparent);
}
.ed-gem {
  width: 10px;
  height: 10px;
  background: var(--color-gold-base);
  transform: rotate(45deg);
  box-shadow: 0 0 10px rgba(200, 146, 42, 0.5);
}

/* Reveal Animation */
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
