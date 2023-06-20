<template>
  <div>
    <h3>
      全局Vue.set(target: Object|Array, propertyName|index: string|number, value: any)/实例方法this.$set()<br>
      向响应式对象中添加一个property（属性），并确保这个property同样是响应式的，且触发视图更新。它必须用于向响应式对象
      上添加新的property，因为Vue无法探测普通新增的property。<br>
      参数有三个（目标对象/目标数组，键/下标，值）<br>
    </h3>
    <p>
      {{ person }}
      {{ animal }}
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Set',
  data() {
    return {
      person: {
        name: 'mo',
        age: '24'
      },
      animal: ['pink', 'crocodile']
    }
  },
  mounted() {
    // 全局API
    Vue.set(this.person, 'name', '我是修改的name')
    Vue.set(this.person, 'money', 99999999999)
    //实例API
    this.$set(this.animal, 0, '大象')
    this.$set(this.animal, 2, '老虎')
  }
}
</script>

<style lang='scss' scoped></style>
