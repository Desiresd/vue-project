<template>
  <div>
    我是主页
    <span>123</span>
  </div>
</template>

<script>
import { getUserList } from '@/api/user.js'
export default {
  data () {
    return {

    }
  },
  created () {
    getUserList().then(res => {
      console.log('请求数据1')
      console.log(res)
    })
    setTimeout(() => {
      getUserList().then(res => {
        console.log('请求数据2')
        console.log(res)
      })
    }, 200)
    setTimeout(() => {
      getUserList().then(res => {
        console.log('请求数据3')
        console.log(res)
      })
    }, 400)
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
