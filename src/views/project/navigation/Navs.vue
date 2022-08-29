<template>
  <div class="navs">
    <el-row>
      <el-col :xs="8"
              :sm="6"
              :md="4"
              :lg="3"
              :xl="3"
              v-for="item in navs"
              :key="item.navsId">
        <span @click="toPath(item.navsId)">{{ item.navsName }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Navs',
  props: {
    navs: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    toPath (ref) {
      var element = document.getElementById(ref)
      element.scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #ffffff;
.navs {
  position: relative;
  box-sizing: border-box;
  padding: 20px 40px 10px 40px;
  margin-bottom: 10px;
  background: $color-back;
  border-radius: 4px;
  .el-col {
    margin-bottom: 10px;
  }
  span {
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
