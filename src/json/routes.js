// 存放路由

export const routes = [
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
    path: '/tv',
    name: 'Tv',
    component: () => import('@/views/tv/index')
  },
  {
    path: '/tvMade',
    name: 'TvMade',
    component: () => import('@/views/tv/made')
  },
  {
    path: '/dataStructrues',
    name: 'DataStructrues',
    component: () => import('@/views/dataStructrues/index')
  },
  {
    path: '/leetCode',
    name: 'LeetCode',
    component: () => import('@/views/LeetCode/index')
  },
  {
    path: '/lis',
    name: 'Lis',
    component: () => import('@/views/lis/index'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views/lis/Verify')
      },
      {
        path: 'Verify',
        name: 'Verify',
        component: () => import('@/views/lis/Verify')
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
        path: 'LisDict',
        name: 'LisDict',
        component: () => import('@/views/lis/LisDict')
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
      },
      {
        path: 'LisModal',
        name: 'LisModal',
        component: () => import('@/views/lis/LisModal')
      },
      {
        path: 'LisToolTip',
        name: 'LisToolTip',
        component: () => import('@/views/lis/LisToolTip')
      },
      {
        path: 'LisEllipsisTip',
        name: 'LisEllipsisTip',
        component: () => import('@/views/lis/LisEllipsisTip')
      },
      {
        path: 'LisAlert',
        name: 'LisAlert',
        component: () => import('@/views/lis/LisAlert')
      },
      {
        path: 'LisNotification',
        name: 'LisNotification',
        component: () => import('@/views/lis/LisNotification')
      },
      {
        path: 'LisMessage',
        name: 'LisMessage',
        component: () => import('@/views/lis/LisMessage')
      },
      {
        path: 'LisPopConfirm',
        name: 'LisPopConfirm',
        component: () => import('@/views/lis/LisPopConfirm')
      },
      {
        path: 'LisProgress',
        name: 'LisProgress',
        component: () => import('@/views/lis/LisProgress')
      },
      {
        path: 'LisAnchor',
        name: 'LisAnchor',
        component: () => import('@/views/lis/LisAnchor')
      },
      {
        path: 'LisTable',
        name: 'LisTable',
        component: () => import('@/views/lis/LisTable')
      }
    ]
  },
  {
    path: '/L7',
    name: 'L7',
    component: () => import('@/views/L7/index')
  },
  {
    path: '/gaode',
    name: 'gaode',
    component: () => import('@/views/gaode/index')
  },
  {
    path: '/tianditu',
    name: 'tianditu',
    component: () => import('@/views/tianditu/index')
  }
]
