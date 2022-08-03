// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// ant-design-vue
import './components/lis/lazy_antd.js'
import Viser from 'viser-vue'
import 'ant-design-vue/dist/antd.less'

// 使用代码高亮
// https://blog.csdn.net/hellenYuan/article/details/110121099
import VueCodeHighlight from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism.css' // registers the v-highlight directive

// // 导入ICon 资源
import './assets/icon/iconfont.css'

// 使用 Vue-ls 本地缓存
import Storage from 'vue-ls'

// 使用swiper
// 引入swiper轮播图插件
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
  EffectFade
} from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'

// 按需引入echart
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'

// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 引入 Animate 动画效果
import animated from 'animate.css'

// 引入自定义字体
import './assets/font/font.css'

echarts.use([
  LabelLayout,
  UniversalTransition,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  CanvasRenderer,
  GridComponent,
  LegendComponent
])

SwiperClass.use([Pagination, Mousewheel, Autoplay, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(animated)

const options = {
  namespace: 'vuejs__', // key键前缀
  name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
  storage: 'local' // 存储名称: session, local, memory
}

Vue.use(Storage, options)
Vue.use(ElementUI)
Vue.use(VueCodeHighlight)
Vue.use(Viser)
Vue.config.productionTip = false

// 路由守护
// router.beforeEach((to, from, next) => { // 全局路由守护
//   if (store.getters.user != null || ['/login'].indexOf(to.path) !== -1) { // 如果当前user不为空
//     next()
//   } else {
//     next('/login') // 当前路由不在登录页，去登录页
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
