// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHashHistory, createWebHistory, useRoute } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Detail from '../views/Detail.vue'
import { nextTick } from 'vue'
const Products = () => import('../views/Products.vue')
const Blogs = () => import('../views/Blogs.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/services',
    name: 'Service',
    component: Services,
    meta: { title: 'Service' }
  },
  {
    path: '/products/:type',
    name: 'Products',
    component: Products,
    meta: { title: 'Product | ' }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: { title: 'Detail' }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: { title: 'Blogs' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.afterEach((to, from, fail) => {
  nextTick(() => {
    document.title = to.meta.title += to.params.type || ''
  })
})

export default router
