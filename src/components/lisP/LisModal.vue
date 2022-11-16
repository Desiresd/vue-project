<template>
  <a-modal :visible="visible"
           :width="width"
           :keyboard="keyboard"
           :closable="closable"
           :centered="centered"
           @ok="ok"
           @cancel="cancel"
           :maskClosable="maskClosable"
           :mask="mask"
           :okText="okText"
           :cancelText="cancelText"
           :title="title">
    <slot></slot>
    <template v-if="showOnly"
              slot="footer">
      <a-button type="primary"
                @click="closed">关闭</a-button>
    </template>
  </a-modal>
</template>

<script>
export default {
  name: 'LisModal',
  props: {
    width: String,
    keyboard: Boolean,
    closable: Boolean,
    centered: Boolean,
    maskClosable: Boolean,
    mask: Boolean,
    title: String,
    okText: { type: String, default: () => { return '确认' } },
    cancelText: { type: String, default: () => { return '取消' } },
    showOnly: { type: Boolean, default: () => { return false } }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    ok (e) {
      this.$emit('ok', e)
    },
    cancel (e) {
      this.$emit('cancel', e)
    },
    closed (e) {
      this.$emit('closed', e)
    }
  }
}
</script>

<style scoped>
</style>
