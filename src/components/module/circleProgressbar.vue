<template>
  <div class="circle-progress">
    <div class="circle-progress-bar">
      <div class="title">{{ percent }}</div>
      <div class="wrapper left-wrapper">
        <div class="circle-bar"
             id="circle-bar"></div>
      </div>
      <div class="wrapper right-wrapper">
        <div class="circle-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleProgressbar',
  props: {
    id: { // 组件的id，多组件共存时使用
      type: [String, Number],
      default: 1
    }
  },
  data () {
    return {
      percent: '0%'
    }
  },
  mounted () {
    this.$nextTick(() => {
      const circleProgressBar = this.CircleProgressBar()
      let p = 0
      let t = setInterval(() => {
        if (p > 100) clearInterval(t)
        circleProgressBar(++p)
      }, 60)
    })
  },
  methods: {
    CircleProgressBar () {
      const that = this
      const oLeftCircleBar = this.getCircleBar('left')
      const oRightCircleBar = this.getCircleBar('right')
      return function (percent) {
        if (percent >= 0 && percent <= 50) {
          that.setRotate(oRightCircleBar, percent)
        } else if (percent > 50 && percent <= 100) {
          that.setRotate(oLeftCircleBar, percent - 50)
        }
        if (percent >= 0 && percent <= 100) {
          that.percent = percent + '%'
        }
      }
    },
    formatDegree (percent) {
      return `rotate(${-135 + 360 / 100 * percent}deg)`
    },
    setRotate (node, percent) {
      node.style.transform = this.formatDegree(percent)
    },
    getCircleBar (dir) {
      return document.querySelector(`.circle-progress-bar .${dir}-wrapper .circle-bar`)
    }
  }
}
</script>

<style lang='scss' scoped>
.circle-progress {
  width: 300px;
  height: 300px;
  .circle-progress-bar {
    position: relative;
    width: 100%;
    height: 100%;
    div {
      box-sizing: border-box;
    }
    .title {
      font-size: 22px;
      font-weight: bold;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .wrapper {
      position: absolute;
      top: 0;
      width: 150px;
      height: 300px;
      overflow: hidden;
    }
    .circle-bar {
      position: absolute;
      width: 300px;
      height: 300px;
      border: 30px solid transparent;
      border-radius: 50%;
      transform: rotate(-135deg);
      transition: transform 0.3s;
    }
    .left-wrapper {
      left: 0;
      .circle-bar {
        left: 0;
        border-left: 30px solid orange;
        border-bottom: 30px solid orange;
      }
    }
    .right-wrapper {
      right: 0;
      .circle-bar {
        right: 0;
        border-right: 30px solid blue;
        border-top: 30px solid blue;
      }
    }
  }
}
</style>
