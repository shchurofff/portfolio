/// <reference types="vite/client" />

import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    label?: string;
    order?: number;
    showInNavigation?: boolean;
  }
}
