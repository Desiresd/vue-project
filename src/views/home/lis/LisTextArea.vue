<template>
  <div>
    <lis-row :gutter="[10,10]">
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-text-area v-model="value1"
                       title="title"
                       placeholder="value1"
                       @change="changeContent" />
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-text-area v-model="value2"
                       title="title"
                       placeholder="只读"
                       :readOnly="true"
                       @change="changeContent" />
      </lis-col>
    </lis-row>
    <div style="margin-top: 20px">
      <p>value1: {{ value1 }}</p>
    </div>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisTextArea from '@/components/lis/LisTextArea'
export default {
  name: 'LisTextAreas',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisTextArea
  },
  data () {
    return {
      msg: '',
      value1: '',
      value2: '我是只读的内容'
    }
  },
  created () {
    this.msg = `<template>
      <lis-text-area v-model="value1" title="title" placeholder="value1" @change="changeContent" />
      <lis-text-area v-model="value2" title="title"  placeholder="只读" :readOnly="true" @change="changeContent" />
    </template />
    
    export default {
      data () {
        return {
          value1: '',
          value2: '我是只读的内容'
        }
      },
      methods: {
        changeContent (value) {
          console.log('changeContent: ' + value)
        }
      }
    }`
  },
  methods: {
    changeContent (value) {
      console.log('changeContent: ' + value)
    }
  }
}
</script>

<style>
</style>
