<template>
  <div id="container"></div>
</template>

<script>
import { Scene } from '@antv/l7'
import { GaodeMap } from '@antv/l7-maps'
export default {
  name: 'index',
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      let _this = this
      const scene = new Scene({
        id: 'container',
        logoVisible: false,
        map: new GaodeMap({
          pitch: 0,
          mapStyle: 'amap://styles/7129aad59f7cf922bf7c5851f18d8ac2', // light dark normal
          center: [113.280637, 23.125178], // 初始化地图中心点位置
          zoom: 11, // 初始化地图级别
          labelzIndex: 120,
          token: '38b75e8ec53e8c3b10a24c0cdcba69eb',
          plugin: ['AMap.ToolBar', 'AMap.Scale', 'AMap.DistrictSearch'] // 此处很重要,配置加载查询坐标的插件
        })
      })

      scene.on('loaded', () => {
        // scene.map.panby(160, -80) // scene.map,可以调用高德地图api
        // 定义获取行政区实例--调用插件后,window上会挂上AMap
        const districtSearch = new window.AMap.DistrictSearch({
          level: 'city', // 关键字对应的行政区级别
          subdistrict: 1, // 显示下级行政区级数
          extensions: 'all' // 是否返回行政区边界坐标点
        })
        districtSearch.search('南宁', function (status, result) {
          console.log(result)
          _this.handlePolygon(result, window.AMap, scene.map)
        })
      })
    },
    handlePolygon (result, AMaps, map) {
      let bounds = result.districtList[0].boundaries
      if (bounds) {
        for (let i = 0, l = bounds.length; i < l; i++) {
          // 生成行政区划polygon
          let polygon = new AMaps.Polygon({
            map: map, // 指定地图对象
            strokeWeight: 1, // 轮廓线宽度
            path: bounds[i], // 轮廓线的节点坐标数组
            fillOpacity: 0.15, // 透明度
            fillColor: '#256edc', // 填充颜色
            strokeColor: '#256edc' // 线条颜色
          })
          polygon.on('click', (e) => {
            // 点击绘制的区域时执行其他交互
          })
        }
        // 地图自适应
        map.setFitView()
      }
    }
  }
}
</script>

<style lang='scss' scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
