<template>
  <section class="skills-block animate-blur-reveal animate-delay-2">
    <div class="skills-block__header">
      <p class="eyebrow">{{ subtitle }}</p>
      <h2 class="skills-block__title">{{ title }}</h2>
      <p class="skills-block__lead">
        {{ text }}
      </p>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  subtitle: string;
  title: string;
  text: string;
}>();
</script>

<style scoped lang="scss">
.skills-block {
  padding: var(--space-8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at top right, var(--color-accent-soft), transparent 35%),
    var(--color-surface-strong);
  box-shadow: 0 24px 80px -42px var(--color-shadow);
}

.skills-block__header {
  max-width: 44rem;
}
.skills-block__title {
  margin-top: var(--space-4);
  font-size: clamp(2rem, 4vw, 3.25rem);
}

.skills-block__lead {
  max-width: 38rem;
  margin-top: var(--space-4);
  line-height: 1.8;
}
</style>
