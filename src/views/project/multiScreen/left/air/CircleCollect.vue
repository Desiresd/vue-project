<template>
  <div class="circle-collect">
    <div class="collect">
      <svg style="transform: rotate(-90deg)"
           :width="width"
           :height="width"
           xmlns="http://www.w3.org/2000/svg">
        <circle :r="(width-radius)/2"
                :cy="width/2"
                :cx="width/2"
                :stroke-width="radius"
                :stroke="backgroundColor"
                fill="none" />
        <circle ref="$bar"
                :r="(width-radius)/2"
                :cy="width/2"
                :cx="width/2"
                :stroke="barColor"
                :stroke-width="radius"
                :stroke-linecap="isRound ? 'round' : 'square'"
                :stroke-dasharray="(width-radius)*3.14"
                :stroke-dashoffset="isAnimation ? (width-radius) * 3.14 : (width - radius) * 3.14 * (100 - progress) / 100"
                fill="none" />
      </svg>
    </div>
    <div class="list">
      <div :style="{ fontSize: fontSize + 'px' }">
        {{ title }}
      </div>
      <div :style="{ color: barColor, fontSize: fontSize + 'px' }">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleCollect',
  props: {
    width: [Number, String], // 圆的大小
    radius: [Number, String], // 进度条厚度
    progress: [Number, String], // 进度条百分比
    barColor: String, // 进度条颜色
    backgroundColor: String, // 背景颜色
    isAnimation: { // 是否是动画效果
      type: Boolean,
      default: true
    },
    isRound: { // 是否是圆形画笔
      type: Boolean,
      default: true
    },
    id: { // 组件的id，多组件共存时使用
      type: [String, Number],
      default: 1
    },
    duration: { // 整个动画时长
      type: [String, Number],
      default: 1000
    },
    delay: { // 延迟多久执行
      type: [String, Number],
      default: 200
    },
    timeFunction: { // 动画缓动函数
      type: String,
      default: 'cubic-bezier(0.99, 0.01, 0.22, 0.94)'
    },
    title: {
      type: String,
      default: () => { return 'title' }
    },
    value: {
      type: Number,
      default: () => { return 0 }
    },
    fontSize: {
      type: Number,
      default: () => { return 16 }
    }
  },
  data () {
    return {
      idStr: `circle_progress_keyframes_${this.id}`
    }
  },
  beforeDestroy () {
    // 清除旧组件的样式标签
    document.getElementById(this.idStr) && document.getElementById(this.idStr).remove()
  },
  mounted () {
    if (this.isAnimation) {
      // 重复定义判断
      if (document.getElementById(this.idStr)) {
        console.warn('vue-circle-progress should not have same id style')
        document.getElementById(this.idStr).remove()
      }
      // 生成动画样式文件
      let style = document.createElement('style')
      style.id = this.idStr
      style.type = 'text/css'
      style.innerHTML = `
      @keyframes circle_progress_keyframes_name_${this.id} {
      from {stroke-dashoffset: ${(this.width - this.radius) * 3.14}px;}
      to {stroke-dashoffset: ${(this.width - this.radius) * 3.14 * (100 - this.progress) / 100}px;}}
      .circle_progress_bar${this.id} {animation: circle_progress_keyframes_name_${this.id} ${this.duration}ms ${this.delay}ms ${this.timeFunction} forwards;}`
      // 添加新样式文件
      document.getElementsByTagName('head')[0].appendChild(style)
      // 往svg元素中添加动画class
      this.$refs.$bar.classList.add(`circle_progress_bar${this.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-collect {
  display: flex;
  justify-content: center;
  align-items: center;
  .collect {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -5px;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 20px;
      height: 20px;
      border: 2px solid #292e35;
      border-radius: 50%;
    }
  }
  .list {
    text-align: center;
    margin-left: 20px;
  }
}
</style>
