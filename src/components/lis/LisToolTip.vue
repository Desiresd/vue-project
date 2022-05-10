<template>
  <a-tooltip :placement="placement">
    <template slot="title">
      {{ title }}
    </template>
    <slot></slot>
  </a-tooltip>
</template>

<script>
export default {
  name: 'LisToolTip',
  props: {
    title: String,
    placement: String
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
