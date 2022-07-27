<template>
  <div class="cover-page">
    <resume class="resume" />
    <number class="number"
            num="08" />
    <career class="career" />
    <conscientious class="conscientious" />
    <cuboid class="cuboid" />
    <design class="design" />
  </div>
</template>

<script>
import Resume from './Resume'
import Number from './Number'
import Career from './Career'
import Conscientious from './Conscientious'
import Cuboid from './Cuboid'
import Design from './Design'
export default {
  name: 'index',
  components: {
    Resume,
    Number,
    Career,
    Conscientious,
    Cuboid,
    Design
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$color-text: #d9d7e1;
.cover-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-width: 1100px;
  min-height: 800px;
  background: #1c1c28;
  color: $color-text;
  .resume {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .number {
    position: absolute;
    left: 40px;
    top: 40px;
  }
  .career {
    position: absolute;
    right: 40px;
    top: 40px;
  }
  .conscientious {
    position: absolute;
    left: 40px;
    bottom: 40px;
  }
  .cuboid {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }
  .design {
    position: absolute;
    left: 50%;
    top: 100%;
    -webkit-transform: translate(-50%, -100%);
    -moz-transform: translate(-50%, -100%);
    transform: translate(-50%, -100%);
    bottom: -67px;
  }
}
</style>
