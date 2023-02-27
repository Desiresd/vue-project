<template>
  <div>
    <back-drop icon="el-icon-share"
               titleCN="职业技能"
               titleEN="Vocational Skills">
      <div class="means">
        <ul>
          <li v-for="item in msg"
              :key="item.id">
            {{ item.content}}
          </li>
        </ul>
      </div>
    </back-drop>
  </div>
</template>

<script>
import BackDrop from './../BackDrop'
export default {
  name: 'skills',
  components: {
    BackDrop
  },
  data () {
    return {
      msg: [
        {
          id: '1',
          content: '熟练使用 HTML/CSS/JS/jQuery，及 H5/C3/ES 新特性；'
        },
        {
          id: '2',
          content: '熟练使用 Vue 全家桶、微信小程序进行项目开发；'
        },
        {
          id: '3',
          content: '熟练使用 Element-ui/AntDesign/UniApp/Layui/Bootstrap 等前端框架；'
        },
        {
          id: '5',
          content: '熟练使用 Sass/Less - CSS拓展语言；'
        },
        {
          id: '6',
          content: ' 熟练使用Swiper/ECharts/Leaflet等前端图表化及地图常用插件；'
        },
        {
          id: '7',
          content: '熟练使用 高德地图/百度地图/天地图 等地图开发；'
        },
        {
          id: '8',
          content: '熟练掌握常见浏览器适配、移动端和响应式布局开发，前后端分离开发；'
        },
        {
          id: '9',
          content: '了解 Webpack/Git/SVN 等构建工具管理；'
        },
        {
          id: '10',
          content: '了解后端 Java、Php、Node 语言。'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
$color-black: rgba(0, 0, 0, 0.9);
.means {
  background: $color-black;
  padding: 50px 40px 32px 40px;
  border-radius: 10px;
  li {
    line-height: 45px;
    font-size: 18px;
    letter-spacing: 1px;
  }
}
</style>
