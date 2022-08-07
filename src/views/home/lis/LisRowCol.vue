<template>
  <div>
    <div>
      <a-steps v-model="currentH"
               size="small"
               :initial="1"
               :progressDot="true">
        <a-step title="8"></a-step>
        <a-step title="16"></a-step>
        <a-step title="24"></a-step>
        <a-step title="32"
                subTitle="水平间距（Gutter）"></a-step>
      </a-steps>
      <a-steps v-model="currentV"
               size="small"
               :initial="1"
               :progressDot="true">
        <a-step title="8"></a-step>
        <a-step title="16"></a-step>
        <a-step title="24"></a-step>
        <a-step title="32"
                subTitle="垂直间距（Gutter）"></a-step>
      </a-steps>
      <a-steps v-model="currentC"
               size="small"
               :initial="1"
               :progressDot="true">
        <a-step title="2"></a-step>
        <a-step title="4"></a-step>
        <a-step title="6"></a-step>
        <a-step title="8"
                subTitle="一行数目(Number)"></a-step>
      </a-steps>
    </div>
    <lis-row :gutter="[currentH*8,currentV*8]">
      <lis-col v-for="(item,index) in currentC * 2"
               :key="index"
               :span="24 / ( currentC * 2 )">
        <div>Column</div>
      </lis-col>
    </lis-row>
    <lis-row :gutter="[currentH * 8,currentV * 8]">
      <lis-col v-for="(item,index) in currentC * 2"
               :key="index"
               :span="24 / ( currentC * 2 )">
        <div>Column</div>
      </lis-col>
    </lis-row>
    <high-light :key="key">{{ msg }}</high-light>
    <lis-row>
      <lis-col v-for="item in 8"
               :key="item"
               :xs="12"
               :sm="12"
               :md="8"
               :lg="6"
               :xl="4"
               :xxl="3">
        <div>Column</div>
      </lis-col>
    </lis-row>
    <high-light>{{ msgAdep }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
export default {
  name: 'rowCol',
  components: {
    HighLight,
    LisRow,
    LisCol
  },
  watch: {
    currentD: {
      handler (newName) {
        this.msg = this.setMsg()
        ++this.key
      },
      immediate: true
    }
  },
  data () {
    return {
      key: 0,
      msg: '',
      msgAdep: '',
      currentH: 1,
      currentV: 1,
      currentC: 1
    }
  },
  created () {
    this.msgAdep = `<template>
      <lis-row>
        <lis-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" > Column </lis-col>
        <lis-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" > Column </lis-col>
        <lis-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" > Column </lis-col>
        <lis-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" > Column </lis-col>
        <lis-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" > Column </lis-col>
        <lis-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" > Column </lis-col>
        <lis-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" > Column </lis-col>
        <lis-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" > Column </lis-col>
      </lis-row>
    <template>`
  },
  computed: {
    currentD () {
      let obj = {
        currentH: this.currentH,
        currentV: this.currentV,
        currentC: this.currentC
      }
      const { currentH, currentV, currentC } = obj
      return { currentH, currentV, currentC }
    }
  },
  methods: {
    setMsg () {
      let num = Array.from({ length: this.currentC * 2 }, (_, i) => 1 + (i))
      let col = num.map(item => {
        return `
        <lis-col :span="${24 / (this.currentC * 2)}" > Column </lis-col>`
      }).join('\n')
      let msg =
        `<template>
      <lis-row :gutter="[${this.currentH * 8},${this.currentV * 8}]" >
        ${col}
      </lis-row>
    <template/>`
      return msg
    }
  }
}
</script>

<style scoped>
.ant-col {
  text-align: center;
  color: #fff;
  padding: 4px;
}
.ant-row .ant-col div {
  padding: 10px;
}

.ant-row .ant-col:nth-child(odd) div {
  background: rgba(0, 160, 233, 0.7);
}

.ant-row .ant-col:nth-child(even) div {
  background: #00a0e9;
}
</style>
