import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('@/views/MembersView.vue'),
    },
    {
      path: '/members/:slug',
      name: 'member-detail',
      component: () => import('@/views/MemberDetailView.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/views/MusicView.vue'),
    },
    {
      path: '/music/:slug',
      name: 'release-detail',
      component: () => import('@/views/ReleaseDetailView.vue'),
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('@/views/LiveView.vue'),
    },
    {
      path: '/bawige',
      name: 'bawige',
      component: () => import('@/views/BawigeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
