import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contato.vue'
import About from '../pages/Sobre.vue'
import Projects from '../pages/Projetos.vue'
import TecnicoInformatica from '../pages/TecnicoInformatica.vue'
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
  },
  {
    path: '/projetos',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/tecnico-informatica',
    name: 'TecnicoInformatica',
    component: TecnicoInformatica
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 