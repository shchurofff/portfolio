<template>
  <section class="projects-view">
    <div class="projects-view__intro">
      <p class="eyebrow animate-fade-up animate-delay-1">Pet Projects</p>
      <h1 class="projects-view__title display__title animate-blur-reveal animate-delay-2">
        Things I build when the workday is over.
      </h1>
      <p class="display__text projects-view__text animate-fade-up animate-delay-3">
        Side projects I work on to explore ideas, try new tools and stay curious. The list is small
        for now, but it's only getting started.
      </p>
    </div>

    <div class="projects-view__list">
      <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>

    <div class="projects-view__upcoming animate-fade-up animate-delay-4">
      <Sparkles :size="20" class="projects-view__upcoming-icon" />
      <p class="projects-view__upcoming-text">
        More ideas are brewing. New projects will appear here as they take shape.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/PetProjectsView/ProjectCard.vue";
import { projects } from "@/data/projects";
import { Sparkles } from "@lucide/vue";
</script>

<style scoped lang="scss">
.projects-view {
  display: grid;
  gap: var(--space-12);
  padding-block: var(--space-8) var(--space-16);
}

.projects-view__intro {
  max-width: 44rem;
}

.projects-view__title {
  font-size: clamp(2.75rem, 6vw, 5.5rem);
}

.projects-view__text {
  font-size: 1.05rem;
}

.projects-view__list {
  display: grid;
  gap: var(--space-8);
}

.projects-view__upcoming {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-elevated);
}

.projects-view__upcoming-icon {
  flex-shrink: 0;
  color: var(--color-accent);
}

.projects-view__upcoming-text {
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>
