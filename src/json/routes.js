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
        path: '/lisP',
        name: 'LisP',
        component: () => import('@/views/home/lisP/index'),
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/home/lisP/Verify')
          },
          {
            path: 'Verify',
            name: 'Verify',
            component: () => import('@/views/home/lisP/Verify')
          },
          {
            path: 'LisRowCol',
            name: 'LisRowCol',
            component: () => import('@/views/home/lisP/LisRowCol')
          },
          {
            path: 'LisSelect',
            name: 'LisSelect',
            component: () => import('@/views/home/lisP/LisSelect')
          },
          {
            path: 'LisDict',
            name: 'LisDict',
            component: () => import('@/views/home/lisP/LisDict')
          },
          {
            path: 'LisInput',
            name: 'LisInput',
            component: () => import('@/views/home/lisP/LisInput')
          },
          {
            path: 'LisInputNumber',
            name: 'LisInputNumber',
            component: () => import('@/views/home/lisP/LisInputNumber')
          },
          {
            path: 'LisTextArea',
            name: 'LisTextArea',
            component: () => import('@/views/home/lisP/LisTextArea')
          },
          {
            path: 'LisDate',
            name: 'LisDate',
            component: () => import('@/views/home/lisP/LisDate')
          },
          {
            path: 'LisDateArea',
            name: 'LisDateArea',
            component: () => import('@/views/home/lisP/LisDateArea')
          },
          {
            path: 'LisDateYear',
            name: 'LisDateYear',
            component: () => import('@/views/home/lisP/LisDateYear')
          },
          {
            path: 'LisTabs',
            name: 'LisTabs',
            component: () => import('@/views/home/lisP/LisTabs')
          },
          {
            path: 'LisSpin',
            name: 'LisSpin',
            component: () => import('@/views/home/lisP/LisSpin')
          },
          {
            path: 'LisSwitch',
            name: 'LisSwitch',
            component: () => import('@/views/home/lisP/LisSwitch')
          },
          {
            path: 'LisButton',
            name: 'LisButton',
            component: () => import('@/views/home/lisP/LisButton')
          },
          {
            path: 'LisModal',
            name: 'LisModal',
            component: () => import('@/views/home/lisP/LisModal')
          },
          {
            path: 'LisToolTip',
            name: 'LisToolTip',
            component: () => import('@/views/home/lisP/LisToolTip')
          },
          {
            path: 'LisEllipsisTip',
            name: 'LisEllipsisTip',
            component: () => import('@/views/home/lisP/LisEllipsisTip')
          },
          {
            path: 'LisAlert',
            name: 'LisAlert',
            component: () => import('@/views/home/lisP/LisAlert')
          },
          {
            path: 'LisNotification',
            name: 'LisNotification',
            component: () => import('@/views/home/lisP/LisNotification')
          },
          {
            path: 'LisMessage',
            name: 'LisMessage',
            component: () => import('@/views/home/lisP/LisMessage')
          },
          {
            path: 'LisPopConfirm',
            name: 'LisPopConfirm',
            component: () => import('@/views/home/lisP/LisPopConfirm')
          },
          {
            path: 'LisProgress',
            name: 'LisProgress',
            component: () => import('@/views/home/lisP/LisProgress')
          },
          {
            path: 'LisAnchor',
            name: 'LisAnchor',
            component: () => import('@/views/home/lisP/LisAnchor')
          },
          {
            path: 'LisTable',
            name: 'LisTable',
            component: () => import('@/views/home/lisP/LisTable')
          },
          {
            path: 'LisGroupQuery',
            name: 'LisGroupQuery',
            component: () => import('@/views/home/lisP/LisGroupQuery')
          },
          {
            path: 'LisTree',
            name: 'LisTree',
            component: () => import('@/views/home/lisP/LisTree')
          },
          {
            path: 'LisUploadTable',
            name: 'LisUploadTable',
            component: () => import('@/views/home/lisP/LisUploadTable')
          },
          {
            path: 'LisUploadList',
            name: 'LisUploadList',
            component: () => import('@/views/home/lisP/LisUploadList')
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
    path: '/canvas',
    name: 'Canvas',
    component: () => import('@/views/home/canvas/index'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views/home/canvas/topic/table/index')
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/home/canvas/topic/table/index')
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
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import('@/views/project/note/index')
  },
  {
    path: '/module',
    name: 'Module',
    component: () => import('@/views/project/module/index')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/project/module/test')
  }
]
