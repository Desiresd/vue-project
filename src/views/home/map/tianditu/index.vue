<template>
  <div class="map">
    <div id="map"></div>
    <!-- 经纬度显示 -->
    <coord class="coords"
           :latlng="latlng" />

    <!--工具显示 -->
    <tools class="tools"
           :name="toolsName"
           @toDraw="toDraw" />

    <!--编辑工具框显示 -->
    <editor ref="editor"
            class="editors"
            :value="elEditor"
            @editorChange="editorChange"
            @editorDelete="editorDelete" />
  </div>
</template>

<script>
import { message } from 'ant-design-vue'
import L from 'leaflet'
import NnCity from '@/components/map/basic/NnCity.json'
import Provider from '@/components/map/basic/chinatmsproviders.js'
import { ColorIcon } from '@/components/map/basic/markerIcon.js'

import Coord from '@/components/map/Coord'
import Tools from '@/components/map/Tools'
import Editor from '@/components/map/Editor'
require('leaflet/dist/leaflet.css')
require('@/components/map/basic/markerIcon.css')

export default {
  name: 'Index',
  components: {
    Coord,
    Tools,
    Editor
  },
  data () {
    return {
      map: null,
      mapKey: '947bc9088c6cf8b9843825313f4ac2f2',
      zoom: 9,
      minZoom: 1,
      maxZoom: 18,
      latlng: {}, // 实时经纬度
      // 元素
      elArr: [],
      elTool: null,
      isAllowDouble: false,
      latlngs: [],
      // 标注
      toolsName: '',
      elEditor: null,
      // 线条
      polylineArr: [],
      polylineTool: null,
      // 线面
      polygonArr: [],
      polygonTool: null,
      // 圆形
      circleArr: [],
      circleTool: null
    }
  },
  created () {
    // 配置提示弹出框
    message.config({
      duration: 2, // 持续时间
      top: `130px`, // 到页面顶部距离
      maxCount: 5 // 最大显示数, 超过限制时，最早的消息会被自动关闭
    })
  },
  mounted () {
    Provider(L)
    this.initMap()
  },
  methods: {
    // 地图（绘制）
    initMap () {
      let myCenter = new L.LatLng(22.82, 108.37)
      this.map = L.map('map', {
        center: myCenter,
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        attributionControl: false
      })
      this.map.on('mousemove', (e) => {
        let latlng = e.latlng
        this.latlng = latlng
        if (this.toolsName === 'wire') {
          this.drawWireDouble(latlng)
        } else if (this.toolsName === 'side') {
          this.drawSideDouble(latlng)
        } else if (this.toolsName === 'circle') {
          this.drawCircleDouble(latlng)
        }
      })
      // 使用天地图作为底图(地图) 可按需引入 this.mapKey是自己的天地图key值
      L.tileLayer.chinaProvider('TianDiTu.Normal.Map', { maxZoom: 18, minZoom: 5, key: this.mapKey, zIndex: 1 }).addTo(this.map)
      L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', { maxZoom: 18, minZoom: 5, key: this.mapKey, zIndex: 3 }).addTo(this.map)
      // 南宁市边界
      L.geoJSON(NnCity, {
        style: {
          weight: 2,
          opacity: 1,
          color: '#3E9254',
          dashArray: 0,
          fillOpacity: 0.1
        }
      }).addTo(this.map)
    },
    // 工具操作
    toDraw (name) {
      this.toolsName = name
      this.editorStatus(false)
      this.map.off('mouseup')
      switch (name) {
        case 'mark':
          this.map.on('mouseup', (e) => {
            let latlng = e.latlng
            this.drawMarker(latlng)
          })
          break
        case 'wire':
          this.map.on('mouseup', (e) => {
            let latlng = e.latlng
            this.isAllowDouble = false
            this.drawWire(latlng)
          })
          this.map.on('dblclick', (e) => {
            this.isAllowDouble = false
            this.clearPolyline()
            let params = {
              type: 'wire',
              name: '线条',
              desc: '',
              color: '#FF0000',
              weight: 3
            }
            this.toolsName = ''
            this.map.off('mouseup').off('dblclick')
            var polyline = L.polyline(this.latlngs, params).addTo(this.map).on('click', this.elClick)
            this.elArr.push(polyline)
            this.latlngs = []
          })
          break
        case 'side':
          this.map.on('mouseup', (e) => {
            let latlng = e.latlng
            this.isAllowDouble = false
            this.drawSide(latlng)
          })
          this.map.on('dblclick', (e) => {
            this.isAllowDouble = false
            this.clearPolygon()
            let params = {
              type: 'side',
              name: '线面',
              desc: '',
              color: '#FF0000',
              fillOpacity: 0.2,
              weight: 3
            }
            this.toolsName = ''
            this.map.off('mouseup').off('dblclick')
            var polygon = L.polygon(this.latlngs, params).addTo(this.map).on('click', this.elClick)
            this.elArr.push(polygon)
            this.latlngs = []
          })
          break
        case 'circle':
          this.map.on('mousedown', (e) => {
            this.isAllowDouble = true
            let latlng = e.latlng
            this.drawCircle(latlng)
            this.map.dragging.disable()
          })
          this.map.on('mouseup', (e) => {
            this.isAllowDouble = false
            this.toolsName = ''
            this.map.off('mousedown').off('mouseup')
            this.latlngs = []
            this.map.dragging.enable()
          })
          break
        case 'clear':
          this.toolsName = ''
          this.clearEl()
          break
        default:
          break
      }
    },
    // 自定义标注点击
    elClick (e) {
      this.editorStatus(true)
      this.elEditor = e.target
      console.log(e.target)
    },
    // 自定义绘画标注
    drawMarker (latlng) {
      let params = {
        type: 'mark',
        name: '标注',
        desc: '',
        color: '#FF0000',
        size: 32,
        delivery: true
      }
      let marker = L.marker(latlng, { type: 'mark', icon: ColorIcon(params) }).addTo(this.map).on('click', this.elClick)
      this.elArr.push(marker)
      this.toolsName = ''
      this.map.off('mouseup')
    },
    // 自定义绘画线条
    drawWire (latlng) {
      let params = {
        color: '#FF0000',
        weight: 3
      }
      let [lat, lng] = [latlng.lat, latlng.lng]
      this.latlngs.push([lat, lng])
      let polyline = L.polyline(this.latlngs, params).addTo(this.map)
      this.polylineArr.push(polyline)
    },
    // 自定义绘画线条(虚拟)
    drawWireDouble (latlng) {
      let params = {
        color: '#FF0000',
        weight: 3
      }
      let [lat, lng] = [latlng.lat, latlng.lng]
      if (this.isAllowDouble) {
        this.isAllowDouble = false
      } else {
        this.latlngs.pop()
      }
      this.latlngs.push([lat, lng])
      this.clearPolyline()
      var polyline = L.polyline(this.latlngs, params).addTo(this.map)
      this.polylineArr.push(polyline)
    },
    // 自定义绘画线面
    drawSide (latlng) {
      let params = {
        color: '#FF0000',
        weight: 3
      }
      let [lat, lng] = [latlng.lat, latlng.lng]
      this.latlngs.push([lat, lng])
      let polygon = L.polygon(this.latlngs, params).addTo(this.map)
      this.polygonArr.push(polygon)
    },
    // 自定义绘画线面(虚拟)
    drawSideDouble (latlng) {
      let params = {
        color: '#FF0000',
        weight: 3
      }
      let [lat, lng] = [latlng.lat, latlng.lng]
      if (this.isAllowDouble) {
        this.isAllowDouble = false
      } else {
        this.latlngs.pop()
      }
      this.latlngs.push([lat, lng])
      this.clearPolygon()
      var polygon = L.polygon(this.latlngs, params).addTo(this.map)
      this.polygonArr.push(polygon)
    },
    // 自定义画圆
    drawCircle (latlng) {
      // let params = {
      //   strokeColor: '#000000', // 圆边线颜色
      //   fillColor: '#FFFFFF', // 填充颜色。
      //   strokeWeight: '3px', // 圆边线线的宽度，以像素为单位
      //   strokeOpacity: 0.5, // 圆边线线的透明度，取值范围0 - 1
      //   fillOpacity: 0.5, // 填充的透明度，取值范围0 - 1
      //   strokeStyle: 'solid' // 圆边线线的样式，solid或dashed
      // }
      let [lat, lng] = [latlng.lat, latlng.lng]
      this.latlngs.push([lat, lng])
      let circle = L.circle(this.latlngs[0], { radius: 0 }).addTo(this.map)
      this.circleArr.push(circle)
    },
    // 自定义画圆（虚拟）
    drawCircleDouble (latlng) {
      if (this.latlngs.length === 0) return
      // let params = {
      //   color: '#FF0000',
      //   weight: 3
      // }
      let [lat, lng] = [latlng.lat, latlng.lng]
      if (this.isAllowDouble) {
        this.isAllowDouble = false
      } else {
        this.latlngs.pop()
      }
      this.latlngs.push([lat, lng])
      console.log(this.latlngs)
      this.clearCircle()
      let radius = this.map.distance(this.latlngs[0], this.latlngs[1])
      console.log('radius=' + radius)
      let circle = L.circle(this.latlngs[0], { radius: radius }).addTo(this.map)
      this.circleArr.push(circle)
    },
    // 编辑框状态变化
    editorStatus (status = false) {
      this.$refs.editor.editorView = status
    },
    editorChange (params) {
      switch (params.type) {
        case 'mark':
          this.elEditor.setIcon(ColorIcon(params))
          break
        case 'wire':
          this.elEditor.setStyle(params)
          break
        case 'side':
          console.log('side')
          console.log(params)
          this.elEditor.setStyle(params)
          break
        default:
          break
      }
    },
    editorDelete () {
      this.map.removeLayer(this.elEditor)
    },
    // 清空元素
    clearEl () {
      this.elTool = L.layerGroup(this.elArr).addTo(this.map)
      this.elTool.clearLayers()
      this.elArr = []
    },
    // 清空虚拟路径（线条）
    clearPolyline () {
      this.polylineTool = L.layerGroup(this.polylineArr).addTo(this.map)
      this.polylineTool.clearLayers()
      this.polylineArr = []
    },
    // 清空虚拟路径（线面）
    clearPolygon () {
      this.polygonTool = L.layerGroup(this.polygonArr).addTo(this.map)
      this.polygonTool.clearLayers()
      this.polygonArr = []
    },
    // 清空虚拟路径（圆形）
    clearCircle () {
      this.circleTool = L.layerGroup(this.circleArr).addTo(this.map)
      this.circleTool.clearLayers()
      this.circleArr = []
    }
  },
  destroyed () {
    // 恢复默认配置提示弹出框
    message.config({
      duration: 2, // 持续时间
      top: `10px`, // 到页面顶部距离
      maxCount: 5 // 最大显示数, 超过限制时，最早的消息会被自动关闭
    })
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  width: 100%;
  height: 100%;
  #map {
    width: 100vw;
    height: 100vh;
  }
  .coords {
    position: absolute;
    right: 10px;
    bottom: 0;
  }
  .tools {
    position: absolute;
    right: 10px;
    top: 100px;
  }
  .editors {
    position: absolute;
    right: 70px;
    top: 100px;
  }
  .btn-color {
    position: absolute;
    right: 300px;
    top: 8px;
    z-index: 999;
  }
}
/deep/ .ant-message-notice {
  padding-top: 50px;
}
/deep/ .leaflet-popup {
  bottom: -13px !important;
  left: -67px !important;
}
</style>
