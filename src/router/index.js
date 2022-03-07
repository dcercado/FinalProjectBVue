import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Landing from '/src/views/Landing.vue'
import Schedule from '/src/views/Schedule.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
