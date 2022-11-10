<template>
  <a-popover trigger="contextmenu"
             v-model="visible"
             :placement="position"
             :getPopupContainer="getPopupContainer">
    <div slot="title">
      <span>{{ title }}</span>
      <span style="float: right"
            title="关闭">
        <a-icon type="close"
                @click="visible=false" />
      </span>
    </div>
    <a-input :value="inputContent"
             :placeholder="placeholder"
             :disabled="disabled"
             @focus="inputFocus"
             v-bind='$attrs'
             @change="handleInputChange"
             :readOnly="readOnly">
      <a-icon slot="suffix"
              type="fullscreen"
              @click.stop="pop" />
    </a-input>
    <div slot="content">
      <a-textarea ref="textarea"
                  :value="inputContent"
                  :disabled="disabled"
                  :placeholder="placeholder"
                  @input="handleInputChange"
                  :readOnly="readOnly"
                  :style="{ height: height + 'px', width: width + 'px' }" />
    </div>
  </a-popover>
</template>

<script>
export default {
  name: 'LisTextArea',
  props: {
    value: {
      type: String,
      default: '',
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    position: {
      type: String,
      default: 'right',
      required: false
    },
    height: {
      type: Number,
      default: 200,
      required: false
    },
    width: {
      type: Number,
      default: 300,
      required: false
    },
    popContainer: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: () => { return '' }
    }
  },
  data () {
    return {
      visible: false,
      inputContent: ''
    }
  },

  watch: {
    value: {
      handler: function () {
        // 注释掉，在有增加功能的页面，引用此组件，值必须为空
        // if (this.value && this.value.length > 0) {
        this.inputContent = this.value
        // }
      },
      immediate: true
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    handleInputChange (event) {
      this.inputContent = event.target.value
      this.$emit('change', this.inputContent)
    },
    pop () {
      this.visible = true
    },
    inputFocus () {
      this.visible = true
    },
    getPopupContainer (node) {
      if (!this.popContainer) {
        return node.parentNode
      } else {
        return document.body
      }
    }
  }
}
</script>

<style scoped>
::v-deep .ant-input-suffix {
  z-index: 1;
}
</style>
