<template>
  <div ref="colorS">
    <div class="color-con"
         @click="handleShowColor">
      <div class="color"
           :style="{background:color}"></div>
    </div>
    <div v-show="colorShow"
         class="color-content">
      <sketch-picker v-model="color"
                     :preset-colors="[
    '#f00', '#00ff00', '#00ff0055', 'rgb(201, 76, 76)', 'rgba(0,0,255,1)', 'hsl(89, 43%, 51%)', 'hsla(89, 43%, 51%, 0.6)','#000'
  ]"
                     @input="updateValue"></sketch-picker>
    </div>
  </div>
</template>

<script>
import { Sketch } from 'vue-color'
export default {
  name: 'ColorPicker',
  components: {
    'sketch-picker': Sketch
  },
  props: {
    value: {
      type: String,
      default: () => { return '#000' }
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.color = newValue
      },
      immediate: true
    }
  },
  data () {
    return {
      color: '',
      colorShow: false
    }
  },
  mounted () {
    // this的指向问题
    // let that = this
    // this.$nextTick(() => {
    //   document.addEventListener('click', function (e) {
    //     // 这里that代表组件，this代表document
    //     // 冒泡也不会隐藏
    //     if (!that.$refs.colorS.contains(e.target)) {
    //       that.colorShow = false
    //     }
    //   })
    // })
  },
  methods: {
    handleShowColor () {
      if (this.colorShow) {
        this.colorShow = false
      } else {
        this.colorShow = true
      }
    },
    updateValue (val) {
      this.color = val.hex
      this.$emit('input', val.hex)
    }
  }
}
</script>

<style lang="scss" scoped>
.color-con {
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-top: 10px;
}
.color-con .color {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  cursor: pointer;
}
.color-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(13%, -50%);
  z-index: 999;
}
::v-deep .vc-sketch-presets {
  height: 36px;
}

::v-deep .vc-sketch-field .vc-input__input {
  height: 22px;
  box-shadow: unset;
  border: 1px solid #ccc;
}
::v-deep .vc-sketch-field .vc-input__label {
  height: 26px;
  line-height: 26px;
  padding: unset;
}
</style>
