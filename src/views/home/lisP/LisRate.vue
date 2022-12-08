<template>
  <div>
    <lis-row>
      <lis-col :span="8">
        <lis-rate v-model="value1" />{{value1}}
      </lis-col>
      <lis-col :span="8">
        <lis-rate v-model="value2"
                  :allowHalf="true" />{{value2}}
      </lis-col>
      <lis-col :span="8">
        <lis-rate v-model="value3"
                  :count="7" />{{value3}}
      </lis-col>
      <lis-col :span="8">
        <lis-rate v-model="value4"
                  :disabled="true" />{{value4}}
      </lis-col>
      <lis-col :span="8">
        <lis-rate v-model="value5"
                  :tooltips="['超级差评','差评','中评','好评','优秀']" />{{value5}}
      </lis-col>
    </lis-row>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisRow from '@/components/lisP/LisRow'
import LisCol from '@/components/lisP/LisCol'
import LisRate from '@/components/lisP/LisRate'
export default {
  name: 'LisRates',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisRate
  },
  data () {
    return {
      msg: '',
      value1: 1,
      value2: 2.5,
      value3: 3,
      value4: 4,
      value5: 5
    }
  },
  created () {
    this.msg = `<template>
      <lis-rate v-model="value1" />{{value1}}
      <lis-rate v-model="value2" :allowHalf="true" />{{value2}}
      <lis-rate v-model="value3" :count="7" />{{value3}}
      <lis-rate v-model="value4" :disabled="true" />{{value4}}
      <lis-rate v-model="value5" :tooltips="['超级差评','差评','中评','好评','优秀']" />{{value5}}
    </template>
    
    export default {
      data () {
        return {
          value1: 1,
          value2: 2.5,
          value3: 3,
          value4: 4,
          value5: 5
        }
      }
    }`
  }
}
</script>

<style scoped>
</style>
