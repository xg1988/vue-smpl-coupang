import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Search from './Search'
import Category from './Category'
import Goldbox from './Goldbox'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/coupang',
      component: Home
    },
    {
      path: '/coupang/about',
      component: About
    },
    {
      path: '/coupang/search',
      component: Search
    },
    {
      path: '/coupang/category',
      component: Category
    },
    {
      path: '/coupang/goldbox',
      component: Goldbox
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/404"
    }
  ]
})
