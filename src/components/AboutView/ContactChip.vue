<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noreferrer noopener' : undefined"
    class="contact-chip"
  >
    <img v-if="icon" :src="icon" alt="" aria-hidden="true" class="contact-chip__icon" />
    <span class="contact-chip__label">{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
import type { ContactChip as ContactChipProps } from "@/types/contact-chip";

defineProps<ContactChipProps>();
</script>

<style scoped lang="scss">
.contact-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
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

.contact-chip__icon {
  width: 1rem;
  height: 1rem;
  object-fit: contain;
  flex-shrink: 0;
}

.contact-chip__label {
  line-height: 1;
}
</style>
