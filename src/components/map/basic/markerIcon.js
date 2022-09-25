import L from 'leaflet'
import markerIcon from '@/assets/map/marker.png' // 引入leaflet默认图标
import markerOn from '@/assets/map/markerOn.png'

// 添加标记(默认)
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [32, 32], //  图标的大小    【值1，值2】 为具体你自定义图标的尺寸，比如我图标尺寸是32×52，表示该图标：宽度32像素，高度：52像素，那么值1:就是32，值2：就是52
  shadowSize: [32, 32], //  影子的大小    【值1，值2】 为具体你自定义阴影图标的尺寸，比如我图标尺寸是41×41，表示该图标：宽度41像素，高度：41像素，那么值1:就是41，值2：就是41
  iconAnchor: [16, 26], //  图标将对应标记点的位置 这个是重点， 【值1，值2】，值1：为图标坐标第一个值(即32)的一半，值2：为图标坐标第二个值(即32)
  shadowAnchor: [4, 62], // 相同的影子
  popupAnchor: [-1, -24] // 该点是相对于iconAnchor弹出信息的位置  这个是我手动调出来的，文档默认原始值是[-1，-76]，我是去一半值，取一半值调出来的
})

// 添加标记(默认)
const SelectIcon = L.icon({
  iconUrl: markerOn,
  iconSize: [32, 32],
  shadowSize: [32, 32],
  iconAnchor: [16, 26],
  shadowAnchor: [4, 62],
  popupAnchor: [-1, -24]
})

// 自定义颜色标记
const ColorIcon = (params) => {
  let htmlStr = `<div class="map-color" style="width: ${params.size}px;height: ${params.size}px;">
    <svg t="1663679240784"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3046"
      width="${params.size}"
      height="${params.size}"
      fill=${params.color}>
      <path d="M512.434393 66.861804c-0.054235 0-0.109494 0-0.163729 0l-0.541329 0c-0.056282 0-0.109494 0-0.163729 0-191.363376 0.434905-346.930477 156.1115-346.930477 347.637582 0 188.810227 119.553886 338.510714 326.018192 532.535709 0.325411 0.434905 0.434905 0.977257 0.814552 1.302669 3.042289 3.260254 6.735401 5.432733 10.646478 6.843872 0.923022 0.325411 1.954515 0.325411 2.933819 0.543376 2.226714 0.542352 4.399193 1.412163 6.681166 1.412163 0.107447 0 0.161682-0.10847 0.270153-0.10847 0.109494 0 0.163729 0.10847 0.272199 0.10847 2.281973 0 4.455475-0.86981 6.681166-1.412163 0.977257-0.217964 2.010797-0.217964 2.933819-0.543376 3.90903-1.412163 7.605212-3.584642 10.646478-6.843872 0.379647-0.325411 0.488117-0.868787 0.813528-1.302669 206.464305-194.024995 326.019215-343.725482 326.019215-532.535709C859.364871 222.973304 703.796746 67.296709 512.434393 66.861804zM511.998465 596.247776c-101.193727 0-183.541223-82.347496-183.541223-183.596482 0-101.247962 82.347496-183.486988 183.541223-183.486988 101.195773 0 183.541223 82.238003 183.541223 183.486988C695.539688 513.901303 613.194238 596.247776 511.998465 596.247776z" p-id="3047">
      </path>
    </svg>
    <label class='color-text' style='display: ${params.delivery ? 'block' : 'none'};color: ${params.color};border: 1px solid ${params.color};'>${params.name}</label>
  </div> `
  return L.divIcon({
    html: htmlStr,
    name: params.name,
    desc: params.desc,
    color: params.color,
    size: params.size,
    delivery: params.delivery,
    className: 'map-color',
    iconAnchor: [params.size / 2, params.size / 2 + 10]
  })
}

const RectangleIcon = value => {
  let htmlStr = `<span>${value}</span>`
  return L.divIcon({
    html: htmlStr,
    iconSize: [50, 25],
    className: 'map-rectangles'
  })
}

const CircleIcon = value => {
  let htmlStr = `<span>${value}</span>`
  return L.divIcon({
    html: htmlStr,
    iconSize: [35, 35],
    className: 'map-circle'
  })
}

export { DefaultIcon, SelectIcon, ColorIcon, RectangleIcon, CircleIcon }
