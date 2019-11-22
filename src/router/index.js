import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/pageparameters',
    name: 'PageParameters',
    component: () => import('../views/PageParameters.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
