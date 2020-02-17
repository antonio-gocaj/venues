import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/venues/:id',
    name: 'venuedetails',
    component: function(){
      return import('../views/Details.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
