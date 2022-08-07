<template>
  <div>
    <h1>题目：</h1>
    <h4>描述：</h4>
    <p>思路：</p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'aademo',
  components: {
    HighLight
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = `
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
