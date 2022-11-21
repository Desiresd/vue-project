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
import NnCity from '@/components/map/basic/Nning.json'
import Provider from '@/components/map/basic/chinatmsproviders.js'
import { ColorIcon, LucencyIcon } from '@/components/map/basic/markerIcon.js'

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
      // 虚拟元素
      doubleArr: [],
      doubleTool: null,
      doubleIndex: 0
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
        } else if (this.toolsName === 'rectangle') {
          this.drawRectangleDouble(latlng)
        } else if (this.toolsName === 'ruler') {
          this.drawRulerDouble(latlng)
        } else if (this.toolsName === 'area') {
          this.drawAreaDouble(latlng)
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
            this.clearDouble()
            let params = {
              type: 'wire',
              name: '线条',
              desc: '',
              color: '#FF0000',
              weight: 3
            }
            this.toolsName = ''
            this.map.off('mouseup').off('dblclick')
            let polyline = L.polyline(this.latlngs, params).addTo(this.map).on('click', this.elClick)
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
            this.clearDouble()
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
            let polygon = L.polygon(this.latlngs, params).addTo(this.map).on('click', this.elClick)
            this.elArr.push(polygon)
            this.latlngs = []
          })
          break
        case 'circle':
          this.map.on('mousedown', (e) => {
            if (this.doubleIndex === 0) {
              this.isAllowDouble = true
              let latlng = e.latlng
              this.drawCircle(latlng)
              this.map.dragging.disable()
            }
            this.doubleIndex++
          })
          this.map.on('mouseup', (e) => {
            if (this.doubleIndex === 2) {
              this.doubleIndex = 0
              this.isAllowDouble = false
              this.toolsName = ''
              this.map.off('mousedown').off('mouseup')
              this.clearDouble()
              let radius = this.map.distance(this.latlngs[0], this.latlngs[1])
              let params = {
                type: 'circle',
                name: '圆形',
                desc: '',
                color: '#FF0000',
                fillOpacity: 0.2,
                weight: 3,
                radius: radius
              }
              let circle = L.circle(this.latlngs[0], params).addTo(this.map).on('click', this.elClick)
              this.elArr.push(circle)
              this.latlngs = []
              this.map.dragging.enable()
            }
          })
          break
        case 'rectangle':
          this.map.on('mousedown', (e) => {
            if (this.doubleIndex === 0) {
              this.isAllowDouble = true
              let latlng = e.latlng
              this.drawRectangle(latlng)
              this.map.dragging.disable()
            }
            this.doubleIndex++
          })
          this.map.on('mouseup', (e) => {
            if (this.doubleIndex === 2) {
              this.doubleIndex = 0
              this.isAllowDouble = false
              this.toolsName = ''
              this.map.off('mousedown').off('mouseup')
              this.clearDouble()
              let params = {
                type: 'rectangle',
                name: '矩形',
                desc: '',
                color: '#FF0000',
                fillOpacity: 0.2,
                weight: 3
              }
              let rectangle = L.rectangle(this.latlngs, params).addTo(this.map).on('click', this.elClick)
              this.elArr.push(rectangle)
              this.latlngs = []
              this.map.dragging.enable()
            }
          })
          break
        case 'ruler':
          this.map.on('mouseup', (e) => {
            let latlng = e.latlng
            this.isAllowDouble = false
            this.drawRuler(latlng)
          })
          this.map.on('dblclick', (e) => {
            this.isAllowDouble = false
            this.clearDouble()
            let params = {
              type: 'wire',
              name: '测距',
              desc: '',
              color: '#FF0000',
              weight: 3
            }
            this.toolsName = ''
            this.map.off('mouseup').off('dblclick')
            let ruler = this.CalRuler(this.latlngs)
            let polyline = L.polyline(this.latlngs, params).addTo(this.map).on('click', this.elClick)
            let marker = L.marker(e.latlng, { icon: LucencyIcon({ size: 0, color: '#FF0000', name: ruler }) }).addTo(this.map)
            this.elArr.push(polyline)
            this.elArr.push(marker)
            this.latlngs = []
          })
          break
        case 'area':
          this.map.on('mouseup', (e) => {
            let latlng = e.latlng
            this.isAllowDouble = false
            this.drawArea(latlng)
          })
          this.map.on('dblclick', (e) => {
            this.isAllowDouble = false
            this.clearDouble()
            let params = {
              type: 'side',
              name: '测面',
              desc: '',
              color: '#FF0000',
              fillOpacity: 0.2,
              weight: 3
            }
            this.toolsName = ''
            this.map.off('mouseup').off('dblclick')
            let polygon = L.polygon(this.latlngs, params).addTo(this.map)
            let area = this.CalArea(this.latlngs)
            let marker = L.marker(e.latlng, { icon: LucencyIcon({ size: 0, color: '#FF0000', name: `${area}平方公里` }) }).addTo(this.map)
            this.elArr.push(polygon)
            this.elArr.push(marker)
            this.latlngs = []
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
      this.doubleArr.push(polyline)
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
      this.clearDouble()
      let polyline = L.polyline(this.latlngs, params).addTo(this.map)
      this.doubleArr.push(polyline)
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
      this.doubleArr.push(polygon)
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
      this.clearDouble()
      let polygon = L.polygon(this.latlngs, params).addTo(this.map)
      this.doubleArr.push(polygon)
    },
    // 自定义画圆
    drawCircle (latlng) {
      let [lat, lng] = [latlng.lat, latlng.lng]
      this.latlngs.push([lat, lng])
      let circle = L.circle(this.latlngs[0], { radius: 0 }).addTo(this.map)
      this.doubleArr.push(circle)
    },
    // 自定义画圆（虚拟）
    drawCircleDouble (latlng) {
      if (this.latlngs.length === 0) return
      let [lat, lng] = [latlng.lat, latlng.lng]
      if (this.isAllowDouble) {
        this.isAllowDouble = false
      } else {
        this.latlngs.pop()
      }
      this.latlngs.push([lat, lng])
      this.clearDouble()
      let radius = this.map.distance(this.latlngs[0], this.latlngs[1])
      let params = {
        color: '#FF0000',
        weight: 3,
        radius: radius
      }
      let circle = L.circle(this.latlngs[0], params).addTo(this.map)
      this.doubleArr.push(circle)
    },
    // 自定义画矩形
    drawRectangle (latlng) {
      let [lat, lng] = [latlng.lat, latlng.lng]
      this.latlngs.push([lat, lng])
    },
    // 自定义画矩形（虚拟）
    drawRectangleDouble (latlng) {
      if (this.latlngs.length === 0) return
      let [lat, lng] = [latlng.lat, latlng.lng]
      if (this.isAllowDouble) {
        this.isAllowDouble = false
      } else {
        this.latlngs.pop()
      }
      this.latlngs.push([lat, lng])
      this.clearDouble()
      let params = {
        color: '#FF0000',
        weight: 3
      }
      let rectangle = L.rectangle(this.latlngs, params).addTo(this.map)
      this.doubleArr.push(rectangle)
    },
    // 自定义绘画线条
    drawRuler (latlng) {
      let params = {
        color: '#FF0000',
        weight: 3
      }
      let [lat, lng] = [latlng.lat, latlng.lng]
      this.latlngs.push([lat, lng])
      let polyline = L.polyline(this.latlngs, params).addTo(this.map)
      this.doubleArr.push(polyline)
    },
    // 自定义绘画线条(虚拟)
    drawRulerDouble (latlng) {
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
      this.clearDouble()
      let polyline = L.polyline(this.latlngs, params).addTo(this.map)
      this.doubleArr.push(polyline)
    },
    // 自定义画测面
    drawArea (latlng) {
      let params = {
        color: '#FF0000',
        weight: 3
      }
      let [lat, lng] = [latlng.lat, latlng.lng]
      this.latlngs.push([lat, lng])
      let polygon = L.polygon(this.latlngs, params).addTo(this.map)
      this.doubleArr.push(polygon)
    },
    // 自定义绘画测面(虚拟)
    drawAreaDouble (latlng) {
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
      this.clearDouble()
      let polygon = L.polygon(this.latlngs, params).addTo(this.map)
      this.doubleArr.push(polygon)
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
        case 'side':
        case 'circle':
        case 'rectangle':
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
    // 清空虚拟路径
    clearDouble () {
      this.doubleTool = L.layerGroup(this.doubleArr).addTo(this.map)
      this.doubleTool.clearLayers()
      this.doubleArr = []
    },
    // 计算测距距离
    CalRuler (latlng) {
      latlng = [...new Set(latlng)]
      let distance = 0
      let isMeter = true
      for (let i = 0; i < latlng.length - 1; i++) {
        let start = L.latLng(latlng[i])
        let end = L.latLng(latlng[i + 1])
        distance = distance + this.map.distance(start, end)
      }
      if (distance >= 1000) {
        isMeter = false
        distance = distance / 1000
      }
      return '' + distance.toFixed(2) + (isMeter ? '米' : '公里')
    },
    // 计算测面面积
    CalArea (latlng) {
      latlng = [...new Set(latlng)]
      let pointsCount = latlng.length
      let area = 0.0
      let d2r = Math.PI / 180
      let p1
      let p2
      if (pointsCount > 2) {
        for (let i = 0; i < pointsCount; i++) {
          p1 = latlng[i]
          p2 = latlng[(i + 1) % pointsCount]
          area += ((p2[1] - p1[1]) * d2r) *
            (2 + Math.sin(p1[0] * d2r) + Math.sin(p2[0] * d2r))
        }
        area = area * 6378137.0 * 6378137.0 / 2.0
      }
      return Math.abs(area).toFixed(2)
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
    left: 10px;
    bottom: 0;
  }
  .tools {
    position: absolute;
    left: 10px;
    top: 100px;
  }
  .editors {
    position: absolute;
    left: 70px;
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
