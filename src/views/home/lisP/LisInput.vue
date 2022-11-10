<template>
  <div>
    <lis-row :gutter=[10,10]>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-input v-model="value1"
                   label="LisInput1"
                   size="large"
                   addonAfter="qq.com"
                   @change="changeInput">
        </lis-input>
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-input v-model="value2"
                   placeholder="LisInput2"
                   size="default"
                   addonBefore="xx"
                   allowClear
                   @change="changeInput">
        </lis-input>
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-input v-model="value3"
                   type="textarea"
                   placeholder="LisInput3"
                   :rows="3"
                   allowClear
                   @change="changeInput">
        </lis-input>
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
import LisInput from '@/components/lisP/LisInput'
export default {
  name: 'LisInputs',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisInput
  },
  data () {
    return {
      msg1: '',
      value1: '',
      value2: '',
      value3: ''
    }
  },
  created () {
    this.msg = `<template>
      <lis-input v-model="value1" label="LisInput1" size="large" addonAfter="qq.com" @change="changeInput" />
      <lis-input v-model="value2" placeholder="LisInput2" size="default" addonBefore="xx" allowClear @change="changeInput" />
      <lis-input v-model="value3" type="textarea" placeholder="LisInput3" :rows="3" allowClear @change="changeInput" />
    </template>
    
    export default {
      data () {
        return {
          value1: '',
          value2: '',
          value3: ''
        }
      },
      methods: {
        changeInput (value) {
          console.log('changeInput:' + value)
        }
      }
    }`
  },
  methods: {
    changeInput (value) {
      console.log('changeInput:' + value)
    }
  }
}
</script>

<style scoped>
</style>
