import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PageLayout from "@/layouts/PageLayout.vue";
import AboutView from "@/views/AboutView.vue";
import PetProjectsView from "@/views/PetProjectsView.vue";
import ResumeView from "@/views/ResumeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "root",
      component: PageLayout,
      redirect: "/home",
      meta: {
        label: "Layout",
        order: 0,
        showInNavigation: false,
      },
      children: [
        {
          path: "home",
          name: "home",
          component: HomeView,
          meta: {
            label: "Home",
            order: 1,
            showInNavigation: true,
          },
        },
        {
          path: "about",
          name: "about",
          component: AboutView,
          meta: {
            label: "About",
            order: 2,
            showInNavigation: true,
          },
        },
        {
          path: "pet-projects",
          name: "pet-projects",
          component: PetProjectsView,
          meta: {
            label: "Pet Projects",
            order: 3,
            showInNavigation: true,
          },
        },
        {
          path: "resume",
          name: "resume",
          component: ResumeView,
          meta: {
            label: "Resume",
            order: 4,
            showInNavigation: true,
          },
        },
      ],
    },
  ],
});

export default router;
