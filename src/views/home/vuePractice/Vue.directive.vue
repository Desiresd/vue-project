<template>
  <div>
    <h3>
      Vue.directive(id: string, option: function)
      注册或获取全局指令<br>
      两个参数（指令名称，钩子函数对象<br>
    </h3>
    <span v-red>我原本时黑色的，被自定义组件渲染成红色了</span>
    <input type="text" placeholder="名称" v-focus>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.directive('focus', {
  bind: function () {
    // 指令第一次绑定到元素时使用
  },
  inserted: function (el) {
    // 指令被插入到元素之后时调用
    el.focus()
  },
  update: function () {
    // 当指令所绑定的元素更新时调用
  },
  componentUpdated: function () {
    // 当指令所在组件的VNode计算结束时调用
  },
  unbind: function () {
    // 指令与元素解绑时调用
  }
})
Vue.directive('red', {
  inserted: function (el) {
    el.style.color = 'red'
  }
})
Vue.directive('green', function (el) {
  // 这里将会被bind和updated调用
})
export default {
  name: 'Directive',
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped></style>
