<template>
  <div class="page-layout">
    <LayoutArrows :routes="navigationRoutes" :current-path="route.path" />
    <NavigationDialog
      v-model:open="isNavigationOpen"
      :routes="navigationRoutes"
      :current-path="route.path"
    />
    <button type="button" @click="isNavigationOpen = true" class="page-layout__navigate_button">
      Navigate ⌘ K
    </button>
    <main class="page-layout__main">
      <RouterView v-slot="{ Component, route }">
        <Transition name="fade">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import LayoutArrows from "@/components/Layout/LayoutArrows.vue";
import NavigationDialog from "@/components/Layout/NavigationDialog.vue";
import { useNavigationRoutes } from "@/composables/useNavigationRoutes";
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const isNavigationOpen = ref(false);

const { navigationRoutes } = useNavigationRoutes();
</script>

<style scoped lang="scss">
.page-layout {
  min-height: 100vh;
  position: relative;
}

.page-layout__main {
  width: min(100% - 8rem, var(--container-width));
  margin-inline: auto;
  padding-block: var(--space-16);
}

.page-layout__navigate_button {
  position: fixed;
  left: 50%;
  bottom: calc(1rem + env(safe-area-inset-bottom));
  z-index: 20;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline: var(--space-5);
  min-width: 8rem;
  height: 2.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-elevated);
  color: var(--color-text);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 50px -24px var(--color-shadow);
  transform: translateX(-50%);
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    background-color var(--transition-base);
  pointer-events: auto;

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    border-color: var(--color-accent);
    background: var(--color-accent-soft);
  }
}

@media (max-width: 900px) {
  .page-layout__main {
    width: min(100% - 6rem, var(--container-width));
  }
}

@media (max-width: 640px) {
  .page-layout__main {
    width: min(100% - 2rem, var(--container-width));
    padding-bottom: calc(var(--space-16) + 4.5rem + env(safe-area-inset-bottom));
  }
}
</style>
