<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'
import Provider from '@/components/chinatmsproviders.js'
import shandongJson from '@/json/shandong.json'
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
      // let that = this
      // let T = window.T
      // // 初始化地图对象
      // this.map = new T.Map('map')
      // // 设置显示地图的中心点和级别
      // this.map.centerAndZoom(new T.LngLat(117, 36.65), this.zoom)
      let myCenter = new L.LatLng(36.65, 117.23) // 设置地图中心
      let map = L.map('map', {
        center: myCenter,
        zoom: this.zoom
      })
      L.tileLayer.chinaProvider('TianDiTu.Normal.Map', { maxZoom: 18, minZoom: 5, key: this.mapKey }).addTo(map)
      L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', { maxZoom: 18, minZoom: 5, key: this.mapKey }).addTo(map) // 设置地图图层，可以按需引入；this.mapKey是自己的天地图key值
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
    }
  }
}
</script>

<style lang='scss' scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
