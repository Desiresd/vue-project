import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '@/json/routes.js'

Vue.use(Router)

export default new Router({
  // mode: 'hash', // 打包调用
  mode: 'history', // 测试调用
  routes: routes
})
