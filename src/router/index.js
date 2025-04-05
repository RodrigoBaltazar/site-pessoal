import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contato.vue'
import About from '../pages/Sobre.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/sobre',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 