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
           okText="确认"
           cancelText="取消"
           title="title">
    <slot></slot>
    <template v-if="showOnly"
              slot="footer">
      <a-button type="primary"
                @click="ok">确定</a-button>
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
    title: String
  },
  data () {
    return {
      visible: false,
      showOnly: false
    }
  },
  methods: {
    ok (e) {
      this.$emit('ok', e)
    },
    cancel (e) {
      this.$emit('cancel', e)
    }
  }
}
</script>

<style scoped>
</style>
