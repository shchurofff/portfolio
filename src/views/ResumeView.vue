<template>
  <section class="page">
    <div class="resume-view__intro">
      <SectionHeader
        eyebrow="Resume"
        title="Frontend engineer"
        text="Frontend engineer focused on building scalable, data-heavy interfaces with React and Next.js. I design complex UI systems, such as tables, forms and admin panels, and optimize them for performance, maintainability and real-world usage."
      >
        <div class="resume-view__actions animate-fade-up animate-delay-4">
          <a href="/cv.pdf" target="_blank" rel="noreferrer noopener" class="resume-view__download">
            Open PDF
          </a>
          <a
            href="/cv.pdf"
            download="Oleg_Shchurov_CV.pdf"
            class="resume-view__download resume-view__download--primary"
          >
            Download CV
          </a>
        </div>
      </SectionHeader>

      <div class="resume-view__side animate-fade-up animate-delay-4">
        <div class="resume-side card">
          <div class="resume-side__block">
            <p class="resume-side__label">Quick snapshot</p>
            <ul class="resume-side__list">
              <li v-for="item in highlights" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div class="resume-side__divider"></div>

          <div class="resume-side__block">
            <p class="resume-side__label">CV file</p>
            <p class="resume-side__text">
              The downloadable PDF is the current version of my resume. The page keeps the same
              story in a shorter, easier-to-scan form.
            </p>
          </div>
        </div>
      </div>
    </div>

    <InfoPanel
      subtitle="Experience"
      title="Work history"
      text="Selected roles that shaped how I build scalable interfaces and improve product performance."
    >
      <TimelineItem :experience="experience" />
    </InfoPanel>

    <InfoPanel
      subtitle="Education"
      title="Academic background"
      text="Formal education listed in the current CV."
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
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
    align-items: start;
  }
}

.resume-view__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.resume-view__download {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.8rem;
  padding-inline: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface-strong);
  color: var(--color-text);
  text-decoration: none;
  box-shadow: 0 10px 30px -10px var(--color-shadow);
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

.resume-view__download--primary {
  border-color: var(--color-accent);
  background: var(--color-accent);
  color: #fff;

  &:hover {
    border-color: var(--color-accent-strong);
    background: var(--color-accent-strong);
    color: #fff;
  }
}

.resume-edu {
  margin-top: var(--space-6);
}

.resume-view__side {
  display: grid;
  gap: var(--space-5);
  align-self: start;
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
  color: var(--color-accent-strong);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.resume-side__list {
  display: grid;
  gap: var(--space-3);
  padding-left: 1.25rem;
  line-height: 1.7;
}

.resume-side__list li::marker {
  color: var(--color-accent);
}

.resume-side__divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-border) 20%,
    var(--color-border) 80%,
    transparent
  );
}

.resume-side__text {
  line-height: 1.7;
  color: var(--color-text-soft);
}

@media (max-width: 640px) {
  .resume-view__actions {
    flex-direction: column;
  }

  .resume-view__download {
    width: 100%;
  }
}
</style>
