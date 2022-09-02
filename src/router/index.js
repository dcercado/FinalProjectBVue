import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Landing from '/src/views/Landing.vue'
import Schedule from '/src/views/Schedule.vue'
import Signup from '/src/views/Signup.vue'
import ForgotPassword from '/src/views/ForgotPassword.vue'
import store from '/src/views/store';
import PreMeetingInterview from '/src/views/PreMeetingInterviews.vue'
import MeetYourPresenters from '/src/views/MeetYourPresenters'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    name: 'Login',
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
    path: '/meetyourpresenters',
    name: 'MeetYourPresenters',
    component: MeetYourPresenters
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
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      //redirect to the Login Page
      next('/landing');
    } else {
      next();
    }
  } else {
    next()
  }
});
export default router
