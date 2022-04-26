<template>
  <a-spin :spinning="loading">
    <a-form :form="form"
            @submit="submitData"
            v-bind="formItemLayout">
      <slot></slot>
    </a-form>
  </a-spin>
</template>

<script>
import $Lis from '@comp/lis/LisCommon'

export default {
  name: 'LisForm',
  props: {
    'form': Object
    // "loading": Boolean,
    // "submitData": Object
  },
  methods: {
    submitData (e) {
      this.loading = true
      // 禁用Chrome默认事件.
      e.preventDefault()
      let tForm = this.form
      this.$emit('submit', e, function returnRequestData (requestData) {
        requestData.form = tForm
        $Lis.submitData(requestData)
      })
      this.loading = false
    }
  },
  data () {
    return {
      loading: false,
      /**
       * 关于labelCol和wrapperCol做一点简单的说明:
       *
       * 一个输入控件会包含两个部分,一部分Label一部分是录入框的部分.
       * labelCol  :显示标签
       * wrapperCol:录入控件
       * 两个Span合计是24代表占满100%,如果希望Label大一些,要增大LableCol的Span
       * 减少wrapperCol的Span,但需要保持两个合计24.
       *
       * 具体API详见:https://antdv.com/components/form-cn/
       */
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
      }
    }
  }
}
</script>

<style>
</style>
