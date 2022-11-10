<template>
  <a-switch :value="value"
            :checked-children="checkChildren"
            :un-checked-children="unCheckChildren"
            :checked="checked"
            @change="change">
  </a-switch>

</template>

<script>
export default {
  name: 'LisSwitch',
  props: {
    value: Boolean,
    checkChildren: String,
    unCheckChildren: String,
    checked: Boolean
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
