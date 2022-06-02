<template>
  <div class="map">
    <div id="map"></div>
    <locate-layer :value="locateData"
                  @select="selectSpan" />
  </div>
</template>

<script>
import L from 'leaflet'
import Provider from '@/components/map/chinatmsproviders.js'
import liaochengJson from '@/components/map/liaocheng.json'
import { DefaultIcon, CircleIcon } from '@/components/map/markerIcon.js'
// import { DefaultConfig, RectangleConfig } from '@/components/map/markerTip.js'

import LocateLayer from './LocateLayer'
require('leaflet/dist/leaflet.css')
require('@/components/map/markerIcon.css')

export default {
  name: 'Index',
  components: {
    LocateLayer
  },
  data () {
    return {
      map: null,
      mapKey: '947bc9088c6cf8b9843825313f4ac2f2',
      zoom: 9,
      minZoom: 9,
      maxZoom: 18,
      markersGroup: null,
      locateData: []
    }
  },
  mounted () {
    Provider(L)
    this.initMap()
  },
  methods: {
    initMap () {
      // 创建一个地图
      let myCenter = new L.LatLng(36.43452, 115.98847) // 设置地图中心
      this.map = L.map('map', {
        center: myCenter,
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom
      })
      // 使用天地图作为底图
      L.tileLayer.chinaProvider('TianDiTu.Normal.Map', { maxZoom: 18, minZoom: 5, key: this.mapKey }).addTo(this.map)
      L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', { maxZoom: 18, minZoom: 5, key: this.mapKey }).addTo(this.map) // 设置地图图层，可以按需引入；this.mapKey是自己的天地图key值
      // 添加山东省行政边界填充颜色
      L.geoJson(liaochengJson, {
        style: {
          weight: 2,
          opacity: 1,
          color: 'red',
          dashArray: 0,
          fillOpacity: 0.2,
          fillColor: '#ffffff'
        }
      }).addTo(this.map)
      // 监听鼠标缩放获取地图级别
      this.getMarker(this.zoom)
      this.map.on('zoomend', e => {
        let zoom = e.target.getZoom()
        this.getMarker(zoom)
      })
    },
    // 根据zoom的级别获取对应的标记
    getMarker (zoom) {
      // 存在标记情况时清除所有标记
      if (this.markersGroup != null) {
        this.markersGroup.clearLayers()
      }
      let markers1 = [
        {
          lngLat: [36.43452, 115.98847],
          marker: zoom,
          icon: 'Default',
          name: '聊城市中心',
          total: 1000,
          zoom: 9
        },
        {
          lngLat: [36.48335, 115.44263],
          marker: zoom,
          icon: 'Default',
          name: '冠县',
          total: 2000,
          zoom: 9
        },
        {
          lngLat: [36.12477509667906, 115.80792541015626],
          marker: zoom,
          icon: 'Circle',
          name: '阳谷县',
          total: 3000,
          zoom: 9
        },
        {
          lngLat: [36.237837561878145, 115.67334289062501],
          marker: zoom,
          icon: 'Circle',
          name: '莘县',
          total: 4000,
          zoom: 9
        },
        {
          lngLat: [36.84663690417282, 116.23016921875002],
          marker: zoom,
          icon: 'Circle',
          name: '高唐县',
          total: 5000,
          zoom: 9
        },
        {
          lngLat: [36.83344816009291, 115.72479812500002],
          marker: zoom,
          icon: 'Circle',
          name: '临清市',
          total: 6000,
          zoom: 9
        }
      ]
      let markers2 = [
        {
          lngLat: [36.43452, 115.98847],
          marker: zoom,
          icon: 'Default',
          name: '聊城市中心',
          total: 7000,
          zoom: 10
        },
        {
          lngLat: [36.436729693005404, 115.62592117187502],
          marker: zoom,
          icon: 'Default',
          name: '桑阿镇',
          total: 8000,
          zoom: 10
        },
        {
          lngLat: [36.498575549375566, 115.5311640917969],
          marker: zoom,
          icon: 'Circle',
          name: '烟庄乡',
          total: 9000,
          zoom: 10
        },
        {
          lngLat: [36.724554271680994, 115.70557205078127],
          marker: zoom,
          icon: 'Circle',
          name: '尚店镇',
          total: 10000,
          zoom: 10
        }
      ]
      let markers3 = [
        {
          lngLat: [36.43452, 115.98847],
          marker: zoom,
          icon: 'Default',
          name: '聊城市中心',
          total: 11000,
          zoom: 11
        },
        {
          lngLat: [36.505198964351976, 115.98366348144533],
          marker: zoom,
          icon: 'Default',
          name: '聊城东站',
          total: 12000,
          zoom: 11
        },
        {
          lngLat: [36.481462438363565, 115.59364883300783],
          marker: zoom,
          icon: 'Default',
          name: '辛庄',
          total: 13000,
          zoom: 11
        },
        {
          lngLat: [36.66674476272188, 115.71106521484377],
          marker: zoom,
          icon: 'Default',
          name: '郭庄村',
          total: 14000,
          zoom: 11
        },
        {
          lngLat: [36.65517764534131, 116.05095474121096],
          marker: zoom,
          icon: 'Circle',
          name: '肖庄镇',
          total: 15000,
          zoom: 11
        },
        {
          lngLat: [36.838943746532536, 115.86899368164065],
          marker: zoom,
          icon: 'Circle',
          name: '老赵庄镇',
          total: 16000,
          zoom: 11
        }
      ]
      let markers4 = [
        {
          lngLat: [36.43452, 115.98847],
          marker: zoom,
          icon: 'Default',
          name: '聊城市中心',
          total: 17000,
          zoom: 12
        },
        {
          lngLat: [36.43783451591615, 115.92323867675783],
          marker: zoom,
          icon: 'Default',
          name: '八东村',
          total: 18000,
          zoom: 12
        },
        {
          lngLat: [36.479254019619844, 115.90984908935549],
          marker: zoom,
          icon: 'Default',
          name: '付庄',
          total: 19000,
          zoom: 12
        },
        {
          lngLat: [36.497195599939275, 115.89062301513674],
          marker: zoom,
          icon: 'Circle',
          name: '老吕庄村',
          total: 20000,
          zoom: 12
        },
        {
          lngLat: [36.53858338432509, 115.92735854980471],
          marker: zoom,
          icon: 'Circle',
          name: '周店村',
          total: 21000,
          zoom: 12
        },
        {
          lngLat: [36.55016799659041, 116.07155410644533],
          marker: zoom,
          icon: 'Circle',
          name: '乌庄村',
          total: 22000,
          zoom: 12
        }
      ]
      let markers5 = [
        {
          lngLat: [36.43452, 115.98847],
          marker: zoom,
          icon: 'Default',
          name: '聊城市中心',
          total: 23000,
          zoom: 13
        },
        {
          lngLat: [36.47331858237398, 115.9325083911133],
          marker: zoom,
          icon: 'Default',
          name: '郭庄',
          total: 24000,
          zoom: 13
        },
        {
          lngLat: [36.486155119204476, 115.9186038195801],
          marker: zoom,
          icon: 'Circle',
          name: '武镇',
          total: 25000,
          zoom: 13
        },
        {
          lngLat: [36.43617727565312, 115.90126602050783],
          marker: zoom,
          icon: 'Circle',
          name: '十二里营村',
          total: 26000,
          zoom: 13
        }
      ]
      let markers6 = [
        {
          lngLat: [36.43452, 115.98847],
          marker: zoom,
          icon: 'Default',
          name: '聊城市中心',
          total: 27000,
          zoom: 14
        },
        {
          lngLat: [36.431412512774834, 115.96246330139162],
          marker: zoom,
          icon: 'Default',
          name: '金凤广场',
          total: 28000,
          zoom: 14
        },
        {
          lngLat: [36.44660348986534, 115.9423789202881],
          marker: zoom,
          icon: 'Default',
          name: '西湖馨苑',
          total: 29000,
          zoom: 14
        },
        {
          lngLat: [36.46814195788633, 115.95104781982424],
          marker: zoom,
          icon: 'Default',
          name: '金城小区',
          total: 30000,
          zoom: 14
        },
        {
          lngLat: [36.47863289050987, 115.9859809100342],
          marker: zoom,
          icon: 'Default',
          name: '聊城万达广场',
          total: 31000,
          zoom: 14
        },
        {
          lngLat: [36.467520739716704, 116.00743858215334],
          marker: zoom,
          icon: 'Default',
          name: '亚太怡景花园',
          total: 32000,
          zoom: 14
        },
        {
          lngLat: [36.45716637068455, 116.00040046569826],
          marker: zoom,
          icon: 'Circle',
          name: '聊城人才大厦',
          total: 33000,
          zoom: 14
        },
        {
          lngLat: [36.44170127224569, 115.99739639160158],
          marker: zoom,
          icon: 'Circle',
          name: '聊城市中医医院',
          total: 34000,
          zoom: 14
        }
      ]
      if (this.locateData && this.locateData.length === 0) {
        let list = [...markers1, ...markers2, ...markers3, ...markers4, ...markers5, ...markers6]
        this.locateData = list
      }
      let markers = zoom === 9 ? JSON.parse(JSON.stringify(markers1)) : zoom === 10 ? JSON.parse(JSON.stringify(markers2)) : zoom === 11 ? JSON.parse(JSON.stringify(markers3)) : zoom === 12 ? JSON.parse(JSON.stringify(markers4)) : zoom === 13 ? JSON.parse(JSON.stringify(markers5)) : JSON.parse(JSON.stringify(markers6))
      let marker = []
      for (let item in markers) {
        marker.push(new L.Marker(markers[item]['lngLat'], { icon: markers[item]['icon'] === 'Circle' ? CircleIcon(markers[item]['marker']) : DefaultIcon }))
        // 添加标记
        // let marker = L.marker(markers[item]['lngLat'], { icon: markers[item]['icon'] === 'Rectangle' ? RectangleIcon(markers[item]['marker']) : DefaultIcon }).addTo(this.map)
        // 添加标记提示
        // marker.bindTooltip(markers[item]['marker'], markers[item]['icon'] === 'Rectangle' ? RectangleConfig : DefaultConfig)
      }
      this.markersGroup = L.layerGroup(marker)
      this.map.addLayer(this.markersGroup)
    },
    // 选中右侧图层
    selectSpan (item) {
      let center = L.latLng(item.lngLat[0], item.lngLat[1])
      this.map.setView(center, item.zoom)
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  width: 100%;
  height: 100%;
}

#map {
  width: 100vw;
  height: 100vh;
}
</style>
