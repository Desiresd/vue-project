<template>
  <div>
    <lis-row :gutter=[10,10]>
      <lis-col :xs="12"
               :sm="12"
               :md="12"
               :lg="12"
               :xl="8"
               :xxl="8">
        <lis-date-area v-model="startTime"
                       :end.sync="endTime" />
      </lis-col>
    </lis-row>
    <div style="margin-top: 20px">
      <p>date1: {{ startTime }} ~ {{ endTime }}</p>
    </div>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisDateArea from '@/components/lis/LisDateArea'
export default {
  name: 'LisDates',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisDateArea
  },
  data () {
    return {
      msg: '',
      startTime: null,
      endTime: null
    }
  },
  created () {
    this.msg = `<template>
      <lis-date-area v-model="startTime" :end.sync="endTime"/>
    </template>
    export default {
      data () {
        return {
          startTime: null, // 开始时间
          endTime: null // 结束时间
        }
      }
    }`
  }
}
</script>

<style>
</style>
