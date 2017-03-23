import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import User from '@/components/Users'
import Grid from '@/components/Grid'
import ListRendering from '@/components/ListRendering'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/list-rendering',
      name: 'ListRendering',
      component: ListRendering
    }
  ]
})
