<template>
  <section class="hero">
    <SectionHeader size="home" :eyebrow="'Frontend developer'">
      <template #title>
        Hi, my name is
        <span class="hero__accent">Oleg Shchurov</span>.
        <br />
        I build thoughtful web interfaces.
      </template>

      <template #text>
        I create modern frontend experiences with a focus on clarity, interaction and strong visual
        structure.
      </template>
    </SectionHeader>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@/components/Views/SectionHeader.vue";
</script>

<style scoped lang="scss">
.hero {
  min-height: calc(100vh - 12rem);
  display: grid;
  align-items: center;
}

.hero__content {
  max-width: 52rem;
}

.hero__title {
  font-size: clamp(3.75rem, 10vw, 7.5rem);
}

.hero__text {
  font-size: 1.125rem;
}
.hero__accent {
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .hero {
    min-height: calc(100vh - 10rem);
    align-items: start;
    padding-top: 12vh;
  }

  .hero__title {
    font-size: clamp(3rem, 14vw, 4.5rem);
  }

  .hero__text {
    font-size: 1rem;
  }
}
</style>
