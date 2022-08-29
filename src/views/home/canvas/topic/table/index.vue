<template>
  <div>
    <canvas width="600"
            height="600"
            id="table">
      您的浏览器不支持canvas，请升级浏览器。
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  },
  created () {
    this.$nextTick(() => {
      this.draw()
    })
  },
  methods: {
    draw () {
      let canvas = document.getElementById('table')
      let ctx = canvas.getContext('2d')

      // 线条颜色
      canvas.style.border = '1px solid #000'

      // 表格边距
      let rectH = 10
      let rectW = 10

      // 绘制表格
      for (let i = 0; i < canvas.width / rectH; i++) {
        // 绘制横线
        ctx.moveTo(0, i * rectH)
        ctx.lineTo(canvas.width, i * rectH)
        // 绘制竖线
        ctx.moveTo(i * rectW, 0)
        ctx.lineTo(i * rectW, canvas.width)
      }

      // 结束画布
      ctx.stroke()
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
