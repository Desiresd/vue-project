<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
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
      AMapLoader.load({
        key: '38b75e8ec53e8c3b10a24c0cdcba69eb', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.DistrictSearch'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        // 绘制地图
        this.map = new AMap.Map('container', { // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 5, // 初始化地图级别
          center: [113.280637, 23.125178] // 初始化地图中心点位置
        })
        // 获取边界坐标点
        AMap.plugin('AMap.DistrictSearch', () => {
          var districtSearch = new AMap.DistrictSearch({
            // 关键字对应的行政区级别，共有5种级别
            level: 'province',
            //  是否显示下级行政区级数，1表示返回下一级行政区
            subdistrict: 0,
            // 返回行政区边界坐标点
            extensions: 'all'
          })
          // 搜索所有省/直辖市信息
          districtSearch.search('山西', (status, result) => {
            // 查询成功时，result即为对应的行政区信息
            this.handlePolygon(result, AMap)
          })
        })

        // 获取边界坐标点
        AMap.plugin('AMap.DistrictSearch', () => {
          var districtSearch = new AMap.DistrictSearch({
            // 关键字对应的行政区级别，共有5种级别
            level: 'city',
            //  是否显示下级行政区级数，1表示返回下一级行政区
            subdistrict: 0,
            // 返回行政区边界坐标点
            extensions: 'all'
          })
          // 搜索所有省/直辖市信息
          districtSearch.search('太原', (status, result) => {
            // 查询成功时，result即为对应的行政区信息
            this.handlePolygonCity(result, AMap)
          })
        })
      }).catch(e => {
        console.log(e)
      })
    },
    handlePolygon (result, AMap) {
      let bounds = result.districtList[0].boundaries
      if (bounds) {
        for (let i = 0, l = bounds.length; i < l; i++) {
          // 生成行政区划polygon
          let polygon = new AMap.Polygon({
            map: this.map, // 指定地图对象
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
        this.map.setFitView()
      }
    },
    handlePolygonCity (result, AMap) {
      let bounds = result.districtList[0].boundaries
      if (bounds) {
        for (let i = 0, l = bounds.length; i < l; i++) {
          // 生成行政区划polygon
          let polygon = new AMap.Polygon({
            map: this.map, // 指定地图对象
            strokeWeight: 1, // 轮廓线宽度
            path: bounds[i], // 轮廓线的节点坐标数组
            fillOpacity: 0.8, // 透明度
            fillColor: 'red', // 填充颜色
            strokeColor: 'red' // 线条颜色
          })
          polygon.on('click', (e) => {
            // 点击绘制的区域时执行其他交互
          })
        }
        // 地图自适应
        this.map.setFitView()
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
