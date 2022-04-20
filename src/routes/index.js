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
      path: '/about',
      component: About
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/goldbox',
      component: Goldbox
    },
    {
      path: '/:notFound(.*)'
      ,component: About
    }
  ]
})
