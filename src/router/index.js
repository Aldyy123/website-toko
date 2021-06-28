// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Products from '../views/Products.vue'
import Detail from '../views/Detail.vue'
import { nextTick } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Service',
    component: Services
  },
  {
    path: '/products/:type',
    name: 'Products',
    component: Products
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.afterEach((to, from, fail) => {
  nextTick(() => {
    document.title = 'Arsy Digicom'
  })
})

export default router
