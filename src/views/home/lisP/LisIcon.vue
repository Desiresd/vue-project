<template>
  <div class="lis-icon">
    <lis-icon type="left-square"
              :style="{'fontSize': '40px'}" />
    <lis-icon type="left-square"
              :style="{'fontSize': '40px'}"
              :theme="'filled'" />
    <lis-icon type="left-square"
              :style="{'fontSize': '40px'}"
              :theme="'filled'"
              :spin="false"
              :rotate="45" />
    <lis-icon type="left-square"
              :style="{'fontSize': '40px'}"
              :theme="'filled'"
              :spin="true"
              :rotate="45" />
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisIcon from '@/components/LisP/LisIcon'
export default {
  name: 'LisIcons',
  components: {
    HighLight,
    LisIcon
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = `<template>
      <lis-icon type="left-square" :style="{'fontSize': '40px'}" />
      <lis-icon type="left-square" :style="{'fontSize': '40px'}" :theme="'filled'" />
      <lis-icon type="left-square" :style="{'fontSize': '40px'}" :theme="'filled'" :spin="false" :rotate="45" />
      <lis-icon type="left-square" :style="{'fontSize': '40px'}" :theme="'filled'" :spin="true" :rotate="45" />
    </template>
    `
  }
}
</script>

<style scoped>
.lis-icon i {
  margin-left: 20px;
}
</style>
