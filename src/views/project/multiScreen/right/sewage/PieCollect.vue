<template>
  <div style="height: 100%; width: 100%;"
       ref="chart">
  </div>
</template>

<script>
let Echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
export default {
  name: 'PieCollect',
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
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        label: {
          show: true,
          fontSize: '12',
          color: '#ffffff',
          borderColor: 'transparent',
          shadowColor: 'transparent',
          textBorderColor: 'transparent'
        },
        series: [
          {
            name: '污水厂',
            type: 'pie',
            radius: [45, 60],
            center: ['50%', '50%'],
            data: [
              { value: 40, name: '化学需氧量审核排放量' },
              { value: 38, name: '总磷' },
              { value: 32, name: '总氮' },
              { value: 30, name: '化学需氧量项目值' },
              { value: 28, name: '废水排水量' },
              { value: 26, name: '化学需氧量有效小时个数' },
              { value: 22, name: '氨氮20%' }
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
