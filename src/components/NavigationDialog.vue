<template>
  <dialog ref="dialogRef" class="navigation-dialog">
    <div class="navigation-dialog__content">
      <div class="navigation-dialog__header">
        <div>
          <p class="navigation-dialog__eyebrow">Quick Navigation</p>
          <h2 class="navigation-dialog__title">Open a page</h2>
        </div>

        <button
          type="button"
          class="navigation-dialog__close"
          aria-label="Close navigation dialog"
          @click="closeDialog"
        >
          <XIcon :size="18" />
        </button>
      </div>

      <nav class="navigation-dialog__list" aria-label="Site navigation">
        <RouterLink
          v-for="item in routes"
          :key="item.path"
          :to="item.path"
          class="navigation-dialog__link"
          :class="{ 'navigation-dialog__link--active': item.path === currentPath }"
          @click="closeDialog"
        >
          <span>{{ item.label }}</span>
          <span class="navigation-dialog__path">{{ item.path }}</span>
        </RouterLink>
      </nav>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import type { NavigationRoute } from "@/types/navigation";
import { XIcon } from "@lucide/vue";
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";

const { routes, currentPath } = defineProps<{
  routes: NavigationRoute[];
  currentPath: string;
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);

const openDialog = () => {
  dialogRef.value?.showModal();
};

const closeDialog = () => {
  dialogRef.value?.close();
};

const handleKeyDown = (event: KeyboardEvent) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();

    if (dialogRef.value?.open) {
      closeDialog();
    } else {
      openDialog();
    }
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped lang="scss">
.navigation-dialog {
  width: min(100% - 2rem, 36rem);
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-strong);
  color: var(--color-text);
  box-shadow: 0 24px 80px -32px var(--color-shadow);
  margin: auto;
  position: relative;
}

.navigation-dialog::backdrop {
  background: rgba(15, 12, 10, 0.42);
  backdrop-filter: blur(8px);
}

.navigation-dialog__content {
  padding: var(--space-6);
}

.navigation-dialog__header {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.navigation-dialog__eyebrow {
  color: var(--color-accent-strong);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.navigation-dialog__title {
  margin-top: var(--space-3);
  font-size: 2rem;
}

.navigation-dialog__close {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: transparent;
  color: var(--color-text-muted);
  transition:
    color var(--transition-base),
    border-color var(--transition-base),
    background-color var(--transition-base),
    transform var(--transition-base);

  &:hover {
    color: var(--color-text);
    border-color: var(--color-accent);
    background: var(--color-accent-soft);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
}

.navigation-dialog__list {
  display: grid;
  gap: var(--space-3);
}

.navigation-dialog__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: transparent;
  transition:
    border-color var(--transition-base),
    background-color var(--transition-base),
    transform var(--transition-base);
}

.navigation-dialog__link:hover {
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
  transform: translateY(-2px);
}

.navigation-dialog__link--active {
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
}

.navigation-dialog__path {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
</style>
