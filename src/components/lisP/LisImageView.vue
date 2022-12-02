<template>
  <lis-modal ref="modalImage"
             width="800px"
             title="图片预览"
             :showOnly="true"
             @closed="closed">
    <div class="img-con">
      <img ref="singleImg"
           :src="require('@/assets/home/seal.png')"
           class="originStyle" />
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
  </lis-modal>
</template>

<script>
import LisModal from './LisModal'
import LisIconTip from './LisIconTip'
export default {
  name: 'LisImageView',
  components: {
    LisModal,
    LisIconTip
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
    imgData: { type: String, default: () => '' }, // 图片地址（url）
    imgArr: { type: Array, default: () => [] }, // 图片地址（数组）
    isHint: { type: Boolean, default: () => true } // 是否展示提示（第一张或最后一张）
  },
  data () {
    return {
      imageSrc: '@/assets/home/aurora.jpg',
      multiples: 1, // 放大或缩小
      deg: 0, // 旋转的角度
      endX: 0,
      endY: 0
    }
  },
  methods: {
    show () { // 打开图片预览
      this.$refs.modalImage.visible = true
    },
    closed () { // 关闭图片预览
      this.$refs.modalImage.visible = false
    },
    lastCards () { // 上一张
      console.log('上一张')
    },
    narrows () { // 缩小
      console.log('缩小')
      if (this.multiples <= 0.25) {
        return
      }
      console.log('111')
      this.multiples -= 0.25
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    reductions () { // 复原
      console.log('复原')
      this.multiples = 1
      this.deg = 0
      this.endX = 0
      this.endY = 0
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    enlarges () { // 放大
      console.log('放大')
      if (this.multiples >= 10) {
        return
      }
      this.multiples += 0.25
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    leftRotates () { // 逆时针旋转
      console.log('逆时针旋转')
      this.deg -= 90
      if (this.deg <= -360) {
        this.deg = 0
      }
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    rightRotates () { // 顺时针旋转
      console.log('顺时针旋转')
      this.deg += 90
      if (this.deg >= 360) {
        this.deg = 0
      }
      this.$refs.singleImg.style = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg); left:${this.endX}px; top:${this.endY}px`
    },
    downloadFiles () { // 下载
      console.log('下载')
      this.$message.warning('下载功能完善中')
    },
    nextCards () { // 下一张
      console.log('下一张')
    }
  }
}
</script>

<style scoped>
.icon-group {
  position: relative;
  font-size: 18px;
  text-align: center;
  z-index: 99;
}
.icon-group i {
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
}
</style>
