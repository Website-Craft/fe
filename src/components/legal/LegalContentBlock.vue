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
  color: var(--color-earth-bark);
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
}

.content-block ul {
  list-style: none;
  padding-left: 2rem;
}

.content-block ul li {
  position: relative;
  margin-bottom: 1rem;
}

.content-block ul li::before {
  content: '⬥';
  color: var(--color-gold-base);
  position: absolute;
  left: -1.8rem;
  font-size: 1rem;
  line-height: inherit;
  display: inline-block;
  vertical-align: middle;
}
</style>
