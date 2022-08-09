<template>
  <div class="search">
    <div class="box">
      <el-input v-model="input"
                prefix-icon="el-icon-service"
                placeholder="请输入搜索内容">
        <i slot="suffix"
           class="el-icon-search suffix"
           @click="search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    search () {
      this.$message({
        message: '开发中',
        type: 'error'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #ffffff;
.search {
  position: relative;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-back;
  .box {
    width: 60%;
  }
  /deep/ .el-input__inner {
    border-radius: 20px;
  }

  /deep/ .el-input__icon {
    font-weight: bold;
  }

  .suffix {
    width: 30px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
