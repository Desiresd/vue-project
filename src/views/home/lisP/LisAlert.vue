<template>
  <div>
    <lis-alert message="success"
               type="success"
               show-icon />
    <lis-alert message="info"
               type="info"
               show-icon />
    <lis-alert message="warning"
               type="warning"
               show-icon
               :closable="true" />
    <lis-alert message="error"
               type="error"
               description="description"
               show-icon />
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisAlert from '@/components/lisP/LisAlert'
export default {
  name: 'LisAlerts',
  components: {
    HighLight,
    LisAlert
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = `<template>
      <lis-alert message="success" type="success" show-icon />
      <lis-alert message="info" type="info" show-icon />
      <lis-alert message="warning" type="warning" show-icon :closable="true" />
      <lis-alert message="error" type="error" description="description" show-icon />
    </template>`
  }
}
</script>

<style scoped>
.ant-alert {
  margin-top: 20px;
}
</style>
