<template>
  <a-row :gutter="gutter"
         :align="align"
         :justify="justify">
    <slot></slot>
  </a-row>
</template>

<script>
export default {
  name: 'LisRow',
  props: {
    gutter: {
      type: Number / Object / Array,
      default: () => { return 0 }
    },
    align: {
      type: String,
      default () { return 'top' }
    },
    justify: {
      type: String,
      default: () => { return 'start' }
    }
  }
}
</script>

<style scoped>
</style>
