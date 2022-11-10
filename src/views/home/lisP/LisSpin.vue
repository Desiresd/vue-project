<template>
  <div>
    <lis-button type="primary"
                @click="toSpin">点击加载两秒</lis-button>
    <lis-spin :spinning="spinning"
              :tip="tip">
      <div class="content">我是内容</div>
    </lis-spin>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisRow from '@/components/lisP/LisRow'
import LisCol from '@/components/lisP/LisCol'
import LisSpin from '@/components/lisP/LisSpin'
import LisButton from '@/components/lisP/LisButton'
export default {
  name: 'LisSpins',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisSpin,
    LisButton
  },
  data () {
    return {
      spinning: false,
      tip: '提示',
      msg: ''
    }
  },
  created () {
    this.msg = `<template>
      <lis-button type="primary" @click="toSpin">点击加载两秒</lis-button>
      <lis-spin :spinning="spinning" :tip="tip">
          我是内容
      </lis-spin>
    </template>
    
    export default {
      data () {
        return {
          spinning: false,
          tip: '提示'
        }
      },
      methods: {
        toSpin () {
          this.spinning = true
          const loading = setTimeout(() => {
            clearTimeout(loading)
            this.spinning = false
          }, 2000)
        }
      }
    }`
  },
  methods: {
    toSpin () {
      this.spinning = true
      const loading = setTimeout(() => {
        clearTimeout(loading)
        this.spinning = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 300px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
