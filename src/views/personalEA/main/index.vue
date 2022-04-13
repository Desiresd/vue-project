<template>
  <div class="mains">
    <heads />
    <div class="dream">
      <titles />
      <contents />
    </div>
  </div>
</template>

<script>
import Heads from './../heads/index.vue'
import Titles from './titles.vue'
import Contents from './contents.vue'
export default {
  name: 'index',
  components: {
    Heads,
    Titles,
    Contents
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.mains {
  position: relative;
  font-family: "Lucida Console", Courier, monospace;
  background: url(~@/assets/home/scene.jpg);
  background-size: cover;
  width: 100%;
  height: 100vh;
  .dream {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
