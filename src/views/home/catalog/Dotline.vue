<template>
  <div class="dot-line">

  </div>
</template>

<script>
export default {
  name: 'Dotline',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$color-dotted: #1d2033;
.dot-line {
  position: absolute;
  width: 1px;
  height: 80%;
  background-image: linear-gradient(
    to bottom,
    $color-dotted 0%,
    $color-dotted 50%,
    transparent 0%
  );
  background-size: 1px 20px;
  background-repeat: repeat-y;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &::before {
    content: "";
    position: absolute;
    left: -3.5px;
    top: -17px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: $color-dotted;
  }
  &::after {
    content: "";
    position: absolute;
    left: -3.5px;
    bottom: -17px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: $color-dotted;
  }
}
</style>
