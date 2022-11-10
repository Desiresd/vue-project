<template>
  <div>
    <a-row>
      <a-col :span="16">
        <a-slider v-model="inputValue"
                  :min="min"
                  :max="max"
                  :step="step" />
      </a-col>
      <a-col :span="6">
        <a-input-number v-model="inputValue"
                        :min="min"
                        :max="max"
                        :step="step"
                        style="marginLeft: 16px" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'LisSlider',
  props: {
    min: {
      type: Number,
      default: () => { return 1 }
    },
    max: {
      type: Number,
      default: () => { return 20 }
    },
    step: {
      type: Number,
      default: () => { return 1 }
    },
    value: {
      type: Number,
      default: () => { return 1 }
    }
  },
  watch: {
    value () {
      this.inputValue = this.value
    },
    inputValue () {
      this.$emit('input', this.inputValue)
    }
  },
  data () {
    return {
      inputValue: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}

/deep/ .ant-input-number {
  width: 100%;
}
</style>
