<template>
  <a-row>
    <a-col :span="11">
      <a-form-model-item :prop="startName"
                         :labelCol="labelCol"
                         :wrapperCol="wrapperCol"
                         :rules="rules ? rules[0] : null">
        <a-date-picker :value="momentDate(value ? value : null)"
                       placeholder="开始时间"
                       style="width: 100%"
                       allowClear
                       :open="openS"
                       :disabledDate="disabledDateStart"
                       @openChange="handleStartOpenChange"
                       @change="changeS" />
      </a-form-model-item>
    </a-col>
    <a-col :span="2"
           class="center">~</a-col>
    <a-col :span="11">
      <a-form-model-item :prop="endName"
                         :labelCol="labelCol"
                         :wrapperCol="wrapperCol"
                         :rules="rules ? rules[1] : null">
        <a-date-picker :value="momentDate(end ? end : null)"
                       placeholder="结束时间"
                       style="width: 100%"
                       allowClear
                       :open="openE"
                       :disabledDate="disabledDateEnd"
                       @openChange="handleEndOpenChange"
                       @change="changeE" />
      </a-form-model-item>
    </a-col>
  </a-row>
</template>

<script>
import { momentDate, momentStr } from './logic/exchange.js'
export default {
  name: 'LisDateArea',
  props: {
    value: String,
    end: String,
    startName: String,
    endName: String,
    rules: Array
  },
  data () {
    return {
      openS: false,
      openE: false,
      labelCol: {
        xs: { span: 0 },
        sm: { span: 0 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 }
      }
    }
  },
  methods: {
    momentDate,
    disabledDateStart (start) {
      const end = this.end
      if (!start || !end) {
        return false
      }
      return start.valueOf() > end.valueOf()
    },
    disabledDateEnd (end) {
      const start = this.value
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
    changeS (date, dateString) {
      // 时间切换
      this.$emit('input', momentStr(dateString))
    },
    changeE (date, dateString) {
      // 时间切换
      this.$emit('update:end', momentStr(dateString))
    }
  }
}
</script>

<style scoped>
.center {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
