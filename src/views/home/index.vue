<template>
  <div>
    <transition mode="out-in"
                :duration="600"
                :enter-active-class="enterTransition"
                :leave-active-class="leaveTransition">
      <keep-alive>
        <router-view class="router-view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'index',
  watch: {
    // 监听路由上下级
    // $route (to, from) {
    //   let toDepth = to.meta.tx
    //   let fromDepth = from.meta.tx
    //   if (fromDepth > toDepth) {
    //     this.enterTransition = 'animate__animated animate__fadeInLeft'
    //     this.leaveTransition = 'animate__animated animate__fadeOutRight'
    //   } else if (fromDepth < toDepth) {
    //     this.enterTransition = 'animate__animated animate__fadeInRight'
    //     this.leaveTransition = 'animate__animated animate__fadeOutLeft'
    //   } else {
    //     this.enterTransition = 'animate__animated animate__fadeIn'
    //     this.leaveTransition = 'animate__animated animate__fadeOut'
    //   }
    // }
  },
  data () {
    return {
      enterTransition: 'animate__animated animate__fadeIn',
      leaveTransition: 'animate__animated animate__fadeOut'
    }
  }
}
</script>

<style lang='scss' scoped>
$color-main: #0090ff; // 主色
$color-assist: #ff4747; // 辅色
$color-text: #2e2e33; //标题正文
$color-text-assist: #a1a1b3; // 辅助颜色
$color-text-tip: #737880; // 提示文字
$color-white: #ffffff; // 白色
$color-back: #1c1c28; // 背景色
$color-text: #d9d7e1; // 字体色

.router-view {
  font-family: ZGZY;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
