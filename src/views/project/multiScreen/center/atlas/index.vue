<template>
  <div style="height: 100%; width: 100%;"
       ref="chart">
  </div>
</template>

<script>
import NnCity from '@/components/map/basic/NnCity.json'
let Echarts = require('echarts/lib/echarts')
export default {
  name: 'Index',
  props: {
    cityValue: String
  },
  watch: {
    cityValue: {
      handler (newValue) {
        this.option.series[0].data = this.option.series[0].data.map(item => {
          return {
            ...item,
            selected: item.value === newValue
          }
        })
        this.$nextTick(() => {
          this.chart.setOption(this.option, true)
          this.chart.resize()
        })
      },
      immediate: true
    }
  },
  data () {
    return {
      chart: null,
      option: {
        grid: {
          top: 35,
          left: 55,
          right: 45,
          width: 'auto',
          height: 'auto'
        },
        tooltip: {
          show: false,
          trigger: 'item',
          formatter: '{b}'
        },
        label: {
          show: true,
          fontSize: '12',
          color: '#000',
          borderColor: 'transparent',
          shadowColor: 'transparent',
          textBorderColor: 'transparent'
        },
        textStyle: {
          color: '#000'
        },
        series: [
          {
            name: '南宁市',
            type: 'map',
            map: 'LS',
            roam: true,
            zoom: 2.5,
            scaleLimit: {
              min: 1,
              max: 3
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(62,146,84,0.4)', // 边界颜色
                areaColor: 'rgba(26,43,84,0.4)', // 区域颜色
                borderWidth: 2,
                shadowBlur: 5
              },
              emphasis: {
                show: false, // 鼠标移入样式
                areaColor: 'rgba(26,43,84,1)',
                borderColor: 'rgba(62,146,84,1)',
                borderShadow: 'rgba(62,146,84,.5)',
                shadowBlur: 10
              }
            },
            label: {
              // 文字样式
              normal: {
                show: true,
                fontSize: 12,
                color: '#85694F'
              },
              emphasis: {
                color: '#fff',
                fontWeight: 'normal'
              }
            },
            select: {
              label: {
                show: true,
                color: '#fff'
              },
              itemStyle: {
                areaColor: 'rgba(26,43,84,1)',
                borderColor: 'rgba(62,146,84,1)',
                borderShadow: 'rgba(62,146,84,.5)',
                shadowBlur: 10
              }
            },
            data: [
              { name: '马山县', value: '450124' },
              { name: '隆安县', value: '450123' },
              { name: '武鸣县', value: '450100' },
              { name: '上林县', value: '450125' },
              { name: '西乡塘区', value: '450107' },
              { name: '兴宁区', value: '450102' },
              { name: '宾阳县', value: '450126' },
              { name: '江南区', value: '450105' },
              { name: '青秀区', value: '450103' },
              { name: '横州市', value: '450127' },
              { name: '邕宁区', value: '450109' },
              { name: '良庆区', value: '450108' }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', () => {
      this.chart.resize()
    })
  },
  methods: {
    init () {
      const that = this
      that.chart = Echarts.init(that.$refs.chart)
      Echarts.registerMap('LS', NnCity)
      that.chart.setOption(this.option)
      that.chart.on('click', function (params) {
        if (that.cityValue === params.value.toString()) {
          that.chart.setOption(that.option, true)
        }
        that.$emit('setCity', params.value.toString())
      })
      setTimeout(() => {
        that.chart.resize()
      }, 20)
    }
  }
}
</script>

<style scoped>
</style>
