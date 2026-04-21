<template>
  <nav class="layout-arrows" aria-label="Page navigation">
    <button class="layout-arrows__button layout-arrows__button--left">
      <ArrowLeft />
    </button>
    <button class="layout-arrows__button layout-arrows__button--right">
      <ArrowRight />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@lucide/vue'
</script>

<style scoped lang="scss">
.layout-arrows {
  pointer-events: none;
}

.layout-arrows__button {
  position: fixed;
  top: 50%;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-bg-elevated);
  color: var(--color-text);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 50px -24px var(--color-shadow);
  transform: translateY(-50%);
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    background-color var(--transition-base),
    opacity var(--transition-base);
  pointer-events: auto;

  &:hover {
    transform: translateY(calc(-50% - 2px));
    border-color: var(--color-accent);
  }
}

.layout-arrows__button--left {
  left: 1rem;
}

.layout-arrows__button--right {
  right: 1rem;
}

.layout-arrows__button--disabled {
  opacity: 0.35;
}

@media (max-width: 900px) {
  .layout-arrows__button {
    width: 3rem;
    height: 3rem;
  }

  .layout-arrows__button--left {
    left: 0.75rem;
  }

  .layout-arrows__button--right {
    right: 0.75rem;
  }
}

@media (max-width: 640px) {
  .layout-arrows__button {
    top: auto;
    bottom: 1rem;
    transform: none;
  }

  .layout-arrows__button:hover {
    transform: translateY(-2px);
  }

  .layout-arrows__button--left {
    left: 1rem;
  }

  .layout-arrows__button--right {
    right: 1rem;
  }
}
</style>
