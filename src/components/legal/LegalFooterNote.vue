<!-- src/components/legal/LegalFooterNote.vue -->
<template>
  <div class="footer-note reveal-up">
    <p>Cập nhật lần cuối: <strong class="text-gold-dark">05/02/2025</strong></p>
    <p>
      © {{ currentYear }} <strong>{{ WebName.WEB_NAME }}</strong
      >. Mọi quyền được bảo lưu.
    </p>
  </div>
</template>

<script setup lang="ts">
import { WebName } from '@/constants'
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-note {
  text-align: center;
  padding: 6rem 1rem 8rem;
  color: var(--color-earth-mid);
  font-size: 1rem;
  border-top: 1px solid rgba(200, 146, 42, 0.15);
  margin-top: 6rem;
}
</style>
