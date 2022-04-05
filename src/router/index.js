import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import PersonalEA from '@/views/personalEA/index'
import DataStructrues from '@/views/dataStructrues/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personalEA',
      name: 'PersonalEA',
      component: PersonalEA
    },
    {
      path: '/dataStructrues',
      name: 'DataStructrues',
      component: DataStructrues
    }
  ]
})
