import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import UserHome from '@/views/UserHome.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'UserHome',
    component: UserHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  var isLoggedIn = store.state.auth.isLoggedIn;

  if (to.path == '/' && isLoggedIn) {
    next('/home');
  }

  if (to.path != '/' && !isLoggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router
