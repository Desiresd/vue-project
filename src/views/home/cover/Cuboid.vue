<template>
  <div class="cuboid"></div>
</template>

<script>
export default {
  name: 'Cuboid',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$color-text: #d9d7e1;
.cuboid {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -40px;
    top: -6px;
    width: 40px;
    height: 6px;
    border: 1px solid $color-text;
  }
  &::after {
    content: "";
    position: absolute;
    left: -6px;
    top: -40px;
    width: 6px;
    height: 40px;
    border: 1px solid $color-text;
  }
}
</style>
