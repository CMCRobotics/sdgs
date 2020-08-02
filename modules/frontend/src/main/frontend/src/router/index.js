import Vue from 'vue'
import Router from 'vue-router'
import Join from './views/Join.vue'
import Edit from './views/Edit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Join
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
})