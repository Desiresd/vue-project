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
    <lis-image-view ref="LisImageView"
                    :imgIndex="imageIndex"
                    :imgSrc="imgSrc"
                    :imgArr="imgArr" />
  </div>
</template>

<script>
import { module } from '@/json/module.js'
import SearchPage from './../navigation/Search'
import Boxs from './Boxs'
import DialogPage from './dialog/index'
import LisImageView from '@/components/lisP/LisImageView'
export default {
  name: 'index',
  components: {
    SearchPage,
    Boxs,
    DialogPage,
    LisImageView
  },
  data () {
    return {
      module: module,
      reminder: ['Github', 'Element', 'ECharts', 'Iconfont', '力扣'],
      // 图片预览组件信息
      imageIndex: 0,
      imgSrc: 'master.jpg',
      imgArr: ['master.jpg', 'aurora.jpg', 'aboutme.jpg']
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
      if (element === 'ImageView') {
        this.$refs.LisImageView.show()
        return
      }
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
