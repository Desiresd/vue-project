<template>
  <div>
    <!-- 圣杯布局 -->
    <header class="h1">圣杯头部</header>
    <div class="container1">
      <div class="content main">中间</div>
      <div class="content left">左侧</div>
      <div class="content right">右侧</div>
    </div>
    <footer class="f1">圣杯尾部</footer>
    <!-- 双飞翼布局 -->
    <hr>
    <header class="h2">双飞翼头部</header>
    <div class="container2">
      <div class="content main">
        <div>中间</div>
      </div>
      <div class="content left">左侧</div>
      <div class="content right">右侧</div>
    </div>
    <footer class="f2">双飞翼尾部</footer>
  </div>
</template>

<script>
export default {
  name: '圣杯双飞翼布局',
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.h1,
.f1,
.h2,
.f2 {
  width: 100%;
  height: 60px;
  background-color: red;
}

.container1 {
  height: 200px;
  width: 100%;
  padding: 0 150px;

  .main {
    width: 100%;
    background-color: blue;
  }

  .left {
    width: 150px;
    background-color: aqua;
    margin-left: -100%;
    position: relative;
    left: -150px;
  }

  .right {
    width: 150px;
    background-color: aquamarine;
    margin-left: -150px;
    position: relative;
    right: -150px;
  }

  .content {
    height: 100%;
    float: left;
  }
}

.container2 {
  height: 200px;
  width: 100%;

  .main {
    width: 100%;
    background-color: blue;
    padding: 0 150px;
  }

  .left {
    width: 150px;
    background-color: aqua;
    margin-left: -100%;
  }

  .right {
    width: 150px;
    background-color: aquamarine;
    margin-left: -150px;
  }

  .content {
    height: 100%;
    float: left;
  }
}
</style>
