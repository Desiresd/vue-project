<template>
  <div class="select-title">
    <lis-dict v-model="name"
              type="select"
              :dictCode="dictCode" />
  </div>
</template>

<script>
import LisDict from '@/components/lis/LisDict'
export default {
  name: 'SelectTitle',
  components: {
    LisDict
  },
  props: {
    dictCode: {
      type: String,
      default: () => { return 'lccontry' }
    }
  },
  data () {
    return {
      name: '烟气湿度ex527'
    }
  }
}
</script>

<style lang="scss" scoped>
.select-title {
  position: relative;
  width: 150px;
}

/deep/ .ant-select-selection.ant-select-selection--single {
  height: 24px;
  background: transparent;
  color: #308db9;
  border: 1px solid #308db9;
  border-radius: 50px;
}

/deep/ .ant-select-selection__rendered {
  line-height: 22px;
}

/deep/ .ant-select-arrow {
  color: #308db9;
}

/deep/ .ant-select-selection__clear {
  background: transparent;
  color: #308db9;
}
</style>
