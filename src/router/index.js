import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contato.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 