<template>
  <div class="conscientious">
    <span>CONSCIENTIOUS</span>
  </div>
</template>

<script>
export default {
  name: 'Conscientious',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.conscientious {
  position: relative;
  letter-spacing: 2px;
  &::before {
    content: "+";
    position: absolute;
    left: 0;
    top: -35px;
    font-size: 30px;
  }
}
</style>
