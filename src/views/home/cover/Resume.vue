<template>
  <div class="resume">
    <span class="create-time">2020-2022</span>
    <div class="title">
      <span>RESUME</span>
      <span>个人作品集</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$background-main: #4486f0;
$color-white: #ffffff;
.resume {
  width: 800px;
  height: 300px;
  border: 2px solid $background-main;
  color: $color-white;
  .create-time {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 130px;
    letter-spacing: 5px;
    opacity: 0.2;
    z-index: 20;
  }
  .title {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 90;
    span {
      letter-spacing: 2px;
      &:first-child {
        font-size: 100px;
        font-weight: bold;
        color: $background-main;
        letter-spacing: 10px;
      }
      &:last-child {
        font-size: 40px;
        margin-top: 20px;
      }
    }
  }
}
</style>
