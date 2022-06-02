<template>
  <div class="position-right">
    <position-head :title="title" />
    <slot />
  </div>
</template>

<script>
import PositionHead from './PositionHead'
export default {
  components: {
    PositionHead
  },
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.position-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 350px;
  height: 84vh;
  z-index: 999;
  margin-top: 8vh;
  background: #ffffff;
}
</style>
