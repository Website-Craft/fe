<!-- src/views/LegalPage.vue -->
<template>
  <div class="legal-page">
    <LegalHero title="Chính sách & Điều khoản" subtitle="Cam kết minh bạch - bảo vệ quyền lợi khách hàng" />

    <div class="container">
      <LegalSection title="1. Giới thiệu">
        <LegalContentBlock>
          <p>
            Chào mừng bạn đến với <strong>[Tên Website]</strong> – nền tảng cung cấp các mẫu website chuyên nghiệp
            sẵn có và dịch vụ thiết kế website theo yêu cầu.
          </p>
          <p>
            Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản và chính sách được nêu trong tài liệu này.
            Vui lòng đọc kỹ trước khi sử dụng hoặc đặt hàng.
          </p>
        </LegalContentBlock>
      </LegalSection>

      <LegalSection title="2. Điều khoản sử dụng">
        <LegalContentBlock>
          <h4>2.1. Phạm vi sử dụng</h4>
          <p>Bạn được phép sử dụng các mẫu website sau khi đã thanh toán đầy đủ và nhận được quyền sử dụng hợp pháp.</p>

          <h4>2.2. Cấm các hành vi</h4>
          <ul>
            <li>Phân phối lại, bán lại source code mà không được phép</li>
            <li>Sử dụng website vào mục đích bất hợp pháp, lừa đảo, spam</li>
            <li>Can thiệp, tấn công, reverse engineering mã nguồn</li>
          </ul>
        </LegalContentBlock>
      </LegalSection>

      <LegalSection title="3. Chính sách bảo mật">
        <LegalContentBlock>
          <p>Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng theo quy định pháp luật Việt Nam.</p>

          <h4>Thông tin chúng tôi thu thập</h4>
          <ul>
            <li>Họ tên, email, số điện thoại khi đặt hàng</li>
            <li>Thông tin thanh toán (được xử lý qua cổng thanh toán an toàn)</li>
            <li>Cookies và dữ liệu truy cập website</li>
          </ul>

          <h4>Chúng tôi sử dụng thông tin để</h4>
          <ul>
            <li>Xử lý đơn hàng và hỗ trợ khách hàng</li>
            <li>Gửi thông báo cập nhật sản phẩm, khuyến mãi (có thể hủy đăng ký)</li>
            <li>Phân tích và cải thiện chất lượng dịch vụ</li>
          </ul>
        </LegalContentBlock>
      </LegalSection>

      <LegalSection title="4. Thanh toán & Hoàn tiền">
        <LegalContentBlock>
          <p>Chúng tôi hỗ trợ các hình thức thanh toán phổ biến: chuyển khoản, Momo, VNPay, thẻ quốc tế.</p>
          <p>
            Chính sách hoàn tiền chỉ áp dụng trong trường hợp chúng tôi không thể cung cấp sản phẩm/dịch vụ
            đúng như cam kết trong vòng 7 ngày kể từ khi thanh toán.
          </p>
        </LegalContentBlock>
      </LegalSection>

      <LegalSection title="5. Bản quyền & Sở hữu trí tuệ">
        <LegalContentBlock>
          <p>
            Tất cả mẫu website, mã nguồn, thiết kế giao diện đều thuộc quyền sở hữu của [Tên Công ty] hoặc
            được cấp phép hợp pháp. Khách hàng chỉ được cấp quyền sử dụng, không phải quyền sở hữu.
          </p>
        </LegalContentBlock>
      </LegalSection>

      <LegalSection title="6. Liên hệ">
        <LegalContentBlock>
          <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ:</p>
          <ul>
            <li>Email: support@tenwebsite.vn</li>
            <li>Zalo / Hotline: 090x xxx xxx</li>
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
import { initLegalPageAnimations } from '@/composables/useAnimations'
import { onMounted } from 'vue'

onMounted(() => {
  initLegalPageAnimations()
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--color-beige-base);
  color: var(--color-black);
  padding-top: var(--header-height);
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.hero .title {
  background: linear-gradient(90deg, #FF6D1F, #C66E52, #E9B63B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Subtle background move */
.hero {
  background-attachment: fixed;
  background-size: 120% 120%;
  background-position: center;
  transition: background-position 0.8s ease;
}

.hero:hover {
  background-position: 55% 55%;
}

/* Hover card nhẹ */
.section-content {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>