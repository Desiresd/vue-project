<template>
  <div>
    <a-date-picker :value="momentDate( value ? value[0] : null)"
                   placeholder="开始时间"
                   style="width: 47%"
                   allowClear
                   :open="openS"
                   :disabledDate="disabledDateStart"
                   @openChange="handleStartOpenChange"
                   @change="changeS" />
    ~
    <a-date-picker :value="momentDate( value ? value[1] : null)"
                   placeholder="结束时间"
                   style="width: 47%"
                   allowClear
                   :open="openE"
                   :disabledDate="disabledDateEnd"
                   @openChange="handleEndOpenChange"
                   @change="changeE" />
  </div>
</template>

<script>
import { momentDate, momentStr } from '@/common/date-pick/exchange.js'
export default {
  name: 'LisDateArea',
  props: {
    value: Array
  },
  data () {
    return {
      openS: false,
      openE: false
    }
  },
  methods: {
    momentDate,
    disabledDateStart (start) {
      const end = this.value ? momentDate(this.value[1]) : ''
      if (!start || !end) {
        return false
      }
      return start.valueOf() > end.valueOf()
    },
    disabledDateEnd (end) {
      const start = this.value ? momentDate(this.value[0]) : ''
      if (!end || !start) {
        return false
      }
      return start.valueOf() > end.valueOf()
    },
    handleStartOpenChange (open) {
      this.openS = open
      if (!open) {
        this.openE = true
      }
    },
    handleEndOpenChange (open) {
      this.openE = open
    },
    changeS (date, dateString) { // 时间切换
      this.$emit('input', [momentStr(dateString), this.value[1]])
      this.$emit('change', [momentStr(dateString), this.value[1]])
    },
    changeE (date, dateString) { // 时间切换
      this.$emit('input', [this.value[0], momentStr(dateString)])
      this.$emit('change', [this.value[0], momentStr(dateString)])
    }
  }
}
</script>

<style>
</style>
