<template>
  <div>
    <a-date-picker v-model="timeSD"
                   placeholder="开始时间"
                   style="width: 47%"
                   allowClear
                   :open="openS"
                   :disabledDate="disabledDateStart"
                   @openChange="handleStartOpenChange"
                   @change="changeS" />
    ~
    <a-date-picker v-model="timeED"
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
import Moment from 'moment'
import LisDate from './LisDate.vue'
export default {
  name: 'LisDateArea',
  components: { LisDate },
  props: {
    timeS: String || null,
    timeE: String || null
  },
  watch: {
    timeS: {
      handler (newName) {
        this.timeSD = newName ? this.momentDate(newName) : null
      },
      immediate: true
    },
    timeE: {
      handler (newName) {
        this.timeED = newName ? this.momentDate(newName) : null
      },
      immediate: true
    }
  },
  data () {
    return {
      timeSD: null,
      timeED: null,
      openS: false,
      openE: false
    }
  },
  computed: {
    momentDate () {
      return function (value) {
        if (!!value === false) return null
        return Moment(value, 'YYYY-MM-DD')
      }
    },
    monmentStr () {
      return function (value) {
        if (!!value === false) return null
        return Moment(value).format('YYYY-MM-DD')
      }
    }
  },
  methods: {
    disabledDateStart (start) {
      const end = this.timeED
      if (!start || !end) {
        return false
      }
      console.log('start' + start)
      return start.valueOf() > end.valueOf()
    },
    disabledDateEnd (end) {
      const start = this.timeSD
      if (!end || !start) {
        return false
      }
      console.log('end')
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
      this.timeSD = dateString
      this.$emit('change', this.monmentStr(this.timeSD), this.monmentStr(this.timeED))
    },
    changeE (date, dateString) { // 时间切换
      this.timeED = dateString
      console.log(this.timeED)
      this.$emit('change', this.monmentStr(this.timeSD), this.monmentStr(this.timeED))
    }
  }
}
</script>

<style>
</style>
