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
Vue.use(VueCodeHighlight)
Vue.use(Viser)
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
