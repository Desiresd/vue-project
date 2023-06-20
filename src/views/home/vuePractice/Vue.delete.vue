<template>
  <div>
    <h3>
      全局Vue.delete(target: Object|Array, propertyName|index: string|number)/实例方法this.$delete()<br>
      删除对象的property（属性）。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开Vue不能检测到property被删除的限制。<br>
      参数有两个（目标对象/目标数组，键/下标）<br>
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
  name: 'Delete',
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
    // 全局
    Vue.delete(this.person, 'age')
    // 实例方法
    this.$delete(this.animal, 1)
  }
}
</script>

<style lang='scss' scoped></style>
