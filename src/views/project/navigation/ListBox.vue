<template>
  <div class="list-box">
    <tools-page v-show="searchArr && searchArr.length > 0"
                title="搜索·内容"
                :tools="searchArr" />
    <navs-page :navs="navsArr" />
    <tools-page v-for="(item,index) in navsTools"
                :key="index"
                :tools="item" />
  </div>
</template>

<script>
import NavsPage from './Navs'
import ToolsPage from './Tools'
export default {
  name: 'ListBox',
  components: {
    NavsPage,
    ToolsPage
  },
  props: {
    searchArr: {
      type: Array,
      default: () => { return [] }
    },
    navsArr: {
      type: Array,
      default: () => { return [] }
    },
    navsTools: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.list-box {
  box-sizing: border-box;
  padding: 10px 20px;
}
</style>
