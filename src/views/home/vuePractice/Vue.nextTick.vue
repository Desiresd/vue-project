<template>
  <div>
    <h3>
      Vue.nextTick(callback: function)<br>
      Vue.nextTick().then(callback: function) <br>
      在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即执行该方法，可以获取更新后的DOM。<br>
      参数{Function}[callback]或者{Object}[context]<br>
    </h3>
    <div id="nextTick">{{ data }}</div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'NextTick',
  data() {
    return {
      data: '更新前的值1'
    }
  },
  mounted() {
    this.data = '更新后的值2'
    Vue.nextTick(function () {
      let dom = document.getElementById('nextTick')
      console.log(dom);
    })
    Vue.nextTick().then(function () {
      let dom = document.getElementById('nextTick')
      console.log(dom);
    })
  }
}
</script>

<style lang='scss' scoped></style>
