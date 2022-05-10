<template>
  <div>
    <lis-button type="primary"
                @click="openNotification">
      打开通知提醒框
    </lis-button>
    <high-light> {{ msg }} </high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisButton from '@/components/lis/LisButton'
export default {
  name: 'LisPopConfirms',
  components: {
    HighLight,
    LisButton
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = ` <template>
        <lis-button type="primary" @click="openNotification"> 打开通知提醒框 </lis-button>
      </template>
    
      export default {
        methods: {
          openNotification () {
            this.$notification.open({
              message: '我是标题',
              description: '我是通知框内容',
              icon: <a-icon type="check-circle" style="color: green" />
            })
          }
        }
      }`
  },
  methods: {
    openNotification () {
      this.$notification.open({
        message: '我是标题',
        description: '我是通知框内容',
        icon: <a-icon type="check-circle" style="color: green" />
      })
    }
  }
}
</script>

<style scoped>
</style>
