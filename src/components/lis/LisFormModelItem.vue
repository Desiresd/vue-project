<template>
  <a-form-model-item :label="label"
                     :ref="name"
                     :prop="name"
                     :required="required"
                     :rules="rules">
    <slot></slot>
  </a-form-model-item>
</template>

<script>
export default {
  name: 'LisFormModelItem',
  props: {
    label: String,
    name: String,
    required: Boolean,
    rules: Array
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
