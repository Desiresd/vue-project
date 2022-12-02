<template>
  <j-modal class="picPreview"
           :title="title"
           :visible="imgListShow"
           :innerFullscreen="false"
           :fullscreen.sync="fullscreen"
           :switchFullscreen="switchFullscreen"
           @cancel="$emit('close')"
           :bodyStyle="moduleCenter"
           @onResize="onResize"
           width="620px">
    <div id="test_3"
         class="test_3"
         @mousemove="move"
         @mouseup="stop"
         @mouseenter="mouseenter"
         @mouseleave="mouseLeave"
         @mousewheel.prevent>
      <img id="originStyle"
           height="100%"
           @mousedown="start"
           :src="getFileAccessHttpUrl(furl.fileId)"
           ref="singleImg"
           class="originStyle" />
    </div>
    <!--{{furl}}-->
    <template slot="footer">
      <div class="allImg">
        <a-button @click="handleCurrentChange(-1)"
                  class="changeImg"
                  title="上一页">
          <a-icon type="left" />
        </a-button>
        <div class="imgbox"
             :class="'min'"
             ref="imgbox">
          <img v-for="(item,index) in imgList"
               :key="index"
               :src="getFileAccessHttpUrl(item.fileId)"
               :class="{ changeColor:changeColor == index}"
               @click="handlerImg(item,index)" />
        </div>
        <a-button @click="handleCurrentChange(1)"
                  class="changeImg right"
                  title="下一页">
          <a-icon type="left"
                  style="transform: rotate(180deg);" />
        </a-button>
      </div>
      <div class="ctr-box">
        <a-button @click="rotateL"
                  title="左旋转90°">
          <a-icon type="undo" />
        </a-button>
        <a-button @click="rotateR"
                  title="右旋转90°">

          <a-icon type="redo" />
        </a-button>
        <a-button @click="scale(-1)"
                  title="缩小">
          <a-icon type="zoom-out" />
        </a-button>
        <a-button @click="scale(1)"
                  title="放大">
          <a-icon type="zoom-in" />
        </a-button>

        <a-button v-show="!!scaleFlag"
                  @click="scale(0)"
                  title="实际大小">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon1icon-test"></use>
          </svg>
        </a-button>

        <a-button v-show="!scaleFlag"
                  @click="scale(0)"
                  title="适应窗口">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon1zishiying"></use>
          </svg>
        </a-button>

        <a-button @click="fileDownload(imgList[changeColor]['fileName'],imgList[changeColor]['fileId'])"
                  title="下载">
          <a-icon type="download" />
        </a-button>

      </div>
    </template>
  </j-modal>
</template>
<script>
// Fontclass模式
import '@/components/iconfont/common.less'
// 使用 symbol模式 支持多色
import '@/components/iconfont/iconfont.js'
import { fileDownload } from '@api/manage'
import { getFileAccessHttpUrl } from '@/api/manage'

export default {
  name: 'PicPreview',
  data () {
    return {

      observer: null,
      firedNum: 0,
      recordOldValue: { // 记录下旧的宽高数据，避免重复触发回调函数
        width: '0',
        height: '0'
      },

      scaleFlag: true,
      fullscreen: false,
      switchFullscreen: true,
      imgListShow: false,
      num: 0,
      furl: '',
      changeColor: -1,
      currentRotate: 0,
      currentScale: 1,
      canDrag: false,
      offset_x: 0,
      offset_y: 0,
      mouse_x: 0,
      mouse_y: 0,
      moduleCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '320px'
      },
      downUrl: '',

      offwv: '',
      offhv: '',

      cliwv: '',
      clihv: '',
      title: '图片预览'
    }
  },
  props: {
    // title: {
    //   //弹框名称
    //   type: String,
    //   required: false,
    //   default: "图片预览"
    // },
    filePreviewShow: {
      // 是否显示
      type: Boolean,
      required: true,
      default: true
    },
    imgList: {
      // 图像数组
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    currentImg: {
      // 当前图像
      type: Object,
      required: false,
      default: null
    },
    currentIndex: {
      // 当前图像下标
      type: Number,
      required: false,
      default: 0
    }
  },
  watch: {
    fullscreen () {
      let cur = document.documentElement.clientHeight
      if (this.fullscreen) {
        this.moduleCenter.height = (cur - 180) + 'px'
      } else {
        this.moduleCenter.height = '320px'
      }
      this.$nextTick(() => {
        this.scrollImgs(this.changeColor, true)
      })
    },
    filePreviewShow (newv) {
      if (newv) {
        this.imgListShow = this.filePreviewShow
        this.imgList = this.trimSpace(this.imgList)
        if (this.imgList.length === 0) {
          this.furl = ''
          this.changeColor = -1
          this.title = '图片预览'
        } else {
          this.changeColor = this.currentIndex
          if (this.currentImg) {
            this.changeColor = this.imgList.findIndex(
              a => a.fileId === this.currentImg.fileId
            )
          }
          setTimeout(() => {
            // this.scrollImg(this.changeColor - 5, this.changeColor < 5);
            this.scrollImgs(this.changeColor, true)
          }, 500)
          this.furl = this.imgList[this.changeColor]
          this.handlerImg(this.furl, this.changeColor)
          this.title = '图片预览：' + '正在预览第' + (this.changeColor + 1) + '页'
        }
      } else {
        this.imgListShow = this.filePreviewShow
        this.$refs.imgbox.scrollLeft = 0
        window.removeEventListener('mousewheel', this.handleScroll, true) ||
          window.removeEventListener('DOMMouseScroll', this.handleScroll, true)
      }
    }
  },
  mounted () {
    // setTimeout(() => {
    // this.scrollImg(this.changeColor - 5, this.changeColor < 5);
    // }, 500);
  },
  beforeDestroyed () {
    if (this.observer) {
      this.observer.disconnect()
      this.observer.takeRecords()
      this.observer = null
    }
  },
  methods: {
    getFileAccessHttpUrl,
    fileDownload,
    onResize () {
      console.log('进onResize')
    },
    mOveH () {
      console.log('移入')
      // document.getElementsByClassName("testSvg").style.color= '#00DB00';
      // console.log(a)
    },
    mOutH () {
      console.log('移出')
    },
    trimSpace (array) {
      for (var i = 0; i < array.length; i++) {
        if (
          array[i] == ' ' ||
          array[i] == null ||
          typeof array[i] === 'undefined'
        ) {
          array.splice(i, 1)
          i = i - 1
        }
      }
      return array
    },
    // 判断滚动方向
    handleScroll (e) {
      this.scale(-e.deltaY)
    },
    // 点击图片显示
    handlerImg (furl, index) {
      this.scrollImgs(index)
      this.scaleFlag = false
      this.currentRotate = 0
      this.currentScale = 1
      this.rotateScale()
      if (this.$refs.singleImg) {
        this.$refs.singleImg.style.left = 0
        this.$refs.singleImg.style.top = 0
      }
      this.furl = furl
      this.changeColor = index
      if (
        document.getElementsByClassName('originStyle') &&
        document.getElementsByClassName('originStyle')[0] &&
        document.getElementsByClassName('originStyle')[0].style
      ) {
        document.getElementsByClassName('originStyle')[0].style.position =
          'relative'
      }
      this.title = '图片预览：' + '正在预览第' + (this.changeColor + 1) + '页'
    },
    handleCurrentChange (val) {
      this.scaleFlag = false
      let changeColor = this.changeColor + val
      // if (changeColor === this.imgList.length || changeColor === -1) {
      //   return;
      // }
      // 页数在+
      if (changeColor === this.imgList.length) {
        changeColor = 0
      }
      // 页数在-
      if (changeColor === -1) {
        changeColor = this.imgList.length - 1
      }

      this.currentRotate = 0
      this.currentScale = 1
      this.rotateScale()
      this.$refs.singleImg.style.left = 0
      this.$refs.singleImg.style.top = 0
      this.furl = this.imgList[changeColor]
      this.changeColor = changeColor
      this.scrollImgs(this.changeColor, !!((this.changeColor == 0 || this.changeColor == this.imgList.length - 1)))
      this.title = '图片预览：' + '正在预览第' + (this.changeColor + 1) + '页'
    },
    scrollImg (val, noScroll) {
      if (noScroll || !this.$refs.imgbox) {
        return
      }
      this.$refs.imgbox.scrollLeft += 60 * val
    },
    scrollImgs (index, isFirst = false) {
      if (!this.$refs.imgbox) return
      let center = this.$refs.imgbox.offsetWidth / 2
      if (this.$refs.imgbox.offsetWidth > 60 * this.imgList.length) {
        this.$refs.imgbox.style.display = 'flex'
      } else {
        this.$refs.imgbox.style.display = '-webkit-inline-box'
      }
      let scrollLeft = (60 * index + 30) <= center ? 0 : parseInt((index + 1) * 60 - center - 30)
      this.scrollAnimate(this.$refs.imgbox, scrollLeft, isFirst)
    },
    scrollAnimate (obj, targer, isFirst) {
      clearInterval(obj.timer)
      if (isFirst) {
        this.$refs.imgbox.scrollLeft = targer
        return
      }
      obj.timer = setInterval(function () {
        if (Math.abs(obj.scrollLeft - targer) < 1 || Math.abs(targer - obj.scrollLeft) < 1) {
          clearInterval(obj.timer)
        } else if (obj.scrollLeft > targer) {
          obj.scrollLeft -= 1
        } else if (obj.scrollLeft < targer) {
          obj.scrollLeft += 1
        } else {
          clearInterval(obj.timer)
        }
      }, 1)
    },
    start (e) {
      console.log('start')
      // 鼠标左键点击
      e.preventDefault && e.preventDefault() // 去掉图片拖动响应
      if (e.button == 0) {
        this.canDrag = true
        // 获取需要拖动节点的坐标
        this.offset_x = document.getElementsByClassName(
          'originStyle'
        )[0].offsetLeft // x坐标
        this.offset_y = document.getElementsByClassName(
          'originStyle'
        )[0].offsetTop // y坐标
        // 获取当前鼠标的坐标
        this.mouse_x = e.pageX
        this.mouse_y = e.pageY
      }
    },
    move (e) {
      console.log('move')
      e.preventDefault && e.preventDefault()
      window.addEventListener('mousewheel', this.handleScroll, true) ||
        window.addEventListener('DOMMouseScroll', this.handleScroll, false)
      if (this.canDrag == true) {
        let _x = e.pageX - this.mouse_x
        let _y = e.pageY - this.mouse_y
        // 设置移动后的元素坐标
        let now_x = this.offset_x + _x + 'px'
        let now_y = this.offset_y + _y + 'px'
        document.getElementsByClassName('originStyle')[0].style.position =
          'absolute'
        document.getElementsByClassName('originStyle')[0].style.top = now_y
        document.getElementsByClassName('originStyle')[0].style.left = now_x
      }
    },
    // 进入元素
    mouseenter () {
      console.log('mouseenter')
    },
    // 离开元素
    mouseLeave (e) {
      console.log('mouseLeave')
      this.canDrag = false; window.removeEventListener('mousewheel', this.handleScroll, true) ||
        window.removeEventListener('DOMMouseScroll', this.handleScroll, true)
    },
    stop (e) {
      console.log('stop')
      this.canDrag = false
    },
    // 旋转放大
    rotateScale () {
      if (!this.$refs.singleImg) {
        return
      }
      console.log('旋转放大')
      // 0角度不变、1缩放 实际大小
      this.$refs.singleImg.style.Transform = 'rotate(' + this.currentRotate + 'deg)' + 'scale(' + this.currentScale + ')'
      this.$refs.singleImg.style.webkitTransform = 'rotate(' + this.currentRotate + 'deg)' + 'scale(' + this.currentScale + ')'
      this.$refs.singleImg.style.MozTransform =
        'rotate(' +
        this.currentRotate +
        'deg)' +
        'scale(' +
        this.currentScale +
        ')'
      this.$refs.singleImg.style.msTransform =
        'rotate(' +
        this.currentRotate +
        'deg)' +
        'scale(' +
        this.currentScale +
        ')'
      this.$refs.singleImg.style.transform =
        'rotate(' +
        this.currentRotate +
        'deg)' +
        'scale(' +
        this.currentScale +
        ')'
    },
    // 旋转
    rotateL () {
      this.currentRotate -= 90
      if (this.scaleFlag) {
        this.adapt()
      }
      this.rotateScale()
    },
    rotateR () {
      this.currentRotate += 90
      if (this.scaleFlag) {
        this.adapt()
      }
      this.rotateScale()
    },
    // 适应
    adapt (oh, ow) {
      this.scaleFlag = true
      // 不旋转，只缩放
      // 比较屏幕宽高，和图片的宽高比例，确认是横向自适应，还是纵向自适应（另一个方向auto）
      const offH = oh || document.getElementById('test_3').offsetHeight
      const offW = ow || document.getElementById('test_3').offsetWidth

      const val = this.currentRotate / 90 % 2
      let cliH
      let cliW

      if (val == 0) {
        // 方向正的
        cliH = document.getElementById('originStyle').height
        cliW = document.getElementById('originStyle').width
      } else {
        // 方向转了
        cliH = document.getElementById('originStyle').width
        cliW = document.getElementById('originStyle').height
      }

      console.log('窗口高度', offH)
      console.log('窗口宽度', offW)
      console.log('图片高度', cliH)
      console.log('图片宽度', cliW)

      if (!!offH && !!offW && !!cliH && !!cliW) {
        // 只有当，图片过高，或者图片过宽时，触发自适应
        if (offH < cliH || offW < cliW) {
          // 窗口除以图片
          const offHV = offH / cliH
          const offWV = offW / cliW
          // 图片除以窗口
          const cliHV = cliH / offH
          const cliWV = cliW / offW

          if (offHV >= offWV) {
            // 高度auto
            // 横向长
            // 窗口大于图片时
            if (offW >= cliW) this.currentScale = offWV < 0.1 ? 0.1 : offWV
            // 窗口小于图片时
            if (offW < cliW) this.currentScale = 1 / cliWV
          } else {
            // 纵向长
            // 窗口大于图片时
            if (offW >= cliW) this.currentScale = offHV < 0.1 ? 0.1 : offHV
            // 窗口小于图片时
            if (offW < cliW) this.currentScale = 1 / cliHV
          }
        }
      }

      console.log('已经进行了窗口自适应')
    },
    // 缩放 放大
    scale (type) {
      if (type > 0) {
        this.currentScale += 0.1
        this.rotateScale()
      } else if (type < 0) {
        this.currentScale -= 0.1
        if (this.currentScale <= 0.1) {
          this.currentScale = 0.1
          this.rotateScale()
        } else {
          this.rotateScale()
        }
      } else {
        // 改成自适应
        if (!this.scaleFlag) {
          this.adapt()
          this.rotateScale()
        } else {
          // 改成实际大小
          // 转动
          // this.currentRotate = 0;

          // 缩放
          this.currentScale = 1
          // 转动不变，大小改变
          this.rotateScale()
          this.scaleFlag = false

          // this.$refs.singleImg.style.maxWidth= '';
          // this.$refs.singleImg.style.maxHeight= '';
        }
      }
    }

  }
}
</script>
<style lang="scss" scoped >
.picPreview {
  /deep/ .ant-modal-footer {
    border-top: 0;
    .allImg {
      width: 100%;
      height: 10%;
      margin-bottom: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .changeImg {
        /*height: 100%;*/
        width: 80px;
        cursor: pointer;
        padding: 0 0 0 0px;
        margin: 0 10px 0 150px;

        &.right {
          margin-right: 150px;
          margin-left: 10px;
        }
      }
      .imgbox {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border: 1px solid #eee;
        // display: flex;
        // align-items: center;
        // justify-content: flex-start;
        display: -webkit-inline-box;
        overflow: hidden;
        &.min {
          justify-content: center;
        }
        img {
          display: block;
          width: 60px;
          height: 60px;
          padding: 5px;
          cursor: pointer;
        }
        .changeColor {
          border: 2px solid #42b983;
          text-align: center;
        }
      }
    }
    .ctr-box {
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }

  /deep/ .ant-modal-body {
    padding: 0 0;
    .originStyle {
      // position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
      // transform-origin: 50% 50%;
    }
    .originStyle2 {
      max-width: 100%;
      max-height: 100%;
      left: 0;
      top: 0;
      cursor: pointer;
    }
    #test_3 {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border: 0px solid #eeeeee;
      // overflow: scroll;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        cursor: move;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-bottom: 1px;
  padding-top: 0px;
}
</style>
