<template>
  <a-spin :spinning="loading">
    <a-form-model :ref="refs"
                  :model="model"
                  :rules="rules"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol">
      <slot></slot>
    </a-form-model>
  </a-spin>
</template>

<script>
export default {
  name: 'LisFormModel',
  props: {
    refs: String,
    model: Object,
    rules: Object
  },
  data () {
    return {
      loading: false,
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
      this.$refs[this.refs].validate(valid => {
        if (valid) {
          return true
        } else {
          return false
        }
      })
    },
    reset () {
      this.$refs[this.refs].resetFields()
    }
  }
}
</script>

<style>
</style>
