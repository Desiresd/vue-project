<template>
  <div>
    <h3>
      Vue.component(id: string, definition: Function | Object | Extend) <br>
      注册或获取全局组件，注册还会自动使用给定的id设置组件的名字。
    </h3>
    <my-component />
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('my-component', {
  template: '<p>我是新注册的组件{{ ageMulta }}</p>',
  data() {
    return {
      age: 24
    }
  },
  computed: {
    ageMulta: function () {
      return this.age * 2
    }
  }
})
export default {
  name: 'Componentss',
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped></style>
