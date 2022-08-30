<template>
  <div class="navs-page">
    <search-page :reminder="reminder"
                 @search="search" />
    <list-box :searchArr="searchArr"
              :navsArr="navsArr"
              :navsTools="navsTools" />
  </div>
</template>

<script>
import { navigation } from '@/json/navigation.js'
import SearchPage from './Search'
import ListBox from './ListBox'
export default {
  name: 'index',
  components: {
    SearchPage,
    ListBox
  },
  data () {
    return {
      navigation: navigation,
      searchArr: [],
      navsArr: [],
      navsTools: [],
      reminder: ['Github', 'Element', 'ECharts', 'Iconfont', '力扣']
    }
  },
  created () {
    // 分离出导航页
    this.navsArr = this.setNavs()
    // 分离出内容（一维数组变二维数组）
    this.navsTools = this.setTools()
  },
  methods: {
    search (name) {
      if (!name) {
        this.searchArr = []
        return
      }
      let navs = JSON.parse(JSON.stringify(this.navigation))
      let searchArr = navs.filter(item => (item.name).toUpperCase().includes(name.toUpperCase()) || (item.des).toUpperCase().includes(name.toUpperCase()))
      this.searchArr = this.changeColor(searchArr, name)
    },
    changeColor (resultsList, search) {
      resultsList.map((item, index) => {
        if (search) {
          // 匹配关键字正则
          let replaceReg = new RegExp(search, 'i')
          // 高亮替换v-html值
          let replaceString = '<span style="color: red;font-weight: bold;">' + search + '</span>'
          if (resultsList[index].name) {
            resultsList[index].name = item.name.replace(replaceReg, replaceString)
          }
          if (resultsList[index].des) {
            resultsList[index].des = item.des.replace(replaceReg, replaceString)
          }
        }
      })
      return resultsList
    },
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
$color-back: #f7f7f7;
.navs-page {
  background: $color-back;
  min-width: 700px;
  min-height: 100vh;
}
</style>
