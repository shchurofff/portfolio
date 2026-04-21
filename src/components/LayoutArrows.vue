<template>
  <nav class="layout-arrows" aria-label="Page navigation">
    <RouterLink
      v-if="previosPage"
      :to="previosPage.path"
      class="layout-arrows__button layout-arrows__button--left"
    >
      <ArrowLeft />
    </RouterLink>

    <span
      v-else
      class="layout-arrows__button layout-arrows__button--left layout-arrows__button--disabled"
    >
      <ArrowLeft />
    </span>

    <RouterLink
      v-if="nextPage"
      :to="nextPage.path"
      class="layout-arrows__button layout-arrows__button--right"
    >
      <ArrowRight />
    </RouterLink>

    <span
      v-else
      class="layout-arrows__button layout-arrows__button--right layout-arrows__button--disabled"
    >
      <ArrowRight />
    </span>
  </nav>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from "@lucide/vue";
import { computed } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const routes = computed(() =>
  router
    .getRoutes()
    .filter((item) => item.meta.showInNavigation)
    .sort((a, b) => Number(a.meta.order) - Number(b.meta.order))
    .map((item) => ({
      path: item.path,
      label: item.meta.label,
    })),
);

const currentPageIndex = computed(() => routes.value.findIndex((item) => route.path === item.path));

const previosPage = computed(() => {
  if (currentPageIndex.value <= 0) {
    return null;
  }
  return routes.value[currentPageIndex.value - 1];
});

const nextPage = computed(() => {
  if (currentPageIndex.value === -1 || currentPageIndex.value >= routes.value.length - 1) {
    return null;
  }
  return routes.value[currentPageIndex.value + 1];
});
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
