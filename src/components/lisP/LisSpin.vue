<template>
  <a-spin :spinning="spinning"
          :tip="tip">
    <slot></slot>
  </a-spin>
</template>

<script>
export default {
  name: 'LisSpin',
  props: {
    spinning: Boolean,
    tip: String
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
