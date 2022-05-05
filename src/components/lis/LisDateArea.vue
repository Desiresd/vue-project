<template>
  <lis-row>
    <lis-col :span="11">
      <lis-form-model-item :name="startName"
                           :labelCol="labelCol"
                           :wrapperCol="wrapperCol"
                           :rules="[{ required: true,  message: '请选择开始时间', trigger: 'change' }]">
        <a-date-picker :value="momentDate(value ? value : null)"
                       placeholder="开始时间"
                       style="width: 100%"
                       allowClear
                       :open="openS"
                       :disabledDate="disabledDateStart"
                       @openChange="handleStartOpenChange"
                       @change="changeS" />
      </lis-form-model-item>
    </lis-col>
    <lis-col :span="2"
             class="center">~</lis-col>
    <lis-col :span="11">
      <lis-form-model-item :name="endName"
                           :labelCol="labelCol"
                           :wrapperCol="wrapperCol"
                           :rules="[{ required: true,  message: '请选择结束时间', trigger: 'change' }]">
        <a-date-picker :value="momentDate( end ? end : null)"
                       placeholder="结束时间"
                       style="width: 100%"
                       allowClear
                       :open="openE"
                       :disabledDate="disabledDateEnd"
                       @openChange="handleEndOpenChange"
                       @change="changeE" />
      </lis-form-model-item>
    </lis-col>

  </lis-row>

</template>

<script>
import { momentDate, momentStr } from '@/common/date-pick/exchange.js'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisFormModelItem from '@/components/lis/LisFormModelItem'
export default {
  name: 'LisDateArea',
  components: {
    LisRow,
    LisCol,
    LisFormModelItem
  },
  props: {
    value: String | null,
    end: String | null,
    startName: String,
    endName: String
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
    changeS (date, dateString) { // 时间切换
      this.$emit('input', momentStr(dateString))
    },
    changeE (date, dateString) { // 时间切换
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
