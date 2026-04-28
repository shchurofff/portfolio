<template>
  <section class="info-panel card animate-blur-reveal animate-delay-2">
    <div class="info-panel__header">
      <p class="eyebrow">{{ subtitle }}</p>
      <h2 class="info-panel__title">{{ title }}</h2>
      <p class="info-panel__lead">
        {{ text }}
      </p>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  subtitle: string;
  title: string;
  text: string;
}>();
</script>

<style scoped lang="scss">
.info-panel {
  padding: var(--space-8);
}

.info-panel__header {
  max-width: 44rem;
}
.info-panel__title {
  margin-top: var(--space-4);
  font-size: clamp(2rem, 4vw, 3.25rem);
}

.info-panel__lead {
  max-width: 38rem;
  margin-top: var(--space-4);
  line-height: 1.8;
}
</style>
