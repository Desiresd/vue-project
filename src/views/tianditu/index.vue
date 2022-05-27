<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'
import Provider from '@/components/map/chinatmsproviders.js'
import shandongJson from '@/json/shandong.json'
import { DefaultIcon, RectangleIcon } from '@/components/map/markerIcon.js'
import { DefaultConfig, RectangleConfig } from '@/components/map/markerTip.js'
require('leaflet/dist/leaflet.css')

export default {
  name: 'index',
  data () {
    return {
      map: null,
      mapKey: '947bc9088c6cf8b9843825313f4ac2f2',
      zoom: 8
    }
  },
  mounted () {
    Provider(L)
    this.initMap()
  },
  methods: {
    initMap () {
      // 创建一个地图
      let myCenter = new L.LatLng(36.65, 117.23) // 设置地图中心
      let map = L.map('map', {
        center: myCenter,
        zoom: this.zoom
      })
      // 使用天地图作为底图
      L.tileLayer.chinaProvider('TianDiTu.Normal.Map', { maxZoom: 18, minZoom: 5, key: this.mapKey }).addTo(map)
      L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', { maxZoom: 18, minZoom: 5, key: this.mapKey }).addTo(map) // 设置地图图层，可以按需引入；this.mapKey是自己的天地图key值
      // 添加山东省行政边界填充颜色
      L.geoJson(shandongJson, {
        style: {
          weight: 1,
          opacity: 1,
          color: 'red',
          dashArray: 0,
          fillOpacity: 0.2,
          fillColor: '#ffffff'
        }
      }).addTo(map)
      // 以城市为区域添加覆盖物（标记）
      let markers = [
        {
          lngLat: [36.65, 117.23],
          marker: '测试标记1'
        },
        {
          lngLat: [35.65, 116.23],
          marker: '测试标记2'
        }
      ]
      for (let item in markers) {
        // 添加标记
        let marker = L.marker(markers[item]['lngLat'], { icon: DefaultIcon }).addTo(map)
        // 添加标记提示
        marker.bindTooltip(markers[item]['marker'], DefaultConfig)
      }
      // 添加标记(自定义)
      let markers1 = [
        {
          lngLat: [37.55, 117.23],
          marker: '66'
        },
        {
          lngLat: [35.65, 118.23],
          marker: '88'
        }
      ]
      for (let item in markers1) {
        // 添加标记
        let marker = L.marker(markers1[item]['lngLat'], { icon: RectangleIcon(markers1[item]['marker']) }).addTo(map)
        marker.bindTooltip(markers1[item]['marker'], RectangleConfig)
      }
    }
  }
}
</script>

<style lang='scss'>
#map {
  width: 100vw;
  height: 100vh;
}

.map-rectangles {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4c6350;
  color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>
