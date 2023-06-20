<template>
  <div>
    <h3>
      Vue.compile(template: string) <br>
      将模板字符串编译成render（渲染）函数 <br>
    </h3>
  </div>
</template>

<script>
import Vue from 'vue'
let res = Vue.compile('<div>{{ msg }}</div>')
export default {
  name: 'Compile',
  data() {
    return {
      msg: 'hello'
    }
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
}
</script>

<style lang='scss' scoped></style>
