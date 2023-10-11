import { createRouter, createWebHistory } from 'vue-router'
import ViewLogin from '@/views/ViewLogin.vue'
import ViewHome from '@/views/ViewHome.vue'
import Wallet from '@/components/Wallet/Wallet.vue'
import ViewSignUp from '@/views/ViewSignUp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/login',
        name: 'login',
        component: ViewLogin
      },
      {
        path: '/home',
        name: 'home',
        component: ViewHome
      },
      {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
      },
      {
        path: '/sign-up',
        name: 'sign up',
        component: ViewSignUp
      }
    ]
  })

  export default router