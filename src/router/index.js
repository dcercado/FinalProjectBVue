import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Landing from '/src/views/Landing.vue'
import Schedule from '/src/views/Schedule.vue'
import Signup from '/src/views/Signup.vue'
import ForgotPassword from '/src/views/ForgotPassword.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
