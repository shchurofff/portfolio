<template>
  <div class="section-header" :class="`section-header--${size || 'default'}`">
    <p v-if="eyebrow" class="eyebrow animate-fade-up animate-delay-1">
      {{ eyebrow }}
    </p>
    <h1 class="section-header__title display__title animate-blur-reveal animate-delay-2">
      <slot name="title">{{ title }}</slot>
    </h1>
    <p class="display__text section-header__text animate-fade-up animate-delay-3">
      <slot name="text">
        {{ text }}
      </slot>
    </p>

    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title?: string;
  text?: string;
  size?: "default" | "home";
}>();
</script>

<style scoped lang="scss">
.section-header {
  max-width: 52rem;
}

.section-header--default .section-header__title {
  font-size: clamp(2.75rem, 6vw, 5.5rem);
}

.section-header--home .section-header__title {
  font-size: clamp(3.75rem, 10vw, 7.5rem);
}

.section-header__text {
  font-size: 1.05rem;
}

.section-header--home .section-header__text {
  font-size: 1.125rem;
}
</style>
