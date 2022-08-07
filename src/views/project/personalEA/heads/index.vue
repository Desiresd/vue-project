<template>
  <div class="head">
    <navs />
  </div>
</template>

<script>
import Logo from './logo'
import Navs from './navs.vue'
export default {
  name: 'index',
  components: {
    Logo,
    Navs
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.head {
  position: relative;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.4;
  }
  // &::after {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  //   height: 1px;
  //   background: #eee;
  // }
}
</style>
