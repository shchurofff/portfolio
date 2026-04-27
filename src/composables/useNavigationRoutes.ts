import type { NavigationRoute } from "@/types/navigation";
import { computed } from "vue";
import { useRouter } from "vue-router";

export const useNavigationRoutes = () => {
  const router = useRouter();

  const navigationRoutes = computed<NavigationRoute[]>(() =>
    router
      .getRoutes()
      .filter((item) => item.meta.showInNavigation)
      .sort((a, b) => Number(a.meta.order) - Number(b.meta.order))
      .map((item) => ({
        path: item.path,
        label: String(item.meta.label ?? item.name ?? item.path),
      })),
  );

  return {
    navigationRoutes,
  };
};
