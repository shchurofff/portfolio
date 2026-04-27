<template>
  <section class="hero">
    <div class="hero__content">
      <p class="eyebrow animate-fade-up animate-delay-1">Frontend Developer</p>
      <h1 class="hero__title display__title animate-blur-reveal animate-delay-2">
        Hi, my name is
        <span class="hero__accent">Oleg Shchurov</span>.
        <br />
        I build thoughtful web interfaces.
      </h1>
      <p class="display__text hero__text animate-fade-up animate-delay-3">
        I create modern frontend experiences with a focus on clarity, interaction and strong visual
        structure.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
