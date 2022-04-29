<template>
  <a-date-picker mode="year"
                 :value="momentDate(value,'YYYY')"
                 format="YYYY"
                 :placeholder="placeholder || '请选择年'"
                 :allowClear="false"
                 :open="open"
                 @openChange="open = !open"
                 @panelChange="value => change(value)" />
</template>

<script>
import { momentDate, momentStr } from '@/common/date-pick/exchange.js'
export default {
  props: {
    name: String,
    value: String || null,
    placeholder: String
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    momentDate,
    change (value) {
      this.$emit('input', momentStr(value, 'YYYY'))
      this.open = false
    }
  }
}
</script>

<style scoped>
</style>
