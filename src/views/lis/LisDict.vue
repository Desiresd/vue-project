<template>
  <div>
    <lis-row :gutter="[8,8]">
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="6"
               :xl="4"
               :xxl="3">
        <lis-dict v-model="value1"
                  type="select"
                  dictCode="character" />
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="6"
               :xl="4"
               :xxl="3">
        <lis-dict v-model="value2"
                  type="select"
                  dictCode="sex" />
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="6"
               :xl="4"
               :xxl="3">
        <lis-dict v-model="value3"
                  type="select"
                  dictCode="sex" />
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
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisDict from '@/components/lis/LisDict'
export default {
  name: 'LisDicts',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisDict
  },
  data () {
    return {
      msg: '',
      value1: '',
      value2: '1',
      value3: ''
    }
  },
  created () {
    this.msg = `<template>
      <lis-dict v-model="value1" type="select" dictCode="character" />
      <lis-dict v-model="value1" type="select" dictCode="sex" />
      <lis-dict v-model="value1" type="select" dictCode="sex" />
    </template>
    
    export default {
      data () {
        return {
          value1: '',
          value2: '1',
          value3: ''
        }
      }
    }`
  }
}
</script>

<style scoped>
</style>
