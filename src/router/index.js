import Vue from 'vue'
import Router from 'vue-router'
import Selection from '@/components/Selection'
import Tous from '@/components/Tous'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Selection',
      component: Selection
    },
    {
      path: '/tous',
      name: 'Tous',
      component: Tous
    }
  ]
})
