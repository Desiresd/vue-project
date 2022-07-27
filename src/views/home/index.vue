<template>
  <div>
    <!-- 封面 -->
    <cover-page />
  </div>
</template>

<script>
import CoverPage from './cover/index'
export default {
  name: 'index',
  components: {
    CoverPage
  },
  data () {
    return {

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
</style>
