import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import DocumentView from '@/views/DocumentView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthView,
      meta: {
        Auth: false
      }
    },
    {
      path: '/document',
      name: 'document',
      component: DocumentView,
      meta: {
        Auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.Auth) {
    let auth = localStorage.getItem("accessToken") || ""
    if (auth) {
      next()
    } else {
      next("/")
    }
  }
  next()
})


export default router
