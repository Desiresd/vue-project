<template>
  <a-tooltip placement="topLeft">
    <template slot="title">
      <span>{{ value }}</span>
    </template>
    {{ value | ellipsis(length,location) }}
  </a-tooltip>
</template>

<script>
export default {
  name: 'LisEllipsisTip',
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    length: {
      type: Number,
      required: false,
      default: 25
    },
    location: {
      type: String,
      default: () => { return 'center' }
    }
  },
  filters: {
    ellipsis (value, num, location) {
      const nums = num || 10
      if (!value) return ''
      if (value.length > nums && location === 'center') {
        let numL = Math.ceil(nums / 2)
        let numR = nums - numL
        return value.slice(0, numL) + '...' + value.slice(-numR)
      }
      if (value.length > nums && location === 'right') {
        return value.slice(0, 20) + '...' + value.slice(-5)
      }
      return value
    }
  }
}
</script>

<style scoped>
</style>
