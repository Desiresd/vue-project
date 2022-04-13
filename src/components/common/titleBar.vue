<template>
  <div class="title-bar">
    <span> {{ name }} </span>
  </div>
</template>

<script>
export default {
  name: 'titleBar',
  props: {
    name: {
      type: String,
      default: () => { return 'title' }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.title-bar {
  position: relative;
  span {
    position: relative;
    font-size: 22px;
    font-weight: bold;
    &::before {
      content: "";
      position: absolute;
      left: -80px;
      top: 50%;
      width: 60px;
      height: 2px;
      background: #fff;
    }
    &::after {
      content: "";
      position: absolute;
      right: -80px;
      top: 50%;
      width: 60px;
      height: 2px;
      background: #fff;
    }
  }
}
</style>
