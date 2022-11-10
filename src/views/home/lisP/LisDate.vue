<template>
  <div>
    <lis-row :gutter=[10,10]>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-date v-model="value1" />
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-date v-model="value2"
                  placeholder="请选择"
                  allowClear />
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-date v-model="value3"
                  disabled />
      </lis-col>
    </lis-row>
    <div style="margin-top: 20px">
      <p>value1: {{ value1 }}</p>
      <p>value2: {{ value2 }}</p>
      <p>value3: {{ value3 }}</p>
    </div>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisRow from '@/components/lisP/LisRow'
import LisCol from '@/components/lisP/LisCol'
import LisDate from '@/components/lisP/LisDate'
export default {
  name: 'LisDates',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisDate
  },
  data () {
    return {
      msg: '',
      value1: '',
      value2: '',
      value3: '2022-12-12'
    }
  },
  created () {
    this.msg = `<template>
      <lis-date v-model="value1" />
      <lis-date v-model="value2" placeholder="请选择" allowClear />
      <lis-date v-model="value3" disabled />
    </template>`
  }
}
</script>

<style>
</style>
