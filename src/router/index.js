import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Landing from '/src/views/Landing.vue'
import Schedule from '/src/views/Schedule.vue'
import Signup from '/src/views/Signup.vue'
import ForgotPassword from '/src/views/ForgotPassword.vue'
import store from '/src/views/store';
import PreMeetingInterview from '/src/views/PreMeetingInterviews.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    name: 'userLogin',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresGuest: true
    }
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
    path: '/preMeetingInterviews',
    name: 'PreMeeting',
    component: PreMeetingInterview
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      //redirect to the Login Page
      next('/');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      //redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});
export default router
