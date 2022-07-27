<template>
  <div class="design">
    <span>DESIGN BY 磨敦仁</span>
  </div>
</template>

<script>
export default {
  name: 'Design',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$background-main: #4486f0;
.design {
  font-size: 16px;
  letter-spacing: 2px;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -60px;
    width: 2px;
    height: 50px;
    background: $background-main;
  }
}
</style>
