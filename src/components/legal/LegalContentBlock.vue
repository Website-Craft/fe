<!-- src/components/lega/LegalContentBlock.vue -->
<template>
  <div class="content-block">
    <slot />
  </div>
</template>

<style scoped>
.content-block {
  margin-bottom: 2rem;
}

.content-block h4 {
  color: var(--color-dark-blue);
  font-size: 1.3rem;
  margin: 1.8rem 0 0.9rem;
}

.content-block ul {
  list-style: none;
  padding-left: 1.8rem;
}

.content-block ul li {
  position: relative;
  margin-bottom: 0.9rem;
}

.content-block ul li::before {
  content: '•';
  color: var(--color-orange-base);
  position: absolute;
  left: -1.4rem;
  font-size: 1.6rem;
  line-height: 1;
}
</style>