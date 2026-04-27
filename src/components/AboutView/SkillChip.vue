<template>
  <span class="skill-chip">
    <img v-if="icon" alt="" :src="icon" class="skill-chip__icon" aria-hidden="true" />
    <span class="skill-chip__label">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import type { SkillChip as SkillChipProps } from "@/types/skill-chip";

defineProps<SkillChipProps>();
</script>

<style scoped lang="scss">
.skill-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding-inline: var(--space-5);
  gap: var(--space-2);
  border: 1px solid color-mix(in srgb, var(--color-accent) 40%, var(--color-border));
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-accent-soft) 50%, transparent);
  color: var(--color-text);
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.skill-chip__icon {
  width: 1.1rem;
  height: 1.1rem;
  object-fit: contain;
  flex-shrink: 0;
}

.skill-chip__label {
  line-height: 1;
}
</style>
