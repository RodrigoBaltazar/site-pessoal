import { createRouter, createWebHistory } from 'vue-router'
import BaltazarBackworld from '../components/BaltazarBackworld.vue'
import VideosView from '../components/VideosView.vue'
import TecnicoInformatica from '../components/TecnicoInformatica.vue'
import HorasProgramacao from '../components/HorasProgramacao.vue'
const routes = [
  {
    path: '/',
    name: 'BaltazarBackworld',
    component: BaltazarBackworld
  },
  {
    path: '/videos',
    name: 'videos',
    component: VideosView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/VideosView.vue')
  },
  {
   path: '/tecnico-informatica',
   name: 'tecnico',
   component: TecnicoInformatica
  },
  {
    path: '/horas',
    name: 'horas',
    component: HorasProgramacao
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
