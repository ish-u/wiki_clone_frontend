import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/Page.vue'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wiki/:pageID',
    name: 'wiki',
    component: Page,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
