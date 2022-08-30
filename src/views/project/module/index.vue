<template>
  <div class="navs-page">
    <search-page :reminder="reminder"
                 @search="search" />
    <div class="content">
      <el-row :gutter="20">
        <el-col :xs="12"
                :sm="12"
                :md="8"
                :lg="6"
                :xl="4"
                class="col"
                v-for="(item,index) in module"
                :key="index">
          <div @click="toDetail(item.element)">
            <boxs :item="item" />
          </div>
        </el-col>
      </el-row>
    </div>
    <dialog-page ref="dialogPage" />
  </div>
</template>

<script>
import { module } from '@/json/module.js'
import SearchPage from './../navigation/Search'
import Boxs from './Boxs'
import DialogPage from './dialog/index'
export default {
  name: 'index',
  components: {
    SearchPage,
    Boxs,
    DialogPage
  },
  data () {
    return {
      module: module,
      reminder: ['Github', 'Element', 'ECharts', 'Iconfont', '力扣']
    }
  },
  methods: {
    search (name) {
      console.log('name=' + name)
      // if (!name) {
      //   this.searchArr = []
      //   return
      // }
      // let navs = JSON.parse(JSON.stringify(this.navigation))
      // let searchArr = navs.filter(item => (item.name).toUpperCase().includes(name.toUpperCase()) || (item.des).toUpperCase().includes(name.toUpperCase()))
      // this.searchArr = this.changeColor(searchArr, name)
    },
    toDetail (element) {
      console.log(element)
      this.$refs.dialogPage.visible = true
      this.$refs.dialogPage.element = element
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
  .content {
    box-sizing: border-box;
    padding: 20px;
    .col {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
}
</style>
