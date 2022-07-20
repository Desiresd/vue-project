<template>
  <div class="home">
    <left-content class="left-content" />
    <center-content class="center-content" />
    <right-content class="right-content" />
  </div>
</template>

<script>
import LeftContent from './left/index'
import rightContent from './right/index'
import centerContent from './center/index'
export default {
  name: 'Index',
  components: {
    LeftContent,
    rightContent,
    centerContent
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/home/back.png") no-repeat center center;
  background-size: cover;
  display: flex;
  min-width: 1300px;
  min-height: 900px;
  .left-content,
  .right-content {
    width: 400px;
    color: azure;
    display: flex;
    flex-direction: column;
  }
  .center-content {
    flex: 1;
    color: azure;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding-top: 2%;
    padding-bottom: 1%;
  }
}
</style>
