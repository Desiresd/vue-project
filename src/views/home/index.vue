<template>
  <div>
    我是主页
    <span>123</span>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.$http.get(`/user`).then(res => {
      console.log('请求数据')
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss">
div{
  color: red;
  span{
    color: aquamarine;
  }
}
</style>
