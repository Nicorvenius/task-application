import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ChangeData from '@/components/ChangeData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/change/:id',
      name: 'Change',
      props: true,
      component: ChangeData
    }
  ]
})
