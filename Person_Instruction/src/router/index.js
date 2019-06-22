import Vue from 'vue'
import Router from 'vue-router'
import yht from '@/components/yht'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'yht',
      component: yht,
      children:[]
    }
  ]
})
