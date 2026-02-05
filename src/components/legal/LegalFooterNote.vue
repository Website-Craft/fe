<!-- src/components/lega/LegalFooterNote.vue -->
<template>
  <div class="footer-note">
    <p>Cập nhật lần cuối: <strong>05/02/2025</strong></p>
    <p>© {{ currentYear }} [Tên Công ty]. Mọi quyền được bảo lưu.</p>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-note {
  text-align: center;
  padding: 4rem 1rem 6rem;
  color: var(--color-coban-base);
  font-size: 0.98rem;
  border-top: 1px solid var(--color-grey-base);
  margin-top: 5rem;
}
</style>