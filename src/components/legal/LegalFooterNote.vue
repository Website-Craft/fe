<!-- src/components/legal/LegalFooterNote.vue -->
<template>
  <div class="footer-note reveal-up">
    <p>{{ $t('LEGAL_FOOTER.LAST_UPDATED') }} <strong class="text-gold-dark">05/02/2025</strong></p>
    <p>
      © {{ currentYear }} <strong>{{ WebName.WEB_NAME }}</strong
      >. {{ $t('LEGAL_FOOTER.ALL_RIGHTS') }}
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
