<template>
  <div>
    <lis-row :gutter=[10,10]>
      <lis-col :xs="12"
               :sm="12"
               :md="12"
               :lg="12"
               :xl="8"
               :xxl="8">
        <lis-date-area :timeS="timeS"
                       :timeE="timeE"
                       @change="change" />
      </lis-col>
    </lis-row>
    <div style="margin-top: 20px">
      <p>date1: {{ timeS }} ~ {{ timeE }}</p>
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
      timeS: '',
      timeE: ''
    }
  },
  created () {
    this.msg = `<template>
      <lis-date-area :timeS="timeS" :timeE="timeE" @change="change" />
    </template>
    export default {
      data () {
        return {
          timeS: '', // 开始时间
          timeE: '' // 结束时间
        }
      },
      methods: {
        change (timeS, timeE) {
          this.timeS = timeS
          this.timeE = timeE
        }
      }
    }`
  },
  methods: {
    change (timeS, timeE) {
      this.timeS = timeS
      this.timeE = timeE
    }
  }
}
</script>

<style>
</style>
