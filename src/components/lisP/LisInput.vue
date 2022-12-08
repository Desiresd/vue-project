<template>
  <a-input :placeholder="placeholder || label"
           v-model="valueD"
           :type="type"
           :disabled="disabled"
           :size="size"
           :allowClear="allowClear"
           :addonBefore="addonBefore"
           :addonAfter="addonAfter"
           @change="change">
    <slot></slot>
  </a-input>
</template>

<script>
export default {
  name: 'LisInput',
  props: {
    type: String,
    value: String,
    label: String,
    placeholder: String,
    disabled: Boolean,
    size: String,
    allowClear: Boolean,
    addonBefore: String,
    addonAfter: String
  },
  watch: {
    value: {
      handler (newName) {
        this.valueD = newName
      },
      immediate: true
    }
  },
  data () {
    return {
      valueD: ''
    }
  },
  methods: {
    change (e) {
      this.$emit('input', this.valueD)
      this.$emit('change', this.valueD)
    }
  }
}
</script>

<style scoped>
</style>
