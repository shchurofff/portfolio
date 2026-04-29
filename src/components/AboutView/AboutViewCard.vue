<template>
  <article class="about-card animate-fade-up animate-delay-1">
    <p class="eyebrow">{{ subtitle }}</p>
    <h2 class="about-card__title display__title">{{ title }}</h2>
    <p class="about-card__text">
      {{ content }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { AboutCard as AboutViewCardProps } from "@/types/about-card";

defineProps<AboutViewCardProps>();
</script>

<style scoped lang="scss">
.about-card {
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-elevated);
  box-shadow: 0 18px 48px -30px var(--color-shadow);
}

.about-card__title {
  font-size: 1.6rem;
}

.about-card__text {
  margin-top: var(--space-4);
  line-height: 1.8;
}
</style>
