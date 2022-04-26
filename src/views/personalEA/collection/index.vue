<template>
  <div class="collection">
    <title-bar name="个人作品集（独立）" />
    <el-row>
      <el-col v-for="item in colData"
              :key="item.id"
              :xs="12"
              :sm="12"
              :md="8"
              :lg="6"
              :xl="6">
        <div class="content-image">
          <el-image :title="item.name"
                    :style="{'height': imageHeight}"
                    :src="require(`@/assets/works${item.image}`)"
                    :preview-src-list="reviewImages(colData)">
          </el-image>
          <div class="text"
               @click="toPath(item)">
            {{ item.name }}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import titleBar from '@/components/common/titleBar.vue'
import { debounce } from '@/common/debounce.js'
// 监听图片宽度去设置图片高度
let elementResizeDetectorMaker = require('element-resize-detector')

export default {
  name: 'index',
  components: {
    titleBar
  },
  data () {
    return {
      imageHeight: '0px',
      colData: [
        {
          id: '1',
          name: '空气检测质量图形化（Vue、Element、Echarts）',
          image: '/zx/vueData.png',
          url: 'http://101.132.226.7/vue-data'
        },
        {
          id: '2',
          name: '定制电视墙（HTML、CSS、JS、Swiper）',
          image: '/zx/htmlTv.png',
          url: 'http://101.132.226.7/tv-wall-html/home.html'
        },
        {
          id: '3',
          name: '算法测试集合（数据结构）',
          image: '/zx/dataStructrues.png',
          route: '/dataStructrues'
        },
        {
          id: '4',
          name: '组件二次封装集合（Vue、AntDesign）',
          image: '/zx/antLis.png',
          route: '/lis'
        },
        {
          id: '5',
          name: '占位（测试）',
          image: '/qs/5.png',
          route: '/'
        },
        {
          id: '6',
          name: '占位（测试）',
          image: '/qs/5.png',
          route: '/'
        }
      ]
    }
  },
  mounted () {
    // 监听图片宽度去设置图片高度(自适应同等高度),并添加防抖，以防频繁切换
    let _this = this
    var erd = elementResizeDetectorMaker()
    erd.listenTo(document.getElementsByClassName('content-image')[0], debounce(function (element) {
      let width = element.offsetWidth
      let height = Math.ceil(width * 1 / 2)
      _this.$nextTick(() => {
        _this.imageHeight = height + 'px'
      })
    }, 50))
  },
  computed: {
    reviewImages () {
      return (value) => {
        if (!!value === false) return []
        const array = value.map(item => {
          return require(`@/assets/works${item.image}`)
        })
        return array
      }
    }
  },
  methods: {
    toPath (item) {
      const path = item.url || item.route
      if (item.url) {
        window.location.href = path
      } else {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.collection {
  min-height: 350px;
  background: #3d4557;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 0 30px 0;
  .el-row {
    max-width: 1180px;
    margin-top: 30px;
  }
  .content-image {
    box-sizing: border-box;
    padding: 20px 10px;
    .text {
      height: 30px;
      font-size: 14px;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }
}
</style>
