<template>
  <section class="about-view">
    <div class="about-view__intro">
      <div class="about-view__portrait animate-fade-up animate-delay-1">
        <div class="about-view__portrait-frame">
          <img src="/about-avatar.png" alt="Portrait of Oleg Shchurov" class="about-view__image" />
        </div>
      </div>

      <div class="about-view__headline">
        <p class="eyebrow animate-fade-up animate-delay-1">Who am I</p>
        <h1 class="about-view__title display__title animate-blur-reveal animate-delay-2">
          Frontend engineer, curious builder, and someone who still enjoys the craft after work.
        </h1>
        <p class="display__text about-view__text animate-fade-up animate-delay-3">
          Hi! My name is Oleg. I work as a front-end developer and for the last few years I have
          been building interfaces that feel clean, clear and alive. I enjoy shaping products from
          small details all the way to the full experience people interact with every day.
        </p>
      </div>
    </div>

    <div class="about-view__grid">
      <AboutViewCard
        v-for="card in cardText"
        :key="card.title"
        :title="card.title"
        :subtitle="card.subtitle"
        :content="card.content"
      />
    </div>

    <section class="skills-block animate-blur-reveal animate-delay-2">
      <div class="skills-block__header">
        <p>Professional Skillset</p>
        <h2 class="skills-block__title">Technologies I use the most</h2>
        <p class="skills-block__lead">
          These are the tools and languages I return to most often while building products, testing
          ideas and refining my workflow.
        </p>
      </div>

      <div class="skills-block__list">
        <span class="skill-chip">JavaScript</span>
        <span class="skill-chip">TypeScript</span>
        <span class="skill-chip">Vue</span>
        <span class="skill-chip">React</span>
        <span class="skill-chip">Svelte</span>
        <span class="skill-chip">Lit</span>
        <span class="skill-chip">SCSS</span>
        <span class="skill-chip">Vite</span>
        <span class="skill-chip">Node.js</span>
        <span class="skill-chip">Git</span>
        <span class="skill-chip">Go</span>
        <span class="skill-chip">Zig</span>
      </div>
    </section>

    <section class="contact-block animate-fade-up animate-delay-3">
      <div class="contact-block__content">
        <p>Let’s connect</p>
        <h2 class="contact-block__title">Open to thoughtful products and good conversations.</h2>
        <p class="contact-block__text">
          If you want to talk about frontend, product ideas, collaboration or just share something
          interesting, feel free to reach out through any of the links below.
        </p>

        <div class="contact-block__links">
          <a href="https://github.com/" target="_blank" rel="noreferrer" class="contact-chip">
            GitHub
          </a>
          <a href="https://t.me/" target="_blank" rel="noreferrer" class="contact-chip">
            Telegram
          </a>
          <a href="mailto:shchurov.oleg27@gmail.com" class="contact-chip"> Email </a>
          <a href="/resume" class="contact-chip"> Resume </a>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import AboutViewCard from "@/components/AboutView/AboutViewCard.vue";
import { cardText } from "@/data/about-card-text";
</script>

<style scoped lang="scss">
.about-view {
  display: grid;
  gap: var(--space-16);
  padding-block: var(--space-8) var(--space-16);
}

.about-view__intro {
  display: grid;
  gap: var(--space-8);
  align-items: center;
}

.about-view__portrait {
  max-width: 24rem;
}

.about-view__portrait-frame {
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0)),
    var(--color-bg-elevated);
  box-shadow: 0 24px 80px -36px var(--color-shadow);
}

.about-view__image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: calc(var(--radius-lg) - var(--space-3));
}

.about-view__headline {
  max-width: 44rem;
}

.about-view__title {
  font-size: clamp(2.75rem, 6vw, 5.5rem);
}

.about-view__text {
  font-size: 1.05rem;
}

.about-view__grid {
  display: grid;
  gap: var(--space-5);
}

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

.skills-block__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding-inline: var(--space-5);
  border: 1px solid color-mix(in srgb, var(--color-accent) 40%, var(--color-border));
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-accent-soft) 50%, transparent);
  color: var(--color-text);
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.contact-block {
  padding: var(--space-8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--color-accent-soft) 70%, transparent),
      transparent
    ),
    var(--color-bg-elevated);
  box-shadow: 0 24px 80px -42px var(--color-shadow);
}

.contact-block__content {
  max-width: 42rem;
}

.contact-block__title {
  margin-top: var(--space-4);
  font-size: clamp(2rem, 4vw, 3.4rem);
}

.contact-block__text {
  max-width: 36rem;
  margin-top: var(--space-5);
  line-height: 1.8;
}

.contact-block__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.contact-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding-inline: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface-strong);
  color: var(--color-text);
  font-weight: 500;
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    background-color var(--transition-base);

  &:hover {
    transform: translateY(-2px);
    border-color: var(--color-accent);
    background: var(--color-accent-soft);
  }
}

@media (min-width: 920px) {
  .about-view__intro {
    grid-template-columns: minmax(18rem, 24rem) minmax(0, 1fr);
  }

  .about-view__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
