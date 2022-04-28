<template>
  <a-input-number v-model="valueD"
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
    value: Number,
    label: String,
    placeholder: String,
    min: Int8Array,
    disabled: Boolean,
    step: Number | String,
    formatter: Function
  },
  data () {
    return {
      valueD: null
    }
  },
  watch: {
    value: {
      handler (newName) {
        this.valueD = newName
      },
      immediate: true
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
