<template>
  <div>
    <lis-row :gutter="[10,10]">
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-input-number v-model="value1"
                          placeholder="value1"
                          @change="changeNumber" />
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-input-number v-model="value2"
                          placeholder="value2"
                          :step="2"
                          @change="changeNumber" />
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-input-number placeholder="value3"
                          disabled
                          :formatter="formatter" />
      </lis-col>
    </lis-row>
    <div style="margin-top: 20px">
      <p>value1: {{ value1 }}</p>
      <p>value2: {{ value2 }}</p>
    </div>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisInputNumber from '@/components/lis/LisInputNumber'
export default {
  name: 'LisInputNumbers',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisInputNumber
  },
  data () {
    return {
      msg: '',
      value1: null,
      value2: null
    }
  },
  created () {
    this.msg = `<template>
      <lis-input-number v-model="value1" placeholder="value1" @change="changeNumber" />
      <lis-input-number v-model="value2" placeholder="value2" :step="2" @change="changeNumber" />
      <lis-input-number placeholder="value3" disabled :formatter="formatter"/>
    </template>
    
    export default {
      data () {
        return {
          value1: null,
          value2: null
        }
      },
      methods: {
        changeNumber (value) {
          console.log('changeNumber: ' + value)
        },
        formatter () {
          const value1 = this.value1
          const value2 = this.value2
          return (value1 && value2) ? value1 * value2 : null
        }
      }
    }`
  },
  methods: {
    changeNumber (value) {
      console.log('changeNumber: ' + value)
    },
    formatter () {
      const value1 = this.value1
      const value2 = this.value2
      return (value1 && value2) ? value1 * value2 : null
    }
  }
}
</script>

<style>
</style>
