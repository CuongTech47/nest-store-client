import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '../stores/auth'
import admin from './admin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/DashboardView.vue'),
    //   meta : {
    //     auth: true
    //   }
    // }
    ...admin
  ]
})

router.beforeEach(async(to , from ,next)=>{
  if(to.meta?.auth) {
    const auth = useAuthStore()
    if(auth.token && auth.user) {
      const isAuthenticated = await auth.checkToken()
      if(isAuthenticated){
        next()
      }else{
        next({name : 'login'})
      }

    }else{
      next({name : 'login'})
    }
  }
  else{
    next()
  }
})

export default router
