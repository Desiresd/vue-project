<template>
  <div style="height: 100%; width: 100%;"
       ref="chart">
  </div>
</template>

<script>
let Echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/radar')
export default {
  name: 'RadarCollect',
  data () {
    return {
      chart: null
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
      // 2.初始化
      this.chart = Echarts.init(this.$refs.chart)
      // 3.配置数据
      let option = {
        grid: {
          x: 20,
          y: 20,
          x2: 20,
          y2: 30
        },
        tooltip: {
          trigger: 'axis'
        },
        radar: {
          indicator: [
            { name: 'PH', max: 6500 },
            { name: '化学需氧量排放审核', max: 16000 },
            { name: '烟气湿度', max: 30000 },
            { name: '化学氧量项目值', max: 38000 },
            { name: '废气排放量', max: 52000 },
            { name: '氨氮', max: 25000 }
          ],
          radius: 60,
          center: ['50%', '50%'],
          splitArea: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#f5f5f5',
              opacity: 0.2
            }
          },
          axisName: {
            show: true,
            formatter: (text) => {
              text = text.replace(/\S{4}/g, function (match) {
                return match + '\n'
              })
              return text
            }
          }
        },
        series: [
          {
            name: '废水/废气',
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '废水'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '废气'
              }
            ]
          }
        ]
      }
      // 4.传入数据
      this.chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
