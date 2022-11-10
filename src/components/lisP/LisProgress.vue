<template>
  <a-progress :percent="percent"
              :success-percent="successPercent"
              :type="type"
              :status="status"
              :show-info="showInfo || true"
              :width="width"
              :strokeColor="strokeColor"
              :format="format">
    <slot></slot>
  </a-progress>
</template>

<script>
export default {
  name: 'LisProgress',
  props: {
    percent: Number,
    successPercent: Number,
    type: String,
    status: String,
    showInfo: Boolean,
    width: Number,
    strokeColor: String | Object,
    format: Function
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
