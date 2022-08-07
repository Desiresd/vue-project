<template>
  <div class="boundary"></div>
</template>

<script>
export default {
  name: 'Boundary',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.boundary {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 1px;
    background: #74787c;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 8px;
    background: #74787c;
  }
}
</style>
