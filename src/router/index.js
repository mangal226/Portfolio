import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import Certifications from '../views/Certifications.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolios.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'acceuil',
    component: Acceuil
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/certifications',
    name: 'certifications',
    component: Certifications
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
