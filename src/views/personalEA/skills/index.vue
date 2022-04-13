<template>
  <div class="skills">
    <square title="H5"
            fontSize="26" />
    <square title="CSS3"
            fontSize="26"
            backColor="#E66948" />
    <square title="H5"
            fontSize="26" />
    <square title="VUE2"
            fontSize="26" />
    <square title="Element"
            fontSize="16"
            backColor="#E66948" />
    <square title="AntDesign"
            fontSize="16" />
    <square title="Uni-app"
            fontSize="16" />
    <square title="Axios"
            fontSize="20"
            backColor="#E66948" />
    <square title="微信小程序"
            fontSize="16" />
  </div>
</template>

<script>
import Square from '@/components/common/square.vue'
export default {
  name: 'index',
  components: {
    Square
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.skills {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: url(~@/assets/home/bizarre2.jpg);
  // background-size: cover;
  overflow: hidden;
  .square {
    position: relative;
    &:nth-child(odd) {
      top: 40px;
    }
    &:nth-child(even) {
      top: -40px;
    }
  }
  // &::before {
  //   content: "";
  //   position: relative;
  //   left: -100px;
  //   height: 0;
  //   width: 5px;
  //   height: 200px;
  //   background: #e66948;
  //   border-radius: 10px;
  //   transform: rotate(20deg);
  // }
  // &::after {
  //   content: "";
  //   position: relative;
  //   right: -100px;
  //   height: 0;
  //   width: 5px;
  //   height: 200px;
  //   background: #e66948;
  //   border-radius: 10px;
  //   transform: rotate(20deg);
  // }
}
</style>
