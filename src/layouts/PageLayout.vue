<template>
  <div class="page-layout">
    <LayoutArrows />
    <main class="page-layout__main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import LayoutArrows from '@/components/LayoutArrows.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.page-layout {
  min-height: 100vh;
  position: relative;
}

.page-layout__main {
  width: min(100% - 8rem, var(--container-width));
  margin-inline: auto;
  padding-block: var(--space-24);
}

@media (max-width: 900px) {
  .page-layout__main {
    width: min(100% - 6rem, var(--container-width));
  }
}

@media (max-width: 640px) {
  .page-layout__main {
    width: min(100% - 2rem, var(--container-width));
    padding-bottom: calc(var(--space-16) + 4.5rem);
  }
}
</style>
