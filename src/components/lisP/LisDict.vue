<template>
  <span v-if="type === 'text'">
    <span v-if="!!isTooltip">
      <lis-ellipsis-tip :value='name'
                        :length='10' />
    </span>
    <span v-else>
      {{name}}
    </span>
  </span>
  <a-select v-else
            :placeholder='placeholder'
            style='width: 100%'
            :disabled='disabled'
            :value="getValueSting"
            @change="handleInput">
    <a-select-option value="">{{ placeholder }}</a-select-option>
    <a-select-option v-for="(item, key) in dictArr"
                     :key="key"
                     :value="item.value">
      <span style="width: 100%"
            :title=" item.text || item.label ">
        {{ item.text || item.label }}
      </span>
    </a-select-option>
  </a-select>
</template>

<script>
import { initDictOptions } from '@/api/sys'
import LisEllipsisTip from './LisEllipsisTip.vue'
export default {
  components: {
    LisEllipsisTip
  },
  props: {
    isTooltip: {
      type: Boolean,
      default: () => { return false }
    },
    value: {
      type: String,
      default: () => { return '' }
    },
    dictCode: {
      type: String,
      default: () => { return '' }
    },
    type: {
      type: String,
      default: () => { return 'text' }
    },
    placeholder: {
      type: String,
      default: () => { return '请选择' }
    },
    disabled: {
      type: Boolean,
      default: () => { return false }
    }
  },
  watch: {
    dictCode () {
      this.getData()
      this.handleInput('2')
    }
  },
  data () {
    return {
      dictArr: []
    }
  },
  created () {
    this.getData()
  },
  computed: {
    name () {
      for (let i = 0; i < this.dictArr.length; i++) {
        if (this.dictArr[i]['value'] === this.value) {
          return this.dictArr[i]['text']
        }
      }
      return this.value
    },
    getValueSting () {
      return this.value != null ? this.value.toString() : undefined
    }
  },
  methods: {
    getData () {
      initDictOptions(this.dictCode).then((res) => {
        if (res.status === 200) {
          this.dictArr = res.data
        }
      })
    },
    handleInput (e = '') {
      this.$emit('input', e)
      this.$emit('change', e)
    }
  }
}
</script>

<style>
</style>
