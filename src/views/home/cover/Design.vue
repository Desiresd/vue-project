<template>
  <div class="design">
    <span>DESIGN BY 磨敦仁</span>
    <router-link to="catalog">
      <span class="advance">点击前进</span>
    </router-link>
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
$color-white: #ffffff;
$background-main: #4486f0;
.design {
  font-size: 16px;
  letter-spacing: 2px;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -60px;
    width: 3px;
    height: 50px;
    background: $background-main;
  }
  &::after {
    content: "";
    position: absolute;
    left: 56%;
    top: -130px;
    background: $background-main;
    width: 80px;
    height: 100px;
    border-radius: 80px 0;
    transform: rotate(8deg);
  }
  .advance {
    position: absolute;
    left: 113px;
    top: -103px;
    color: $color-white;
    z-index: 9;
    text-shadow: 6px 6px 5px #000000;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
