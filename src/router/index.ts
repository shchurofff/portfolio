import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PageLayout from '@/layouts/PageLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: PageLayout,
      children: [
        { path: '', redirect: '/home' },
        { path: 'home', name: 'home', component: HomeView },
      ],
    },
  ],
})

export default router
