<template>
  <a-button :type="type"
            :html-type="htmlType"
            :disabled="disabled"
            :loading="loading"
            :shape="shape"
            :icon="icon"
            :size="size"
            :block="block"
            :style="{ marginLeft: '8px',marginBottom:'8px' }"
            @click="click">
    <slot></slot>
  </a-button>
</template>

<script>
export default {
  name: 'LisButton',
  props: {
    type: String,
    htmlType: String,
    disabled: Boolean,
    loading: Boolean,
    shape: String,
    icon: String,
    size: String,
    block: Boolean
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
</style>
