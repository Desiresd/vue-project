<template>
  <a-col :span="8">
    <a-form-item :label="label"
                 :labelCol="labelCol"
                 :wrapperCol="wrapperCol">
      <slot></slot>
    </a-form-item>
  </a-col>
</template>

<script>
export default {
  name: 'LisFormItem',
  props: {
    'label': String
  },
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    }
  }
}
</script>

<style scoped>
</style>
