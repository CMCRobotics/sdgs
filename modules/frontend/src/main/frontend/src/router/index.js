import Vue from 'vue'
import Router from 'vue-router'
import Join from '@/views/Join'
import Edit from '@/views/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Join,
      meta: {
        title: 'SDG Stadium - Join a game',
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
      meta: {
        title: 'SDG Stadium - Programming',
      }
    }
  ]
})