<template>
  <div class="page-layout">
    <LayoutArrows :routes="routes" :current-path="route.path" />
    <NavigationDialog :routes="routes" :current-path="route.path" />
    <main class="page-layout__main">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page-slide" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import LayoutArrows from "@/components/LayoutArrows.vue";
import NavigationDialog from "@/components/NavigationDialog.vue";
import { computed, Transition } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const routes = computed(() =>
  router
    .getRoutes()
    .filter((item) => item.meta.showInNavigation)
    .sort((a, b) => Number(a.meta.order) - Number(b.meta.order))
    .map((item) => ({
      path: item.path,
      label: item.meta.label ?? item.name ?? item.path,
    })),
);
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

@media (max-width: 900px) {
  .page-layout__main {
    width: min(100% - 6rem, var(--container-width));
  }
}

@media (max-width: 640px) {
  .page-layout__main {
    width: min(100% - 2rem, var(--container-width));
    padding-bottom: calc(var(--space-16) + 4.5rem);
  }
}
</style>
