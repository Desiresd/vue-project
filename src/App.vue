<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-size: 14px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: unset;
  padding: unset;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  background: #0c0c0c49;
  border-radius: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold !important;
}
</style>
