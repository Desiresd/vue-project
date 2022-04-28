<template>
  <a-date-picker :value="strToMoment(value)"
                 :placeholder="placeholder || '请选择日期'"
                 :disabled="disabled"
                 :allowClear="allowClear"
                 :open="open"
                 :disabledDate="disabledDates"
                 @openChange="openChange"
                 @change="changed" />
</template>

<script>
import Moment from 'moment'
export default {
  name: 'LisDate',
  props: {
    value: String,
    placeholder: String,
    disabled: Boolean,
    allowClear: Boolean,
    open: Boolean,
    disabledDate: Boolean || false
  },
  methods: {
    strToMoment (str) {
      if (!!str === false) return null
      return Moment(str)
    },
    openChange (open) {
      this.$emit('openChange', open)
    },
    changed (date, dateString) {
      this.$emit('input', dateString)
      this.$emit('change', date, dateString)
    },
    disabledDates (value) {
      return this.disabledDate
    }
  }
}
</script>

<style scoped>
</style>
