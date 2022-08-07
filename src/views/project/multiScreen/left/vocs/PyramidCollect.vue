<template>
  <div style="width: 100%; height: 100%"
       ref="pyramid">
  </div>
</template>

<script>
let Echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/funnel')
export default {
  name: 'PyramidCollect',
  data () {
    return {
      pyramid: null
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', () => {
      this.pyramid.resize()
    })
  },
  methods: {
    init () {
      // 2.初始化
      this.pyramid = Echarts.init(this.$refs.pyramid)
      // 3.配置数据
      let option = {
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {b}'
        },
        series: [
          {
            name: 'VOCs',
            type: 'funnel',
            left: '30%',
            top: 20,
            bottom: 5,
            width: '60%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
              show: true,
              position: 'left',
              fontSize: '12',
              borderColor: 'transparent',
              shadowColor: 'transparent',
              textBorderColor: 'transparent'
            },
            labelLine: {
              length: 20,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            data: [
              { value: 20, name: '第一名：xx厂' },
              { value: 40, name: '第二名：xx厂' },
              { value: 60, name: '第三名：xx厂' },
              { value: 80, name: '第四名：xx厂' }
            ]
          }
        ]
      }
      // 4.传入数据
      this.pyramid.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
