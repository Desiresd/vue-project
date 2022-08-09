<template>
  <div class="list-box">
    <navs-page :navs="navsArr" />
    <tools-page v-for="(item,index) in navsTools"
                :key="index"
                :tools="item" />
  </div>
</template>

<script>
import { navigation } from '@/json/navigation.js'
import NavsPage from './Navs'
import ToolsPage from './Tools'
export default {
  name: 'ListBox',
  components: {
    NavsPage,
    ToolsPage
  },
  data () {
    return {
      navigation: navigation,
      navsArr: [],
      navsTools: []
    }
  },
  created () {
    // 分离出导航页
    this.navsArr = this.setNavs()
    // 分离出内容（一维数组变二维数组）
    this.navsTools = this.setTools()
    console.log(this.navsTools)
  },
  methods: {
    setNavs () {
      let navs = this.navigation
      let navsArr = []
      navs.forEach(items => {
        let index = navsArr.findIndex(item => item.navsId === items.navsId)
        if (index === -1) {
          navsArr.push({
            navsId: items.navsId,
            navsName: items.navsName
          })
        }
      })
      return navsArr
    },
    setTools () {
      let navs = this.navigation
      let navsTools = new Map()
      navs.forEach(item => {
        if (navsTools.has(item.navsId)) {
          let arr = navsTools.get(item.navsId)
          arr.push(item)
          navsTools.set(item.navsId, arr)
        } else {
          let arr = []
          arr.push(item)
          navsTools.set(item.navsId, arr)
        }
      })
      return [...navsTools.values()]
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
