<template>

  <lis-form-item :label="label">
    <a-time-picker style="width: 100%"
                   :placeholder="getPlaceholder(placeholder)" />
  </lis-form-item>
</template>

<script>
import LisFormItem from './LisFormItem'

export default {
  name: 'LisTime',
  components: { LisFormItem },
  props: {
    'label': String,
    'placeholder': String,
    'name': String,
    'verify': Array
  },
  methods: {
    getPlaceholder: function (placeholder) {
      if (placeholder != undefined && placeholder != '') {
        return placeholder
      } else {
        return '请输入' + this.label
      }
    }
  }
}
</script>

<style scoped>
</style>
