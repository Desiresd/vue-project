<template>
  <div>
    <lis-row>
      <lis-col :span="24">
        <lis-progress :percent="30"
                      :strokeColor="'black'" />
        <lis-progress :percent="50"
                      status="active" />
        <lis-progress :percent="70"
                      status="exception" />
        <lis-progress :percent="100" />
        <lis-progress :percent="50"
                      :showInfo="false"
                      :strokeColor="{from: 'green',to: 'blue'}" />
        <high-light> {{ msgLine }}</high-light>
      </lis-col>
      <lis-col :span="24">
        <lis-progress type="circle"
                      :percent="75"
                      :format="percent => percent + 'Percent'" />
        <lis-progress type="circle"
                      :percent="70"
                      status="exception" />
        <lis-progress type="circle"
                      :percent="100" />
        <high-light> {{ msgCircle }}</high-light>
      </lis-col>
      <lis-col :span="24">
        <lis-progress :percent="60"
                      :success-percent="30"
                      status="active" />
        <lis-progress :percent="60"
                      :success-percent="30"
                      type="circle" />
        <lis-progress :percent="60"
                      :success-percent="30"
                      type="dashboard" />
        <high-light> {{ msgDash }}</high-light>
      </lis-col>
    </lis-row>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisProgress from '@/components/lis/LisProgress'
export default {
  name: 'LisProgresss',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisProgress
  },
  data () {
    return {
      msgLine: '',
      msgCircle: '',
      msgDash: ''
    }
  },
  created () {
    this.msgLine = ` <template>
        <lis-progress :percent="30" :strokeColor="'black'"/>
        <lis-progress :percent="50" status="active" />
        <lis-progress :percent="70" status="exception" />
        <lis-progress :percent="100" />
        <lis-progress :percent="50" :show-info="false" :strokeColor="{from: 'green',to: 'blue'}"/>
      </template>`

    this.msgCircle = ` <template>
        <lis-progress type="circle" :percent="75" :format="percent => percent + 'Percent'"/>
        <lis-progress type="circle" :percent="70" status="exception" />
        <lis-progress type="circle" :percent="100" />
      </template>`

    this.msgDash = ` <template>
        <lis-progress :percent="60" :success-percent="30" status="active"/>
        <lis-progress :percent="60" :success-percent="30" type="circle" />
        <lis-progress :percent="60" :success-percent="30" type="dashboard" />
      </template>`
  }
}
</script>

<style lang='scss' scoped>
</style>
