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
      <div class="resume-view__timeline">
        <div v-for="job in experience" :key="job.company" class="resume-job">
          <div class="resume-job__header">
            <h3 class="resume-job__title">{{ job.role }}</h3>
            <span class="resume-job__meta">{{ job.company }} · {{ job.period }}</span>
          </div>

          <p class="resume-job__highlight">
            {{ job.highlight }}
          </p>

          <ul class="resume-job__list">
            <li v-for="item in job.points" :key="item">{{ item }}</li>
          </ul>

          <ul class="resume-job__impact">
            <li v-for="item in job.impact" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
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

.resume-view__timeline {
  position: relative;
  display: grid;
  gap: var(--space-10);
  margin-top: var(--space-6);
  padding-left: var(--space-6);
}

.resume-view__timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--color-border);
}

.resume-job__title {
  font-size: 1.25rem;
}

.resume-job__meta {
  display: block;
  opacity: 0.7;
  margin-top: 0.25rem;
}

.resume-job__highlight {
  margin-top: var(--space-2);
  opacity: 0.85;
}

.resume-job__list {
  margin-top: var(--space-4);
  padding-left: 1.25rem;
  line-height: 1.7;
}

.resume-job__impact {
  margin-top: var(--space-3);
  padding-left: 1.25rem;
  line-height: 1.7;
  color: var(--color-accent);
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
