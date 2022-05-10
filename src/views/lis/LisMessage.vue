<template>
  <div>
    <lis-button type="success"
                @click="success"> Success </lis-button>
    <lis-button type="warning"
                @click="warning"> Warning </lis-button>
    <lis-button type="error"
                @click="error"> Error </lis-button>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisButton from '@/components/lis/LisButton'
export default {
  name: 'LisMessages',
  components: {
    HighLight,
    LisButton
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = `<template>
      <lis-button type="success" @click="success"> Success </lis-button>
      <lis-button type="warning" @click="warning"> Warning </lis-button>
      <lis-button type="error" @click="error"> Error </lis-button>
    <template>
    
    export default {
      methods: {
        success () {
          this.$message.success('This is a success message')
        },
        warning () {
          this.$message.warning('This is a warning message')
        },
        error () {
          this.$message.error('This is a error message')
        }
      }
    }`
  },
  methods: {
    success () {
      this.$message.success('This is a success message')
    },
    warning () {
      this.$message.warning('This is a warning message')
    },
    error () {
      this.$message.error('This is a error message')
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
