<template>
  <div class="square"
       :style="cssVars">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'square',
  props: {
    title: {
      type: String,
      default: () => { return '名称' }
    },
    borderColor: {
      type: String,
      default: () => { return '#E66948' }
    },
    backColor: {
      type: String,
      default: () => { return 'transparent' }
    },
    color: {
      type: String,
      default: () => { return '#fff' }
    },
    fontSize: {
      type: String,
      default: () => { return '14px' }
    }
  },
  data () {
    return {

    }
  },
  computed: {
    cssVars () {
      return {
        '--color': this.color,
        '--border-color': this.borderColor,
        '--back-color': this.backColor,
        '--font-size': this.fontSize + 'px'
      }
    }
  }
}
</script>

<style lang='scss'>
.square {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color);
  font-size: var(--font-size);
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid var(--border-color);
    transform: rotate(45deg);
    background: var(--back-color);
  }
  span {
    z-index: 2;
  }
}
</style>
