<template>
  <div>
    <lis-row>
      <lis-col :xs="6"
               :sm="6"
               :md="6"
               :lg="6"
               :xl="4"
               :xxl="3">
        <lis-switch v-model="check1" />
      </lis-col>
      <lis-col :xs="6"
               :sm="6"
               :md="6"
               :lg="6"
               :xl="4"
               :xxl="3">
        <lis-switch v-model="check2"
                    checkChildren="开"
                    unCheckChildren="关" />
      </lis-col>
      <lis-col :xs="6"
               :sm="6"
               :md="6"
               :lg="6"
               :xl="4"
               :xxl="3">
        <lis-switch v-model="check3"
                    checkChildren="是"
                    unCheckChildren="否" />
      </lis-col>
      <lis-col :xs="6"
               :sm="6"
               :md="6"
               :lg="6"
               :xl="4"
               :xxl="3">
        <lis-switch v-model="check4"
                    checkChildren="1"
                    unCheckChildren="0"
                    :checked="check4">
        </lis-switch>
      </lis-col>
    </lis-row>
    <div style="margin-top: 20px">
      <p>check1: {{ check1 }}</p>
      <p>check2: {{ check2 }}</p>
      <p>check3: {{ check3 }}</p>
      <p>check4: {{ check4 }}</p>
    </div>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisSwitch from '@/components/lis/LisSwitch'
export default {
  name: 'LisSwitchs',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisSwitch
  },
  data () {
    return {
      msg: '',
      check1: false,
      check2: false,
      check3: false,
      check4: true
    }
  },
  created () {
    this.msg = `<template>
      <lis-switch v-model="check1" />
      <lis-switch v-model="check2" checkChildren="开" unCheckChildren="关" />
      <lis-switch v-model="check3" checkChildren="是" unCheckChildren="否" />
      <lis-switch v-model="check4" checkChildren="1" unCheckChildren="0" :checked="check4"/>
    </template>
    
    export default {
      data () {
        return {
          check1: false,
          check2: false,
          check3: false,
          check4: true
        }
      }
    }`
  }
}
</script>

<style>
</style>
