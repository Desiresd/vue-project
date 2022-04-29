import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/home/index'
// import PersonalEA from '@/views/personalEA/index'
// import DataStructrues from '@/views/dataStructrues/index'
// import Lis from '@/views/lis/index'

Vue.use(Router)

export default new Router({
  // mode: 'hash', // 打包调用
  mode: 'history', // 测试调用
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/personalEA/index.vue')
    },
    {
      path: '/personalEA',
      name: 'PersonalEA',
      component: () => import('@/views/personalEA/index')
    },
    {
      path: '/dataStructrues',
      name: 'DataStructrues',
      component: () => import('@/views/dataStructrues/index')
    },
    {
      path: '/lis',
      name: 'Lis',
      component: () => import('@/views/lis/index'),
      children: [
        {
          path: '',
          name: '',
          component: () => import('@/views/lis/LisRowCol')
        },
        {
          path: 'LisRowCol',
          name: 'LisRowCol',
          component: () => import('@/views/lis/LisRowCol')
        },
        {
          path: 'LisSelect',
          name: 'LisSelect',
          component: () => import('@/views/lis/LisSelect')
        },
        {
          path: 'LisInput',
          name: 'LisInput',
          component: () => import('@/views/lis/LisInput')
        },
        {
          path: 'LisInputNumber',
          name: 'LisInputNumber',
          component: () => import('@/views/lis/LisInputNumber')
        },
        {
          path: 'LisTextArea',
          name: 'LisTextArea',
          component: () => import('@/views/lis/LisTextArea')
        },
        {
          path: 'LisDate',
          name: 'LisDate',
          component: () => import('@/views/lis/LisDate')
        },
        {
          path: 'LisDateArea',
          name: 'LisDateArea',
          component: () => import('@/views/lis/LisDateArea')
        },
        {
          path: 'LisDateYear',
          name: 'LisDateYear',
          component: () => import('@/views/lis/LisDateYear')
        },
        {
          path: 'LisTabs',
          name: 'LisTabs',
          component: () => import('@/views/lis/LisTabs')
        },
        {
          path: 'LisSpin',
          name: 'LisSpin',
          component: () => import('@/views/lis/LisSpin')
        },
        {
          path: 'LisSwitch',
          name: 'LisSwitch',
          component: () => import('@/views/lis/LisSwitch')
        },
        {
          path: 'LisButton',
          name: 'LisButton',
          component: () => import('@/views/lis/LisButton')
        }
      ]
    }
  ]
})
