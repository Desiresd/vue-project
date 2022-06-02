import L from 'leaflet'
import markerIcon from '@/assets/map/marker.png' // 引入leaflet默认图标

// 添加标记(默认)
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [32, 32], //  图标的大小    【值1，值2】 为具体你自定义图标的尺寸，比如我图标尺寸是32×52，表示该图标：宽度32像素，高度：52像素，那么值1:就是32，值2：就是52
  shadowSize: [32, 32], //  影子的大小    【值1，值2】 为具体你自定义阴影图标的尺寸，比如我图标尺寸是41×41，表示该图标：宽度41像素，高度：41像素，那么值1:就是41，值2：就是41
  iconAnchor: [32, 32], //  图标将对应标记点的位置 这个是重点， 【值1，值2】，值1：为图标坐标第一个值(即32)的一半，值2：为图标坐标第二个值(即52)
  shadowAnchor: [4, 62], // 相同的影子
  popupAnchor: [1, -24] // 该点是相对于iconAnchor弹出信息的位置  这个是我手动调出来的，文档默认原始值是[-1，-76]，我是去一半值，取一半值调出来的
})

const RectangleIcon = value => {
  let htmlStr = `<span>${value}</span>`
  return L.divIcon({
    html: htmlStr,
    iconSize: [50, 25],
    className: 'map-rectangles'
  })
}

const CircleIcon = value => {
  let htmlStr = `<div>${value}</div>`
  return L.divIcon({
    html: htmlStr,
    iconSize: [35, 35],
    className: 'map-circle'
  })
}

export { DefaultIcon, RectangleIcon, CircleIcon }
