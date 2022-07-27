<template>
  <div class="number">
    <div>{{ num }}</div>
    <div>COVER</div>
  </div>
</template>

<script>
export default {
  name: 'Number',
  props: {
    num: {
      type: [String, Number],
      default: () => { return '00' }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$color-text: #d9d7e1; // 辅助颜色
.number {
  display: flex;
  flex-direction: column;
  color: $color-text;
  div {
    border: 2px solid $color-text;
    box-sizing: border-box;
    padding: 4px 4px;
    font-weight: bold;
    &:first-child {
      width: 50px;
      border-bottom: unset;
    }
    &:last-child {
      width: 100px;
    }
  }
}
</style>
