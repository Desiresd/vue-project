<template>
  <div>
    <!-- 上 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="top">
      <lis-button>上</lis-button>
    </lis-tool-tip>
    <!-- 上左 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="topLeft">
      <lis-button>上左</lis-button>
    </lis-tool-tip>
    <!-- 上右 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="topRight">
      <lis-button>上右</lis-button>
    </lis-tool-tip>
    <!-- 下 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="bottom">
      <lis-button>下</lis-button>
    </lis-tool-tip>
    <!-- 下左 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="bottomLeft">
      <lis-button>下左</lis-button>
    </lis-tool-tip>
    <!-- 下右 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="bottomRight">
      <lis-button>下右</lis-button>
    </lis-tool-tip>
    <!-- 左 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="left">
      <lis-button>左</lis-button>
    </lis-tool-tip>
    <!-- 左上 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="leftTop">
      <lis-button>左上</lis-button>
    </lis-tool-tip>
    <!-- 左下 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="leftBottom">
      <lis-button>左下</lis-button>
    </lis-tool-tip>
    <!-- 右 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="right">
      <lis-button>右</lis-button>
    </lis-tool-tip>
    <!-- 右上 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="rightTop">
      <lis-button>右上</lis-button>
    </lis-tool-tip>
    <!-- 右下 -->
    <lis-tool-tip :title="'我是提示信息'"
                  placement="rightBottom">
      <lis-button>右下</lis-button>
    </lis-tool-tip>

    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisButton from '@/components/lisP/LisButton'
import LisToolTip from '@/components/lisP/LisToolTip'
export default {
  name: 'LisToolTips',
  components: {
    HighLight,
    LisButton,
    LisToolTip
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = `<template>
      <!-- 上 -->
      <lis-tool-tip :title="'我是提示信息'" placement="top">
        <lis-button>上</lis-button>
      </lis-tool-tip>
      <!-- 上左 -->
      <lis-tool-tip :title="'我是提示信息'" placement="topLeft">
        <lis-button>上左</lis-button>
      </lis-tool-tip>
      <!-- 上右 -->
      <lis-tool-tip :title="'我是提示信息'"  placement="topRight">
        <lis-button>上右</lis-button>
      </lis-tool-tip>
      <!-- 下 -->
      <lis-tool-tip :title="'我是提示信息'" placement="bottom">
        <lis-button>下</lis-button>
      </lis-tool-tip>
      <!-- 下左 -->
      <lis-tool-tip :title="'我是提示信息'" placement="bottomLeft">
        <lis-button>下左</lis-button>
      </lis-tool-tip>
      <!-- 下右 -->
      <lis-tool-tip :title="'我是提示信息'" placement="bottomRight">
        <lis-button>下右</lis-button>
      </lis-tool-tip>
      <!-- 左 -->
      <lis-tool-tip :title="'我是提示信息'" placement="left">
        <lis-button>左</lis-button>
      </lis-tool-tip>
      <!-- 左上 -->
      <lis-tool-tip :title="'我是提示信息'" placement="leftTop">
        <lis-button>左上</lis-button>
      </lis-tool-tip>
      <!-- 左下 -->
      <lis-tool-tip :title="'我是提示信息'" placement="leftBottom">
        <lis-button>左下</lis-button>
      </lis-tool-tip>
      <!-- 右 -->
      <lis-tool-tip :title="'我是提示信息'" placement="right">
        <lis-button>右</lis-button>
      </lis-tool-tip>
      <!-- 右上 -->
      <lis-tool-tip :title="'我是提示信息'" placement="rightTop">
        <lis-button>右上</lis-button>
      </lis-tool-tip>
      <!-- 右下 -->
      <lis-tool-tip :title="'我是提示信息'" placement="rightBottom">
        <lis-button>右下</lis-button>
      </lis-tool-tip>
    </template>`
  }
}
</script>

<style scoped>
</style>
