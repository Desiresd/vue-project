<template>
  <div class="catalog">
    <router-link to="cover"
                 class="router">
      <el-button>调整</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.catalog {
  position: relative;
  // width: 100vw;
  width: 100%;
  height: 100vh;
  background: red;
  overflow: hidden;
  .router {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
