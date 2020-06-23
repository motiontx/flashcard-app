import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import(/* webpackChunkName: "terms" */ '../views/Terms.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/topics',
    name: 'Topics',
    component: () => import(/* webpackChunkName: "topics" */ '../views/Topics.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
