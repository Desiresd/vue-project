<template>
  <div>
    <h3>
      Vue.extend(option: Object) <br>
      API创建一个子类，参数是一个包含组件选项的对象<br>
    </h3>
    <div id="extendTest"></div>
  </div>
</template>

<script>
// 创建一个子类，参数是一个包含组件选项的对象。
import Vue from 'vue';
let Profile = Vue.extend({
  template: '<p>我是data定义name的值：{{ name }}</p>',
  data() {
    return {
      name: '我是Name'
    }
  }
})
let profile = new Profile().$mount()
export default {
  name: 'Extend',
  mounted() {
    let extendId = document.getElementById('extendTest')
    extendId.appendChild(profile.$el)
  }
}
</script>

<style lang='scss' scoped></style>
