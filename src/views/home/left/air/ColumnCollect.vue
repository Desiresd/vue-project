<template>
  <div style="width: 100%; height: 100%"
       ref="chart">
  </div>
</template>

<script>
let Echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar') // 按需引入 bar = 柱状图
export default {
  name: 'ColumnCollect',
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
          x: 50,
          y: 30,
          x2: 10,
          y2: 30
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          right: '10%',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 12
          },
          itemWidth: 20,
          itemHeight: 6,
          data: ['最大值', '最小值']
        },
        xAxis: {
          type: 'category',
          data: ['AQI', 'so2', 'O3', 'NO2', 'PM25', 'CO', 'o3_8h'],
          axisPointer: {
            type: 'shadow'
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            name: '最大值',
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: '15%',
            barGap: '80%',
            tooltip: {
              valueFormatter: function (value) {
                return value
              }
            },
            itemStyle: {
              normal: {
                color: '#BD9E57'
              }
            }
          },
          {
            type: 'bar',
            name: '最小值',
            data: [110, 300, 120, 180, 20, 10, 130],
            barWidth: '15%',
            barGap: '80%',
            tooltip: {
              valueFormatter: function (value) {
                return value
              }
            },
            itemStyle: {
              normal: {
                color: '#266694'
              }
            }
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
