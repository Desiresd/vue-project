<template>
  <a-steps :current="value"
           :size="size"
           :status="status"
           :initial="initial"
           :direction="direction"
           :progressDot="progressDot"
           @change="onChange">
    <slot></slot>
  </a-steps>
</template>

<script>
export default {
  name: 'LisSteps',
  props: {
    value: Number,
    size: String,
    status: String,
    initial: Number,
    direction: String,
    progressDot: Boolean
  },
  methods: {
    onChange (current) {
      this.$emit('input', current)
      this.$emit('change', current)
    }
  }
}

</script>

<style scoped>
</style>
