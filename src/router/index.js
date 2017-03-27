import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vuextest from '../components/Vuextest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Vuextest',
      name: 'Vuextest',
      component:Vuextest
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
