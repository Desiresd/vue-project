<template>
  <a-rate :value="value"
          :allowClear="allowClear"
          :allowHalf="allowHalf"
          :autoFocus="autoFocus"
          :count="count"
          :defaultValue="defaultValue"
          :disabled="disabled"
          :tooltips="tooltips"
          @change="change" />
</template>

<script>
export default {
  name: 'LisRate',
  props: {
    value: { type: Number, default: () => 0 },
    allowClear: { type: Boolean, default: () => true },
    allowHalf: { type: Boolean, default: () => false },
    autoFocus: { type: Boolean, default: () => false },
    count: { type: Number, default: () => 5 },
    defaultValue: { type: Number, default: () => 0 },
    disabled: { type: Boolean, default: () => false },
    tooltips: { type: Array, default: () => [] }
  },
  methods: {
    change (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
</style>
