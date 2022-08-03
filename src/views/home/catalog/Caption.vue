<template>
  <div class="caption">
    <span>目录</span>
    <span>Catalog</span>
  </div>
</template>

<script>
export default {
  name: 'Caption',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #1c1c28;
.caption {
  display: flex;
  box-sizing: border-box;
  padding: 100px 120px;
  font-size: 60px;
  span {
    writing-mode: vertical-lr;
    letter-spacing: 2px;
    &:first-child {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 43px;
        top: -16px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $color-back;
      }
      &::after {
        content: "";
        position: absolute;
        left: 43px;
        top: 136px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $color-back;
      }
    }
    &:last-child {
      font-size: 20px;
      margin-top: 40px;
    }
  }
}
</style>
