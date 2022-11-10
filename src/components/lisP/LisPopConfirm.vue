<template>
  <a-popconfirm :placement="placement || 'topLeft'"
                :ok-text="okText || 'Yes'"
                :cancel-text="cancelText || 'No'"
                :title="title"
                @confirm="confirm"
                @cancel="cancel">
    <slot></slot>
  </a-popconfirm>
</template>

<script>
export default {
  name: 'LisPopConfirm',
  props: {
    title: String,
    placement: String,
    okText: String,
    cancelText: String
  },
  data () {
    return {

    }
  },
  methods: {
    confirm (e) {
      this.$emit('confirm', e)
    },
    cancel (e) {
      this.$emit('cancel', e)
    }
  }
}
</script>

<style scoped>
</style>
