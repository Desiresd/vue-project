<template>
  <div>
    <!-- 上 -->
    <lis-pop-confirm placement="top"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>上</lis-button>
    </lis-pop-confirm>
    <!-- 上左 -->
    <lis-pop-confirm placement="topLeft"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>上左</lis-button>
    </lis-pop-confirm>
    <!-- 上右 -->
    <lis-pop-confirm placement="topRight"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>上右</lis-button>
    </lis-pop-confirm>
    <!-- 下 -->
    <lis-pop-confirm placement="bottom"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>下</lis-button>
    </lis-pop-confirm>
    <!-- 下左 -->
    <lis-pop-confirm placement="bottomLeft"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>下左</lis-button>
    </lis-pop-confirm>
    <!-- 下右 -->
    <lis-pop-confirm placement="bottomRight"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>下右</lis-button>
    </lis-pop-confirm>
    <!-- 左 -->
    <lis-pop-confirm placement="left"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>左</lis-button>
    </lis-pop-confirm>
    <!-- 左上 -->
    <lis-pop-confirm placement="leftTop"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>左上</lis-button>
    </lis-pop-confirm>
    <!-- 左下 -->
    <lis-pop-confirm placement="leftBottom"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>左下</lis-button>
    </lis-pop-confirm>
    <!-- 右 -->
    <lis-pop-confirm placement="right"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>右</lis-button>
    </lis-pop-confirm>
    <!-- 右上 -->
    <lis-pop-confirm placement="rightTop"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>右上</lis-button>
    </lis-pop-confirm>
    <!-- 右下 -->
    <lis-pop-confirm placement="rightBottom"
                     ok-text="Yes"
                     cancel-text="No"
                     title="我是标题"
                     @confirm="confirm"
                     @cancel="cancel">
      <lis-button>右下</lis-button>
    </lis-pop-confirm>
    <high-light> {{ msg }} </high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisButton from '@/components/lisP/LisButton'
import LisPopConfirm from '@/components/lisP/LisPopConfirm'
export default {
  name: 'LisPopConfirms',
  components: {
    HighLight,
    LisButton,
    LisPopConfirm
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = `<template>
        <!-- 上 -->
        <lis-pop-confirm placement="top" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>上</lis-button>
        </lis-pop-confirm>
        <!-- 上左 -->
        <lis-pop-confirm placement="topLeft" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>上左</lis-button>
        </lis-pop-confirm>
        <!-- 上右 -->
        <lis-pop-confirm placement="topRight" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>上右</lis-button>
        </lis-pop-confirm>
        <!-- 下 -->
        <lis-pop-confirm placement="bottom" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>下</lis-button>
        </lis-pop-confirm>
        <!-- 下左 -->
        <lis-pop-confirm placement="bottomLeft" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>下左</lis-button>
        </lis-pop-confirm>
        <!-- 下右 -->
        <lis-pop-confirm placement="bottomRight" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>下右</lis-button>
        </lis-pop-confirm>
        <!-- 左 -->
        <lis-pop-confirm placement="left" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>左</lis-button>
        </lis-pop-confirm>
        <!-- 左上 -->
        <lis-pop-confirm placement="leftTop" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>左上</lis-button>
        </lis-pop-confirm>
        <!-- 左下 -->
        <lis-pop-confirm placement="leftBottom" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>左下</lis-button>
        </lis-pop-confirm>
        <!-- 右 -->
        <lis-pop-confirm placement="right" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>右</lis-button>
        </lis-pop-confirm>
        <!-- 右上 -->
        <lis-pop-confirm placement="rightTop" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>右上</lis-button>
        </lis-pop-confirm>
        <!-- 右下 -->
        <lis-pop-confirm placement="rightBottom" ok-text="Yes" cancel-text="No" title="我是标题" @confirm="confirm" @cancel="cancel">
          <lis-button>右下</lis-button>
        </lis-pop-confirm>
      </template>
      
      export default {
        methods: {
          confirm (e) {
            this.$message.success('Click on Yes')
          },
          cancel (e) {
            this.$message.error('Click on No')
          }
        }
      }`
  },
  methods: {
    confirm (e) {
      this.$message.success('Click on Yes')
    },
    cancel (e) {
      this.$message.error('Click on No')
    }
  }
}
</script>

<style scoped>
</style>
