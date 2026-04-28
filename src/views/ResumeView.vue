<template>
  <section class="page">
    <div class="resume-view__intro">
      <SectionHeader
        :eyebrow="'Resume'"
        :title="'Frontend engineer'"
        :text="'Frontend engineer focused on building scalable, data-heavy interfaces with React and Next.js. I design complex UI systems — tables, forms, admin panels — and optimize them for performance, maintainability and real-world usage.'"
      >
        <a href="/cv.pdf" download class="resume-view__download animate-fade-up animate-delay-4">
          Download CV
        </a>
      </SectionHeader>

      <div class="resume-view__side animate-fade-up animate-delay-4">
        <div class="resume-side card">
          <div class="resume-side__block">
            <p class="resume-side__label">Highlights</p>
            <ul class="resume-side__list">
              <li v-for="item in highlights" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <InfoPanel
      :subtitle="'Experience'"
      :title="'Work history'"
      :text="'Selected experience focused on building scalable interfaces and improving product performance.'"
    >
      <TimelineItem :experience="experience" />
    </InfoPanel>

    <InfoPanel
      :subtitle="'Education'"
      :title="'Academic background'"
      :text="'Formal education and degree.'"
    >
      <div class="resume-edu">
        <h3>Master’s in Software Engineering</h3>
        <p>Luhansk State University named after V. Dahl — 2025</p>
      </div>
    </InfoPanel>
  </section>
</template>

<script setup lang="ts">
import InfoPanel from "@/components/AboutView/InfoPanel.vue";
import TimelineItem from "@/components/ResumeView/TimelineItem.vue";
import SectionHeader from "@/components/Views/SectionHeader.vue";
import { experience, highlights } from "@/data/resume";
</script>

<style scoped lang="scss">
.resume-view__intro {
  display: grid;
  gap: var(--space-8);
}

@media (min-width: 920px) {
  .resume-view__intro {
    grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
    align-items: start;
  }
}

.resume-view__download {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-accent) 80%, black);
  color: white;
  text-decoration: none;
  box-shadow: 0 10px 30px -10px var(--color-shadow);
}

.resume-edu {
  margin-top: var(--space-6);
}

.resume-view__side {
  display: block;
}

.resume-side {
  padding: var(--space-6);
  display: grid;
  gap: var(--space-6);
}

.resume-side__block {
  display: grid;
  gap: var(--space-3);
}

.resume-side__label {
  font-size: 0.8rem;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: 0.08em;
}

.resume-side__list {
  padding-left: 1.25rem;
  line-height: 1.7;
}
</style>
