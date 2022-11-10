<template>
  <a-input-number :value="value"
                  :placeholder="placeholder || label"
                  :disabled="disabled"
                  :step="step"
                  :formatter="formatter"
                  style="width: 100%"
                  @change="change" />
</template>

<script>
export default {
  name: 'LisInputNumber',
  props: {
    value: Number | String,
    label: String,
    placeholder: String,
    min: Int8Array,
    disabled: Boolean,
    step: Number | String,
    formatter: Function
  },
  methods: {
    change (value) {
      this.$emit('input', value)
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>
</style>
