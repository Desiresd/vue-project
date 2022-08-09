// 存放路由

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views/home/cover/index')
      },
      {
        path: '/cover',
        name: 'Cover',
        component: () => import('@/views/home/cover/index')
      },
      {
        path: '/catalog',
        name: 'Catelog',
        component: () => import('@/views/home/catalog/index')
      },
      {
        path: '/intro',
        name: 'Intro',
        component: () => import('@/views/home/personal/intro')
      },
      {
        path: '/skills',
        name: 'Skills',
        component: () => import('@/views/home/personal/skills')
      },
      {
        path: '/works',
        name: 'Works',
        component: () => import('@/views/home/personal/works')
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/home/personal/projects')
      },
      {
        path: '/dataStructrues',
        name: 'DataStructrues',
        component: () => import('@/views/home/dataStructrues/index')
      },
      {
        path: '/leetCode',
        name: 'LeetCode',
        component: () => import('@/views/home/LeetCode/index')
      },
      {
        path: '/lis',
        name: 'Lis',
        component: () => import('@/views/home/lis/index'),
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/home/lis/Verify')
          },
          {
            path: 'Verify',
            name: 'Verify',
            component: () => import('@/views/home/lis/Verify')
          },
          {
            path: 'LisRowCol',
            name: 'LisRowCol',
            component: () => import('@/views/home/lis/LisRowCol')
          },
          {
            path: 'LisSelect',
            name: 'LisSelect',
            component: () => import('@/views/home/lis/LisSelect')
          },
          {
            path: 'LisDict',
            name: 'LisDict',
            component: () => import('@/views/home/lis/LisDict')
          },
          {
            path: 'LisInput',
            name: 'LisInput',
            component: () => import('@/views/home/lis/LisInput')
          },
          {
            path: 'LisInputNumber',
            name: 'LisInputNumber',
            component: () => import('@/views/home/lis/LisInputNumber')
          },
          {
            path: 'LisTextArea',
            name: 'LisTextArea',
            component: () => import('@/views/home/lis/LisTextArea')
          },
          {
            path: 'LisDate',
            name: 'LisDate',
            component: () => import('@/views/home/lis/LisDate')
          },
          {
            path: 'LisDateArea',
            name: 'LisDateArea',
            component: () => import('@/views/home/lis/LisDateArea')
          },
          {
            path: 'LisDateYear',
            name: 'LisDateYear',
            component: () => import('@/views/home/lis/LisDateYear')
          },
          {
            path: 'LisTabs',
            name: 'LisTabs',
            component: () => import('@/views/home/lis/LisTabs')
          },
          {
            path: 'LisSpin',
            name: 'LisSpin',
            component: () => import('@/views/home/lis/LisSpin')
          },
          {
            path: 'LisSwitch',
            name: 'LisSwitch',
            component: () => import('@/views/home/lis/LisSwitch')
          },
          {
            path: 'LisButton',
            name: 'LisButton',
            component: () => import('@/views/home/lis/LisButton')
          },
          {
            path: 'LisModal',
            name: 'LisModal',
            component: () => import('@/views/home/lis/LisModal')
          },
          {
            path: 'LisToolTip',
            name: 'LisToolTip',
            component: () => import('@/views/home/lis/LisToolTip')
          },
          {
            path: 'LisEllipsisTip',
            name: 'LisEllipsisTip',
            component: () => import('@/views/home/lis/LisEllipsisTip')
          },
          {
            path: 'LisAlert',
            name: 'LisAlert',
            component: () => import('@/views/home/lis/LisAlert')
          },
          {
            path: 'LisNotification',
            name: 'LisNotification',
            component: () => import('@/views/home/lis/LisNotification')
          },
          {
            path: 'LisMessage',
            name: 'LisMessage',
            component: () => import('@/views/home/lis/LisMessage')
          },
          {
            path: 'LisPopConfirm',
            name: 'LisPopConfirm',
            component: () => import('@/views/home/lis/LisPopConfirm')
          },
          {
            path: 'LisProgress',
            name: 'LisProgress',
            component: () => import('@/views/home/lis/LisProgress')
          },
          {
            path: 'LisAnchor',
            name: 'LisAnchor',
            component: () => import('@/views/home/lis/LisAnchor')
          },
          {
            path: 'LisTable',
            name: 'LisTable',
            component: () => import('@/views/home/lis/LisTable')
          }
        ]
      },
      {
        path: '/L7',
        name: 'L7',
        component: () => import('@/views/home/map/L7/index')
      },
      {
        path: '/gaode',
        name: 'gaode',
        component: () => import('@/views/home/map/gaode/index')
      },
      {
        path: '/tianditu',
        name: 'tianditu',
        component: () => import('@/views/home/map/tianditu/index')
      }
    ]
  },
  {
    path: '/personalEA',
    name: 'PersonalEA',
    component: () => import('@/views/project/personalEA/index')
  },
  {
    path: '/tv',
    name: 'Tv',
    component: () => import('@/views/project/tv/index')
  },
  {
    path: '/tvMade',
    name: 'TvMade',
    component: () => import('@/views/project/tv/made')
  },
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/project/multiScreen/index')
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: () => import('@/views/project/navigation/index')
  }
]
