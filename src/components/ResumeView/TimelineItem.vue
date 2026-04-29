<template>
  <div class="resume-view__timeline">
    <div v-for="job in props.experience" :key="job.company">
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
</template>

<script setup lang="ts">
import type { Job } from "@/types/jobs";

const props = defineProps<{
  experience: Job[];
}>();
</script>

<style scoped lang="scss">
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
</style>
