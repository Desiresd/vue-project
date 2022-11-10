<template>
  <div>
    <lis-row>
      <lis-col :xs="24"
               :sm="24"
               :md="24"
               :lg="24"
               :xl="12">
        <lis-buttons type="default"> Button </lis-buttons>
        <lis-buttons type="primary"> Button </lis-buttons>
        <lis-buttons type="dashed"> Button </lis-buttons>
        <lis-buttons type="danger"> Button </lis-buttons>
        <lis-buttons type="link"> Button </lis-buttons>
        <high-light> {{ msgType }} </high-light>
      </lis-col>
      <lis-col :xs="24"
               :sm="24"
               :md="24"
               :lg="24"
               :xl="12">
        <lis-buttons type="default"
                     icon="search"></lis-buttons>
        <lis-buttons type="primary"
                     shape="circle"> B </lis-buttons>
        <lis-buttons type="danger"
                     icon="search"
                     size="large"> Button </lis-buttons>
        <lis-buttons type="danger"
                     icon="search"
                     size="default"
                     loading> Button </lis-buttons>
        <lis-buttons type="danger"
                     icon="search"
                     size="small"
                     disabled> Button </lis-buttons>
        <lis-buttons type="primary"
                     icon="search"
                     size="default"
                     block> Button </lis-buttons>
        <high-light> {{ msgSize }} </high-light>
      </lis-col>
    </lis-row>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisRow from '@/components/lisP/LisRow'
import LisCol from '@/components/lisP/LisCol'
import LisButtons from '@/components/lisP/LisButton'
export default {
  name: 'LisButton',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisButtons
  },
  data () {
    return {
      msgType: '',
      msgSize: ''
    }
  },
  created () {
    this.setMeg()
  },
  methods: {
    setMeg () {
      let msgType = `<template>
        <lis-buttons type="default"> Button </lis-buttons>
        <lis-buttons type="primary"> Button </lis-buttons>
        <lis-buttons type="dashed"> Button </lis-buttons>
        <lis-buttons type="danger"> Button </lis-buttons>
        <lis-buttons type="link"> Button </lis-buttons>
     </template>`

      let msgSize = `<template>
        <lis-buttons type="default" icon="search"></lis-buttons>
        <lis-buttons type="primary" shape="circle"> B </lis-buttons>
        <lis-buttons type="danger" icon="search" size="large"> Button </lis-buttons>
        <lis-buttons type="danger" icon="search" size="default" loading> Button </lis-buttons>
        <lis-buttons type="danger" icon="search" size="small" disabled> Button </lis-buttons>
        <lis-buttons type="primary" icon="search" size="default" block> Button </lis-buttons>
     </template>`
      this.msgSize = msgSize
      this.msgType = msgType
    }
  }
}
</script>

<style scoped>
.ant-col {
  padding: 10px;
}
</style>
