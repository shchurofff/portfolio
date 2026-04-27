<template>
  <article class="project-card animate-fade-up animate-delay-1">
    <div class="project-card__layout">
      <div v-if="image" class="project-card__preview">
        <img :src="image" :alt="`${title} preview`" class="project-card__image" />
      </div>

      <div class="project-card__body">
        <span class="project-card__status">{{ eyebrow }}</span>
        <h2 class="project-card__title">{{ title }}</h2>
        <p class="project-card__description">{{ description }}</p>

        <div class="project-card__highlights">
          <div v-for="item in highlights" :key="item" class="project-card__highlight">
            <ArrowRight :size="14" class="project-card__highlight-icon" />
            <span>{{ item }}</span>
          </div>
        </div>

        <div v-if="planned" class="project-card__planned">
          <p class="project-card__planned-label">What's next</p>
          <p class="project-card__planned-text">{{ planned }}</p>
        </div>

        <div class="project-card__stack">
          <span v-for="tech in techStack" :key="tech" class="project-card__tech">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <div v-if="links.length" class="project-card__footer">
      <a
        v-for="(link, index) in links"
        :key="link.label"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noreferrer noopener' : undefined"
        class="project-card__link"
        :class="{ 'project-card__link--primary': index === 0 }"
      >
        <span>{{ link.label }}</span>
        <ExternalLink v-if="link.external" :size="14" />
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from "@/types/project";
import { ArrowRight, ExternalLink } from "@lucide/vue";

defineProps<Project>();
</script>

<style scoped lang="scss">
.project-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at top right, var(--color-accent-soft), transparent 35%),
    var(--color-surface-strong);
  box-shadow: 0 24px 80px -42px var(--color-shadow);
}

.project-card__layout {
  display: grid;
  gap: var(--space-2);
}

@media (min-width: 920px) {
  .project-card__layout {
    grid-template-columns: minmax(16rem, 2fr) minmax(0, 3fr);
    gap: 0;
  }
}

.project-card__preview {
  padding: var(--space-6) var(--space-6) 0;
}

@media (min-width: 920px) {
  .project-card__preview {
    padding: var(--space-6);
    display: flex;
    align-items: center;
  }
}

.project-card__image {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  object-fit: cover;
}

@media (min-width: 920px) {
  .project-card__image {
    height: 100%;
    max-height: 28rem;
  }
}

.project-card__body {
  padding: var(--space-5) var(--space-6) var(--space-6);
}

@media (min-width: 920px) {
  .project-card__body {
    padding: var(--space-8) var(--space-8) var(--space-8) var(--space-2);
  }
}

.project-card__status {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  border: 1px solid color-mix(in srgb, var(--color-accent) 40%, var(--color-border));
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-accent-soft) 50%, transparent);
  color: var(--color-accent-strong);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-card__title {
  margin-top: var(--space-4);
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
}

.project-card__description {
  margin-top: var(--space-3);
  line-height: 1.8;
}

.project-card__highlights {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-5);
}

@media (min-width: 640px) {
  .project-card__highlights {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.project-card__highlight {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
}

.project-card__highlight-icon {
  flex-shrink: 0;
  color: var(--color-accent);
}

.project-card__planned {
  margin-top: var(--space-5);
  padding: var(--space-4);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg-elevated);
}

.project-card__planned-label {
  color: var(--color-accent-strong);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.project-card__planned-text {
  margin-top: var(--space-2);
  line-height: 1.7;
  font-size: 0.95rem;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-5);
}

.project-card__tech {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.25rem;
  padding-inline: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface-strong);
  color: var(--color-text-soft);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.project-card__footer {
  /* position: sticky;
  bottom: 0; */
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border);
  border-radius: 0 0 calc(var(--radius-lg) - 1px) calc(var(--radius-lg) - 1px);
  background: var(--color-surface-strong);
  backdrop-filter: blur(18px);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 2.75rem;
  padding-inline: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface-strong);
  color: var(--color-text);
  font-weight: 500;
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    background-color var(--transition-base),
    color var(--transition-base);

  &:hover {
    transform: translateY(-2px);
    border-color: var(--color-accent);
    background: var(--color-accent-soft);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
  }
}

.project-card__link--primary {
  border-color: var(--color-accent);
  background: var(--color-accent);
  color: #fff;

  &:hover {
    background: var(--color-accent-strong);
    border-color: var(--color-accent-strong);
    color: #fff;
  }
}

@media (max-width: 640px) {
  .project-card__body {
    padding: var(--space-4);
  }

  .project-card__preview {
    padding: var(--space-4) var(--space-4) 0;
  }

  .project-card__footer {
    padding: var(--space-3) var(--space-4);
  }
}
</style>
