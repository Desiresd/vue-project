<template>
  <div>
    <h3>
      Vue.filter(id: string,definition: function) <br>
      注册或者获取全局过滤器
    </h3>
    <p>我原本是小写的，被过滤成大写的了。{{ name | UpperCase }}</p>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.filter('UpperCase', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})
export default {
  name: 'Filterss',
  data() {
    return {
      name: 'fdsjfahdksafkdhskfh'
    }
  }
}
</script>

<style lang='scss' scoped></style>
