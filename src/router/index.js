import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/alexandria',
    name: 'Lighthouse of Alexandria',
    component: () => import('../views/Alexandria.vue')
  },
  {
    path: '/artemis',
    name: 'Temple of Artemis',
    component: () => import('../views/Artemis.vue')
  },
  {
    path: '/babylon',
    name: 'The Hanging Gardens of Babylon',
    component: () => import('../views/Babylon.vue')
  },
  {
    path: '/halicarnassus',
    name: 'Mausoleum of Halicarnassus',
    component: () => import('../views/Halicarnassus.vue')
  },
  {
    path: '/pyramid',
    name: 'The Great Pyramid',
    component: () => import('../views/Pyramid.vue')
  },
  {
    path: '/rhodes',
    name: 'The Colossus of Rhodes',
    component: () => import('../views/Rhodes.vue')
  },
  {
    path: "/zeus",
    name: "Zeus",
    component: () => import('../views/Zeus.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
