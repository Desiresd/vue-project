<template>
  <lis-modal ref="modalImage"
             width="900px"
             title="图片预览"
             :showOnly="true"
             @closed="closed">
    <div id="img-con"
         class="img-con"
         @mousemove.prevent="move">
      <img ref="singleImg"
           height="80%"
           :src="require(`@/assets/home/${imageSrc}`)"
           draggable="true"
           @mousedown="start"
           @mouseup="stop"
           @mouseenter="enter"
           @mouseleave="leave" />
      <a-icon type="left-circle"
              class="left-circle"
              @click="lastCards()" />
      <a-icon type="right-circle"
              class="right-circle"
              @click="nextCards()" />
    </div>
    <div class="icon-group">
      <lis-icon-tip v-if="lastCard"
                    title="上一张"
                    icon="arrow-left"
                    @click="lastCards()" />
      <lis-icon-tip v-if="narrow"
                    title="缩小"
                    icon="fullscreen-exit"
                    @click="narrows()" />
      <lis-icon-tip v-if="reduction"
                    title="复原"
                    icon="column-width"
                    @click="reductions()" />
      <lis-icon-tip v-if="enlarge"
                    title="放大"
                    icon="fullscreen"
                    @click="enlarges()" />
      <lis-icon-tip v-if="leftRotate"
                    title="逆时针旋转90°"
                    icon="undo"
                    @click="leftRotates()" />
      <lis-icon-tip v-if="rightRotate"
                    title="顺时针旋转90°"
                    icon="redo"
                    @click="rightRotates()" />
      <lis-icon-tip v-if="downloadFile"
                    title="下载"
                    icon="vertical-align-bottom"
                    @click="downloadFiles()" />
      <lis-icon-tip v-if="nextCard"
                    title="下一张"
                    icon="arrow-right"
                    @click="nextCards()" />
    </div>
    <lis-cut-tip v-if="isHint"
                 ref="cutTip" />
  </lis-modal>
</template>

<script>
import LisModal from './LisModal'
import LisIconTip from './LisIconTip'
import LisCutTip from './LisCutTip'
export default {
  name: 'LisImageView',
  components: {
    LisModal,
    LisIconTip,
    LisCutTip
  },
  props: {
    // 基础配置
    lastCard: { type: Boolean, default: () => true }, // 是否需要上一张
    narrow: { type: Boolean, default: () => true }, // 是否需要缩小
    reduction: { type: Boolean, default: () => true }, // 是否需要复原
    enlarge: { type: Boolean, default: () => true }, // 是否需要放大
    leftRotate: { type: Boolean, default: () => true }, // 是否需要逆时针旋转
    rightRotate: { type: Boolean, default: () => true }, // 是否需要顺时针旋转
    downloadFile: { type: Boolean, default: () => true }, // 是否需要下载
    nextCard: { type: Boolean, default: () => true }, // 是否需要下一张
    mousewheel: { type: Boolean, default: () => true }, // 是否需要滚轮缩放
    mouseDown: { type: Boolean, default: () => true }, // 是否需要拖拽功能
    // 数据配置
    imgIndex: { type: Number, default: () => 0 }, // 图片索引
    imgSrc: { type: String, default: () => '' }, // 图片地址（url）
    imgArr: { type: Array, default: () => [] }, // 图片地址（数组）
    isHint: { type: Boolean, default: () => true } // 是否展示提示（第一张或最后一张）
  },
  watch: {
    imgIndex: {
      handler (newValue) {
        this.imageIndex = newValue
      },
      immediate: true
    },
    imgSrc: {
      handler (newValue) {
        this.imageSrc = newValue
      },
      immediate: true
    },
    imgArr: {
      handler (newValue) {
        this.imageArr = newValue
      },
      immediate: true
    }
  },
  data () {
    return {
      imageIndex: 0,
      imageSrc: '',
      imageArr: [],
      multiples: 1, // 放大或缩小
      deg: 0, // 旋转的角度
      originX: 0,
      originY: 0,
      startX: 0,
      srartY: 0,
      endX: 0,
      endY: 0,
      canDrag: false
    }
  },
  methods: {
    getOrigin () { // 获取原始的X/Y
      this.$nextTick(() => {
        let img = document.querySelector('#img-con img')
        this.originX = img.offsetLeft
        this.originY = img.offsetTop
        this.endX = this.originX
        this.endY = this.originY
      })
    },
    show () { // 打开图片预览
      this.$refs.modalImage.visible = true
      this.getOrigin()
    },
    closed () { // 关闭图片预览
      this.$refs.modalImage.visible = false
    },
    lastCards () { // 上一张
      if (this.imageIndex <= 0) {
        this.imageIndex = 0
        if (this.isHint) {
          this.$refs.cutTip.tiping('当前图片处于第一张')
        }
        return
      }
      this.imageIndex -= 1
      this.imageSrc = this.imageArr[this.imageIndex]
      this.reductions()
    },
    narrows () { // 缩小
      if (this.multiples <= 0.25) {
        return
      }
      this.multiples -= 0.25
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    reductions () { // 复原
      this.multiples = 1
      this.deg = 0
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg);`
      setTimeout(() => {
        this.getOrigin()
      }, 100)
    },
    enlarges () { // 放大
      if (this.multiples >= 10) {
        return
      }
      this.multiples += 0.25
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    leftRotates () { // 逆时针旋转
      this.deg -= 90
      if (this.deg <= -360) {
        this.deg = 0
      }
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    rightRotates () { // 顺时针旋转
      this.deg += 90
      if (this.deg >= 360) {
        this.deg = 0
      }
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    downloadFiles () { // 下载
      this.$message.warning('下载功能完善中')
    },
    nextCards () { // 下一张
      let length = this.imageArr.length
      if (this.imageIndex >= length - 1) {
        this.imageIndex = length - 1
        if (this.isHint) {
          this.$refs.cutTip.tiping('当前图片处于最后一张')
        }
        return
      }
      this.imageIndex += 1
      this.imageSrc = this.imageArr[this.imageIndex]
      this.reductions()
    },
    start (e) {
      if (e.button === 0) { // 鼠标左键点击
        this.canDrag = true
        this.startX = e.clientX
        this.startY = e.clientY
      }
    },
    stop (e) {
      this.canDrag = false
    },
    move (e) {
      if (this.canDrag) {
        this.endX = e.clientX
        this.endY = e.clientY
        let x = this.endX - this.startX
        let y = this.endY - this.startY
        let img = document.querySelector('.img-con img')
        this.startX = this.endX
        this.startY = this.endY
        this.endX = img.offsetLeft + x
        this.endY = img.offsetTop + y
        this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
      }
    },
    enter () {
      window.addEventListener('mousewheel', this.handleScroll, true) || window.addEventListener('DOMMouseScroll', this.handleScroll, false)
    },
    leave () {
      window.removeEventListener('mousewheel', this.handleScroll, true) || window.removeEventListener('DOMMouseScroll', this.handleScroll, true)
    },
    handleScroll (e) {
      let deltaY = e.deltaY
      if (deltaY > 0) {
        this.enlarges()
      } else {
        this.narrows()
      }
    }
  }
}
</script>

<style scoped>
.icon-group {
  position: relative;
  font-size: 0px;
  text-align: center;
  margin-top: 30px;
  z-index: 99;
}
.icon-group i {
  font-size: 18px;
  padding: 0 8px;
}
.img-con {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
}
.img-con img {
  position: absolute;
  cursor: pointer;
}

.left-circle,
.right-circle {
  position: absolute;
  top: 50%;
  font-size: 40px;
  z-index: 99;
  cursor: pointer;
}
.left-circle {
  left: 20px;
}
.right-circle {
  right: 20px;
}
</style>
