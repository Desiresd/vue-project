<template>
  <div>
    <lis-row :gutter=[10,10]>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="8"
               :xl="4"
               :xxl="3">
        <lis-date-year v-model="value" />
      </lis-col>
    </lis-row>
    <div style="margin-top: 20px">
      <p>value1: {{ value }}</p>
    </div>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisRow from '@/components/lisP/LisRow'
import LisCol from '@/components/lisP/LisCol'
import LisDateYear from '@/components/lisP/LisDateYear'
export default {
  name: 'LisDateYears',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisDateYear
  },
  data () {
    return {
      msg: '',
      value: null
    }
  },
  created () {
    this.msg = `<template>
      <lis-date-year v-model="value" />
    </template>`
  }
}
</script>

<style scoped>
</style>
