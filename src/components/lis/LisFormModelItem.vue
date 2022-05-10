<template>
  <a-form-model-item :label="label"
                     :ref="name"
                     :prop="name"
                     :required="required"
                     :rules="rules"
                     :label-col="labelCol || labelCols"
                     :wrapper-col="wrapperCol || wrapperCols">
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
    rules: Array,
    labelCol: Object,
    wrapperCol: Object
  },
  data () {
    return {
      labelCols: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCols: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    }
  }
}
</script>

<style scoped>
</style>
