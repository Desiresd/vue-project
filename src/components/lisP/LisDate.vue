<template>
  <a-date-picker :value="momentDate(value)"
                 :placeholder="placeholder || '请选择日期'"
                 :disabled="disabled"
                 :allowClear="allowClear"
                 @change="changed" />
</template>

<script>
import { momentDate, momentStr } from './logic/exchange.js'
export default {
  name: 'LisDate',
  props: {
    value: String,
    placeholder: String,
    disabled: Boolean,
    allowClear: Boolean,
    open: Boolean
  },
  methods: {
    momentDate,
    changed (date, dateString) {
      this.$emit('input', momentStr(dateString))
      this.$emit('change', date, dateString)
    }
  }
}
</script>

<style scoped>
</style>
