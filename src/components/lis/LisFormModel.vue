<template>
  <a-form-model ref="ruleForm"
                :model="model"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol">
    <slot></slot>
  </a-form-model>
</template>

<script>
export default {
  name: 'LisFormModel',
  props: {
    model: Object,
    rules: Object
  },
  data () {
    return {
      validState: true,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    }
  },
  methods: {
    validate () {
      this.$refs.ruleForm.validate(valid => {
        this.validState = valid
      })
    },
    reset () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style>
</style>
